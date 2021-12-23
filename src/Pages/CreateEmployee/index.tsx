import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BiUser, BiBuildingHouse } from 'react-icons/bi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { Select } from '../../Components/Select';
import { getErrors } from '../../utils/getErrors';

import {
    Container,
    Title,
    Content
} from './styles'
import { Header } from '../../Components/Header';
import ISubsidiary from '../../interfaces/Subsidiary';
import { useMock } from '../../hooks/mock';
import { useHistory } from 'react-router-dom';

interface ICreateEmployee {
    name: string;
    filial: string;
}

const CreateEmployee: React.FC = () => {
    
    const formRef = useRef<FormHandles>(null);
    const [subsidiaries, setSubsidiaries] = useState<Array<ISubsidiary>>([]);
    const history = useHistory();

    const { getSubsidiaries, createEmployee } = useMock();

    useEffect(() => {
        async function loadSubsidiaries(){
            const response = await getSubsidiaries();
            setSubsidiaries(response);
        }
        loadSubsidiaries();
    }, [getSubsidiaries]);

    const handleSubmit = useCallback(async (data: ICreateEmployee )=> {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome Obrigatório'),
                filial: Yup.string().required('Filial Obrigat[oria'),
            });

            await schema.validate(data, {
                abortEarly: false
            });

            try{
                await createEmployee({
                    name: data.name,
                    subsidiary: data.filial
                });
                history.push('/employees');

            }catch(error: any) {
                alert(error.message);
            }

        }catch(error){
            const validationErrors = error as Yup.ValidationError;
            const errors = getErrors(validationErrors);
            formRef.current?.setErrors(errors);
        }
    }, [createEmployee]);

    return (
        <>
            <Header />
            <Title>Cadastrar Funcionário</Title>
            <Container>
                <Content>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input icon={BiUser} name='name' placeholder='Nome do Funcionário...' />
                        <Select icon={BiBuildingHouse} name='filial'>
                            {
                                subsidiaries.map(sub =>
                                    <option key={sub.id} value={sub.id}>{sub.name}</option>
                                )
                                
                            }
                        </Select>
                        <Button type='submit'>Cadastrar</Button>
                    </Form>
                </Content>
            </Container>
        </>
    );
}

export { CreateEmployee };