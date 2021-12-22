import React from 'react';
import { BiTrash, BiPencil, BiUser } from 'react-icons/bi';

import IEmployee from '../../interfaces/Employee';

import {
    Container,
    EmployeeFilial,
    IdArea,
    OptionsArea,
    OptionsButton,
    EmployeeName,
    InfoArea,
    Content
} from './styles';

const Employee: React.FC<IEmployee> = ({ id, name, filial }) => {
    return (
        <Container>
            <Content>
                <InfoArea>
                    <IdArea>{id}</IdArea>
                    <EmployeeName>{name}</EmployeeName>
                    <EmployeeFilial>{filial}</EmployeeFilial>
                </InfoArea>
                    <OptionsArea>
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

export { Employee }