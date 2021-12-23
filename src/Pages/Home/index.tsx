import React from 'react';

import { Link } from 'react-router-dom';

import { Header } from '../../Components/Header';
import { ButtonLink } from '../../Components/ButtonLink';
import { SearchBar } from '../../Components/SearchBar';
import { Subsidiary } from '../../Components/Subsidiary';

import {
    Container,
    Content,
    SubsidiaryArea,
    TableHeader,
    TableId,
    TableSubsidiaryName,
    TableContent,
    TableInfo
} from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <Content>
                <ButtonLink to='/filial' >Nova Filial</ButtonLink>
                <SearchBar name='searchSubsidiary' placeholder='Nome da Filial...'/>
            </Content>
            <SubsidiaryArea>
                <TableHeader>
                    <TableContent>
                        <TableInfo>
                            <TableId>ID</TableId>
                            <TableSubsidiaryName>Nome da Filial</TableSubsidiaryName>
                            <span>Funcionários</span>
                        </TableInfo>
                    </TableContent>
                </TableHeader>
                <Subsidiary id={'126516854654653'} name={'12313546845198164681986148746841968168189649874984/981196484984984968498'} employeeNumber={8} />
                <Subsidiary id={'126516854654653'} name={'12313546845198164681986148746841968168189649874984/981196484984984968498'} employeeNumber={8} />
                <Subsidiary id={'126516854654653'} name={'12313546845198164681986148746841968168189649874984/981196484984984968498'} employeeNumber={8} />
                <Subsidiary id={'126516854654653'} name={'12313546845198164681986148746841968168189649874984/981196484984984968498'} employeeNumber={8} />
                <Subsidiary id={'126516854654653'} name={'12313546845198164681986148746841968168189649874984/981196484984984968498'} employeeNumber={8} />
            </SubsidiaryArea>
        </Container>
    );
}

export { Home };