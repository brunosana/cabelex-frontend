import React, { useEffect, useState } from 'react';

import { Header } from '../../Components/Header';
import { SearchBar } from '../../Components/SearchBar';
import { Employee } from '../../Components/Employee';
import { Table } from '../../Components/Table';


import {
    Container,
    Content,
    EmployeeArea
} from './styles';
import IEmployee from '../../interfaces/Employee';
import { useMock } from '../../hooks/mock';
import { ButtonLink } from '../../Components/ButtonLink';
import { useParams } from 'react-router-dom';
import { IParamsType } from '../../interfaces/ParamTypes';

const Employees: React.FC = () => {

    const { id } = useParams<IParamsType>();
    const [employees, setEmployees] = useState<Array<IEmployee>>([]);
    const { getEmployees, getSubsidiaries } = useMock();

    useEffect(() => {
        async function loadEmployees(){
            const response = await getEmployees();
            const subsidiaries = await getSubsidiaries();
            const subIndex = subsidiaries.findIndex(sub => sub.id === id);
            let finalResponse = response;
            if(id){
                finalResponse = finalResponse.filter(emp => emp.filial === subsidiaries[subIndex].name);
            }
            setEmployees(finalResponse);
        }
        loadEmployees();
    }, [getEmployees, getSubsidiaries, id]);

    return (
        <Container>
            <Header />
            <Content>
                <ButtonLink to='/employee' >Cadastrar Funcionário</ButtonLink>
                <SearchBar name='searchSubsidiary' placeholder='Nome do Funcionário...'/>
            </Content>
            <EmployeeArea>
                <Table
                    column1='ID'
                    column2='Nome'
                    column3='Filial'
                />
                {
                    employees.map(emp =>
                        <Employee
                            key={emp.id}
                            id={emp.id}
                            name={emp.name}
                            filial={emp.filial}
                        />
                    )
                }
            </EmployeeArea>
        </Container>
    );
}

export { Employees };