import React, { useCallback, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Header } from '../../Components/Header';
import { ButtonLink } from '../../Components/ButtonLink';
import { SearchBar } from '../../Components/SearchBar';
import { Subsidiary } from '../../Components/Subsidiary';

import {
    Container,
    Content,
    SubsidiaryArea,
    
} from './styles';
import { useMock } from '../../hooks/mock';
import {Table} from '../../Components/Table'
import ISubsidiary from '../../interfaces/Subsidiary';

const Home: React.FC = () => {

    const [subsidiaries, setSubsidiaries] = useState<Array<ISubsidiary>>([]);
    const { getSubsidiaries } = useMock();

    const handleReload = useCallback(async () => {
        const response = await getSubsidiaries();
        setSubsidiaries(response);
    },[getSubsidiaries]);

    useEffect(() => {
        async function loadSubsidiaries(){
            const response = await getSubsidiaries();
            setSubsidiaries(response);
        }
        loadSubsidiaries();
    }, [getSubsidiaries, subsidiaries]);

    return (
        <Container>
            <Header />
            <Content>
                <ButtonLink to='/subsidiary' >Nova Filial</ButtonLink>
                <SearchBar name='searchSubsidiary' placeholder='Nome da Filial...'/>
            </Content>
            <SubsidiaryArea>
                <Table
                    column1='ID'
                    column2='Nome da Filial'
                    column3='Funcionários'
                 />
                {
                    subsidiaries &&
                    subsidiaries.map(sub =>
                        <Subsidiary
                            key={sub.id}
                            id={sub.id}
                            name={sub.name}
                            employeeNumber={sub.employeeNumber}
                        />
                        )
                }
            </SubsidiaryArea>
        </Container>
    );
}

export { Home };