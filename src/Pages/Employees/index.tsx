import React, { useEffect, useState } from 'react';

import { Header } from '../../Components/Header';
import { Button } from '../../Components/Button';
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

const Employees: React.FC = () => {

    const [employees, setEmployees] = useState<Array<IEmployee>>([]);
    const { getEmployees } = useMock();

    useEffect(() => {
        async function loadEmployees(){
            const response = await getEmployees();
            setEmployees(response);
        }
        loadEmployees();
    }, [getEmployees]);

    return (
        <Container>
            <Header />
            <Content>
                <Button>Cadastrar Funcionário</Button>
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
                            id={emp.id.slice(0, 8)}
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