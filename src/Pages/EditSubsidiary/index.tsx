import React, { useCallback, useRef } from 'react';
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

interface IEditSubsidiary {
    name: string;
}

interface IEditPage {
    subsidiary: ISubsidiary;
}

const EditSubsidiary: React.FC<IEditPage> = ({ subsidiary }) => {
    
    const { id, name: filialName, employeeNumber } = subsidiary;
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: IEditSubsidiary )=> {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome Obrigatório')
            });

            await schema.validate(data, {
                abortEarly: false
            });

            //Editar Filial Aqui

        }catch(error){
            const validationErrors = error as Yup.ValidationError;
            const errors = getErrors(validationErrors);
            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <>
            <Header />
            <Title>Editar Filial</Title>
            <Container>
                <Content>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input icon={BiBuildingHouse} name='name' defaultValue={filialName} />
                        <Info>Filial com {employeeNumber} funcionários</Info>
                        <Button type='submit'>Salvar</Button>
                    </Form>
                </Content>
            </Container>
        </>
    );
}

export { EditSubsidiary };