import React, { useCallback, useRef } from 'react';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import {
    Container,
    Title,
    Content
} from './styles';
import { FormHandles } from '@unform/core';
import { getErrors } from '../../utils/getErrors';

interface ISignIn {
    username: string;
    password: string;
}

const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: ISignIn) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                username: Yup.string().required('Usuário obrigatório'),
                password: Yup.string().required('Senha obrigatória')
            });

            await schema.validate(data, {
                abortEarly: false
            });

            //Logar AQUI

        }catch(error){
            const validationErrors = error as Yup.ValidationError;
            const errors = getErrors(validationErrors);
            formRef.current?.setErrors(errors);
        }
    }, []);

    return(
        <Container>
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}  >
                    <Title>Cabelex</Title>
                    <Input
                        icon={AiOutlineUser}
                        name='username'
                        placeholder='usuário'
                        />
                    <Input
                        icon={AiOutlineLock}
                        name='password'
                        placeholder='***********'
                        type='password'
                        />
                    <Button type='submit' >Entrar</Button>
                </Form>
            </Content>
        </Container>
    );
}

export { SignIn };