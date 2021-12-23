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
import { useHistory, useParams } from 'react-router-dom';
import { IParamsType } from '../../interfaces/ParamTypes';
import { useMock } from '../../hooks/mock';

interface ICreateEmployee {
    name: string;
    filial: string;
}


const EditEmployee: React.FC = () => {
    
    const formRef = useRef<FormHandles>(null);
    const [subsidiaries, setSubsidiaries] = useState<Array<ISubsidiary>>([]);
    const [employee, setEmployee] = useState<IEmployee>();
    const { getSubsidiaries, getEmployees, editEmployee } = useMock();
    const { id } = useParams<IParamsType>();
    const history = useHistory();

    useEffect(()=> {
        async function loadData(){
            
            const employeeResponse = await getEmployees();
            const employeeIndex = employeeResponse.findIndex(emp => emp.id === id);
            setEmployee(employeeResponse[employeeIndex]);
            
            const subsidiaryResponse = await getSubsidiaries();
            setSubsidiaries(subsidiaryResponse);
        }
        loadData();
    }, [getSubsidiaries, getEmployees, id]);

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
                await editEmployee({
                    filial: data.filial,
                    name: data.name,
                    id
                });
                history.push('/employees');
            }catch(error: any){
                alert(error.message);
            }


        }catch(error){
            const validationErrors = error as Yup.ValidationError;
            const errors = getErrors(validationErrors);
            formRef.current?.setErrors(errors);
        }
    }, [editEmployee, history, id]);

    return (
        <>
            <Header />
            <Title>Editar Funcionário</Title>
            <Container>
                <Content>
                    {
                    employee &&
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input icon={BiUser} name='name' defaultValue={employee.name} />
                        <Select icon={BiBuildingHouse} name='filial'>
                            {
                                subsidiaries.map(sub =>
                                    <option key={sub.id} value={sub.id}>{sub.name}</option>
                                )
                                
                            }
                        </Select>
                        <Button type='submit'>Salvar</Button>
                    </Form>
                    }
                </Content>
            </Container>
        </>
    );
}

export { EditEmployee };