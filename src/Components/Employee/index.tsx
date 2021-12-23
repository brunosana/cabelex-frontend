import React, { useCallback } from 'react';
import { BiTrash, BiPencil, BiUser } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import { useMock } from '../../hooks/mock';

import IEmployee from '../../interfaces/Employee';
import { OptionsButton } from '../OptionsButton';

import {
    Container,
    EmployeeFilial,
    IdArea,
    OptionsArea,
    EmployeeName,
    InfoArea,
    Content,
    OptionsButtonA
} from './styles';


const Employee: React.FC<IEmployee> = ({ id, name, filial }) => {

    const history = useHistory();
    const { deleteEmployee } = useMock();

    const handleDeleteEmployee = useCallback(async () => {
        try{
            await deleteEmployee(id);
            history.push('/employees');
        }catch(error: any){
            alert(error.message);
        }
    }, [deleteEmployee, history, id]);

    return (
        <Container>
            <Content>
                <InfoArea>
                    <IdArea>{id.slice(0, 8)}</IdArea>
                    <EmployeeName>{name}</EmployeeName>
                    <EmployeeFilial>{filial}</EmployeeFilial>
                </InfoArea>
                <OptionsArea>
                        <OptionsButton to={`/editEmployee/${id}`} icon={BiPencil} />
                        <OptionsButtonA
                            onClick={handleDeleteEmployee}
                        >
                            <BiTrash />
                        </OptionsButtonA>
                    </OptionsArea>
            </Content>
        </Container>
    );
}

export { Employee }