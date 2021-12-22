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
    Content
} from './styles'
import { Header } from '../../Components/Header';

interface ICreateSubsidiary {
    name: string;
}

const CreateSubsidiary: React.FC = () => {
    
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: ICreateSubsidiary )=> {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome Obrigatório')
            });

            await schema.validate(data, {
                abortEarly: false
            });

            //Adicionar Filial Aqui

        }catch(error){
            const validationErrors = error as Yup.ValidationError;
            const errors = getErrors(validationErrors);
            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <>
            <Header />
            <Title>Nova Filial</Title>
            <Container>
                <Content>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input icon={BiBuildingHouse} name='name' placeholder='Nome da Filial' />
                        <Button type='submit'>Cadastrar</Button>
                    </Form>
                </Content>
            </Container>
        </>
    );
}

export { CreateSubsidiary };