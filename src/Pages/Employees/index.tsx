import React from 'react';

import { Header } from '../../Components/Header';
import { Button } from '../../Components/Button';
import { SearchBar } from '../../Components/SearchBar';
import { Employee } from '../../Components/Employee';

import {
    Container,
    Content,
    EmployeeArea,
    TableHeader,
    TableId,
    TableEmployee,
    TableContent,
    TableInfo
} from './styles';

const Employees: React.FC = () => {
    return (
        <Container>
            <Header />
            <Content>
                <Button>Cadastrar Funcionário</Button>
                <SearchBar name='searchSubsidiary' placeholder='Nome do Funcionário...'/>
            </Content>
            <EmployeeArea>
                <TableHeader>
                    <TableContent>
                        <TableInfo>
                            <TableId>ID</TableId>
                            <TableEmployee>Funcionário</TableEmployee>
                            <span>Filial</span>
                        </TableInfo>
                    </TableContent>
                </TableHeader>
                <Employee id={'126516854654653'} name={'123456789'} filial={'123456786'} />
                <Employee id={'126516854654653'} name={'123456789'} filial={'123456789'} />
                <Employee id={'126516854654653'} name={'123456789'} filial={'123456789'} />
                <Employee id={'126516854654653'} name={'123456789'} filial={'123456789'} />
            </EmployeeArea>
        </Container>
    );
}

export { Employees };