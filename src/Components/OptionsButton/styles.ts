import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    transition: 0.1s;
    color: ${({ theme }) => theme.colors.shape};
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