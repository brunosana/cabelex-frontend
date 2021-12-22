import React, { useCallback, useState } from 'react';
import { useAuth } from '../../hooks/auth';

import {
    Container,
    Line,
    Logo,
    UserArea,
    HeaderArea,
    MenuButton,
    MenuArea,
    UserInfo,
    Menu,
    MenuItem
} from './styles';

const Header: React.FC = () => {

    const [showMenu, setShowMenu] = useState(false);
    const { signOut, user } = useAuth();

    const handleOpenMenu = useCallback(() => {
        setShowMenu(true);
    }, []);

    const handleCloseMenu = useCallback(() => {
        setShowMenu(false);
    }, []);

    const handleSignOut = useCallback(async () => {
        await signOut();
    }, [signOut]);

    return(
        <>
        <Menu showMenu={showMenu} >
            <MenuArea>
                <MenuItem>Filiais</MenuItem>
                <MenuItem>Cadastrar Filial</MenuItem>
                <MenuItem>Funcionários</MenuItem>
                <MenuItem>Cadastrar Funcionário</MenuItem>
                <MenuItem onClick={handleCloseMenu} >Sair do Menu</MenuItem>
                <MenuItem onClick={handleSignOut}>Sair da Aplicação</MenuItem>
            </MenuArea>
        </Menu>
        <Container>
            <HeaderArea>
                <Logo>Cabelex</Logo>
                <UserArea>
                    <UserInfo>Bem Vindo(a), {user.name}</UserInfo>
                    <MenuButton onClick={handleOpenMenu} >Menu</MenuButton>
                </UserArea>
            </HeaderArea>
            <Line />
        </Container>
        </>
    );
}

export { Header }