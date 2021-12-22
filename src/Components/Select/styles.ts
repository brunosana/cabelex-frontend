import styled from 'styled-components';

import { Tooltip } from '../Tooltip';

export const Container = styled.div`
    background: none;
    border-radius: ${({ theme }) => theme.roundness.high}px;
    border: 3px solid ${({ theme }) => theme.colors.shape};
    color: ${({ theme }) => theme.colors.shape_light};
    padding: 12px;
    width: 100%;
    display: flex;
    height: 70px;
    align-items: center;
    select{
        border: none;
        box-shadow: none;
        background-color: transparent;
        background-image: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        option {
            background: ${({ theme }) => theme.colors.background};
        }

        background: ${({ theme }) => theme.colors.background};
        font-size: 20px;
        color: ${({ theme }) => theme.colors.shape};
        flex: 1;
        border: 0;
        background: transparent;
        font-weight: lighter;
        &::placeholder{
            color: ${({ theme }) => theme.colors.shape_light};
        }
    }
    svg{
        margin-right: 16px;
        color: ${({ theme }) => theme.colors.shape};
    }
    & + div {
        margin-top: 35px;
    }
`;

export const Error = styled(Tooltip)`
    height: 25px;
    margin-left: 16px;
    svg {
        margin: 0;
    }
    span {
        background-color: ${({theme}) => theme.colors.error};
        color: ${({theme}) => theme.colors.shape};
        &:before {
            border-color: ${({theme}) => theme.colors.error} transparent;
        }
    }
`;