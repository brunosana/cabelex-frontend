import React from 'react';
import { BiTrash, BiPencil, BiUser } from 'react-icons/bi';

import ISubsidiary from '../../interfaces/Subsidiary';

import {
    Container,
    EmployeeNumber,
    IdArea,
    OptionsArea,
    OptionsButton,
    SubsidiaryName,
    InfoArea,
    Content
} from './styles';

const Subsidiary: React.FC<ISubsidiary> = ({ id, name, employeeNumber }) => {
    return (
        <Container>
            <Content>
                <InfoArea>
                    <IdArea>{id}</IdArea>
                    <SubsidiaryName>{name}</SubsidiaryName>
                    <EmployeeNumber>{employeeNumber}</EmployeeNumber>
                </InfoArea>
                    <OptionsArea>
                        <OptionsButton>
                            <BiUser/>
                        </OptionsButton>
                        <OptionsButton>
                            <BiPencil/>
                        </OptionsButton>
                        <OptionsButton>
                            <BiTrash/>
                        </OptionsButton>
                    </OptionsArea>
            </Content>
        </Container>
    );
}

export { Subsidiary }