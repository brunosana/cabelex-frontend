import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BiBuildingHouse } from 'react-icons/bi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { getErrors } from '../../utils/getErrors';

import {
    Container,
    Title,
    Content,
    Info
} from './styles'
import { Header } from '../../Components/Header';
import ISubsidiary from '../../interfaces/Subsidiary';
import { useHistory, useParams } from 'react-router-dom';
import { IParamsType } from '../../interfaces/ParamTypes';
import { useMock } from '../../hooks/mock';

interface IEditSubsidiary {
    name: string;
}

const EditSubsidiary: React.FC = () => {
    
    const { id } = useParams<IParamsType>();
    const { getSubsidiaries, editSubsidiary, getEmployees } = useMock();
    
    const [subsidiary, setSubsidiary] = useState<ISubsidiary>();
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();

    useEffect(()=> {
        async function loadSubsidiary(){
            const response = await getSubsidiaries();
            const subIndex = response.findIndex(sub => sub.id === id);
            setSubsidiary(response[subIndex]);
        }
        loadSubsidiary();
    }, [getSubsidiaries, id]);

    const handleSubmit = useCallback(async (data: IEditSubsidiary )=> {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome Obrigatório')
            });

            await schema.validate(data, {
                abortEarly: false
            });

            try{
                await editSubsidiary({
                    id,
                    name: data.name
                });
                history.push('/home');
            }catch(error: any){
                alert(error.message);
            }

        }catch(error){
            const validationErrors = error as Yup.ValidationError;
            const errors = getErrors(validationErrors);
            formRef.current?.setErrors(errors);
        }
    }, [editSubsidiary, history, id]);

    return (
        <>
            <Header />
            <Title>Editar Filial</Title>
            {
            subsidiary &&
            <Container>
                <Content>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input icon={BiBuildingHouse} name='name' defaultValue={subsidiary.name} />
                        <Info>
                            {
                                subsidiary.employeeNumber > 0 ?
                                `Filial com ${subsidiary.employeeNumber} funcionário${subsidiary.employeeNumber > 1 ? 's' : '' }`
                                :
                                `Esta filial não possui funcionários`
                            }
                        </Info>
                        <Button type='submit'>Salvar</Button>
                    </Form>
                </Content>
            </Container>
            }
        </>
    );
}

export { EditSubsidiary };