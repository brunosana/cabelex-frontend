import React, { useCallback, useState } from 'react';

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

    const handleOpenMenu = useCallback(() => {
        setShowMenu(true);
    }, []);

    const handleCloseMenu = useCallback(() => {
        setShowMenu(false);
    }, []);

    return(
        <>
        <Menu showMenu={showMenu} >
            <MenuArea>
                <MenuItem>Menu 1</MenuItem>
                <MenuItem>Menu 2</MenuItem>
                <MenuItem>Menu 3</MenuItem>
                <MenuItem onClick={handleCloseMenu} >Sair do Menu</MenuItem>
                <MenuItem>Sair da Aplicação</MenuItem>
            </MenuArea>
        </Menu>
        <Container>
            <HeaderArea>
                <Logo>Cabelex</Logo>
                <UserArea>
                    <UserInfo>Bem Vindo(a), {`<usuário>`}</UserInfo>
                    <MenuButton onClick={handleOpenMenu} >Menu</MenuButton>
                </UserArea>
            </HeaderArea>
            <Line />
        </Container>
        </>
    );
}

export { Header }