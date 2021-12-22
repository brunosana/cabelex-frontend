import styled, { css } from "styled-components";

interface IMenu {
    showMenu: boolean;
}

export const Container = styled.div`
    width: 100vw;
    height: 100px;
`;

export const HeaderArea = styled.div`
    width: 90%;
    margin: 10px 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const UserArea = styled.div`
    font-size: 25px;
`;

export const UserInfo = styled.span`
    font-weight: lighter;
    margin-right: 35px;

    @media screen and (max-width: 700px){
        display: none;
    }

`;

export const MenuButton = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    transition: 0.1s;
    
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.shape};
    }

`;

export const Logo = styled.h2`
    font-family: ${({ theme }) => theme.fonts.cursive}, cursive;
    font-size: 70px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Line = styled.div`
    width: 100vw;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Menu = styled.div<IMenu>`

    @keyframes inMenu {
        0% { opacity: 0%  }
        100% { opacity: 100%  }
    }

    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.6);
    z-index: 1;
    animation-name: inMenu;
    animation-duration: 0.1s;

    ${(props) => !props.showMenu && css`display: none;`};

`;

export const MenuArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const MenuItem = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 35px;
    transition: 0.1s;

    @media screen and (max-width: 700px){
        font-size: 28px;
    }

    & + & {
        margin-top: 35px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.shape};
        cursor: pointer;
    }
`;