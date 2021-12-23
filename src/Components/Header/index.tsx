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
    MenuItem,
    MenuItemA
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
                <MenuItem to='/home' >Filiais</MenuItem>
                <MenuItem to='/subsidiary'>Cadastrar Filial</MenuItem>
                <MenuItem to='/employees'>Funcionários</MenuItem>
                <MenuItem to='/employee'>Cadastrar Funcionário</MenuItem>
                <MenuItemA onClick={handleCloseMenu} >Sair do Menu</MenuItemA>
                <MenuItemA onClick={handleSignOut}>Sair da Aplicação</MenuItemA>
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