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
import IEmployee from '../../interfaces/Employee';

interface IEditEmployee {
    employee: IEmployee;
    subsidiary: ISubsidiary;
}

interface ICreateEmployee {
    name: string;
    filial: string;
}

const subsidiariesFake = [
    {
        id: '1',
        employeeNumber: 7,
        name: 'Tobias Barreto' 
    },
    {
        id: '2',
        employeeNumber: 12,
        name: 'Aracaju' 
    },
    {
        id: '3',
        employeeNumber: 8,
        name: 'São Paulo' 
    },
] as Array<ISubsidiary>;

const EditEmployee: React.FC<IEditEmployee> = ({ employee, subsidiary }) => {
    
    const formRef = useRef<FormHandles>(null);
    const [subsidiaries, setSubsidiaries] = useState<Array<ISubsidiary>>(subsidiariesFake);

    useEffect(useCallback(() => {
        setSubsidiaries(subsidiaries);
    }, [subsidiaries]), []);

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

            //Editar Funcionário Aqui

        }catch(error){
            const validationErrors = error as Yup.ValidationError;
            const errors = getErrors(validationErrors);
            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <>
            <Header />
            <Title>Editar Funcionário</Title>
            <Container>
                <Content>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input icon={BiUser} name='name' defaultValue={employee.name} />
                        <Select icon={BiBuildingHouse} name='filial'>
                            {
                                subsidiaries.map(sub =>
                                    <option value={sub.id}>{sub.name}</option>
                                )
                                
                            }
                        </Select>
                        <Button type='submit'>Salvar</Button>
                    </Form>
                </Content>
            </Container>
        </>
    );
}

export { EditEmployee };