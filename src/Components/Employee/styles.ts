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
    display: flex;
    font-size: 25px;
    width: 80%;
    
    @media screen and (max-width: 800px) {
        font-size: 18px;
    }
    
    @media screen and (max-width: 500px) {
        width: 68%;
    }

`;

export const IdArea = styled.span`
    width: 16%;
    margin-right: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const EmployeeName = styled.span`
    width: 60%;
    margin-right: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    
    @media screen and (max-width: 500px)  {
        width: 45%;
    }

`;
export const EmployeeFilial = styled.span`
    float: right;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 240px;
    
    @media screen and (max-width: 800px) {
        max-width: 140px;
    }

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