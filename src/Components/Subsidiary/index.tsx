import React, { useCallback } from 'react';
import { BiTrash, BiPencil, BiUser } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';

import { OptionsButton } from '../OptionsButton';
import ISubsidiary from '../../interfaces/Subsidiary';

import {
    Container,
    EmployeeNumber,
    IdArea,
    OptionsArea,
    SubsidiaryName,
    InfoArea,
    Content,
    OptionsButtonA
} from './styles';
import { useMock } from '../../hooks/mock';

const Subsidiary: React.FC<ISubsidiary> = ({ id, name, employeeNumber }) => {

    const { deleteSubsidiary } = useMock();
    const history = useHistory();

    const handleDeleteSubsidiary = useCallback(async () => {
        try{
            await deleteSubsidiary(id);
            history.push('/');
        }catch(error: any){
            alert(error.message);
        }
    }, [deleteSubsidiary, history, id]);

    return (
        <Container>
            <Content>
                <InfoArea>
                    <IdArea>{id.slice(0, 8)}</IdArea>
                    <SubsidiaryName>{name}</SubsidiaryName>
                    <EmployeeNumber>{employeeNumber}</EmployeeNumber>
                </InfoArea>
                    <OptionsArea>
                        <OptionsButton to={`/employees/${id}`} icon={BiUser} />
                        <OptionsButton to={`/editSubsidiary/${id}`} icon={BiPencil} />
                        <OptionsButtonA
                            onClick={handleDeleteSubsidiary}
                        >
                            <BiTrash />
                        </OptionsButtonA>
                    </OptionsArea>
            </Content>
        </Container>
    );
}

export { Subsidiary }