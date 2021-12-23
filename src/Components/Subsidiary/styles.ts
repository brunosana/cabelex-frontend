import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 80px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.shape_overlight};

    & + & {
        margin-top: 10px;
    }

    &:hover {
        opacity: 90%;
    }
`;

export const Content = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const InfoArea = styled.div`
    width: 80%;
    font-size: 25px;
    width: 80%; 
    
     @media screen and (max-width: 800px) {
        font-size: 18px;
    }
    
    @media screen and (max-width: 500px) {
        width: 68%;
    } 

    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 10px;
`;

export const IdArea = styled.span``;
export const SubsidiaryName = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 500px)  {
        width: 45%;
    } 

`;
export const EmployeeNumber = styled.span`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
export const OptionsArea = styled.div``;

export const OptionsButton = styled.a`
    transition: 0.1s;
    svg {
        transition: 0.1s;   
        font-size: 30px;
    }

    & + & {
        margin-left: 20px;
    }
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
        svg{
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    @media screen and (max-width: 800px) {
        svg {
            font-size: 22px;
        }

        & + & {
            margin-left: 10px;
        }
    }

    @media screen and (max-width: 500px) {
        & + & {
            margin-left: 5px;
        }
    }

    @media screen and (max-width: 300px) {
        svg {
            font-size: 17px;
        }

        & + & {
            margin-left: 4px;
        }
    }

`;