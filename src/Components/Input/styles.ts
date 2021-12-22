import styled, { css } from 'styled-components';

interface IContainerProps {
    isErrored: boolean;
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
    background: none;
    border-radius: ${({ theme }) => theme.roundness.medium}px;
    border: 3px solid ${({ theme }) => theme.colors.shape};
    color: ${({ theme }) => theme.colors.shape_light};
    padding: 12px;
    width: 100%;
    display: flex;
    height: 70px;
    align-items: center;
    ${(props) => props.isErrored && css` color: ${({ theme }) => theme.colors.error}; border-color: ${({ theme }) => theme.colors.error};`}
    ${(props) => props.isFocused && css` color: ${({ theme }) => theme.colors.primary}; border-color: ${({ theme }) => theme.colors.primary}; `}
    ${(props) => props.isFilled && css` color: ${({ theme }) => theme.colors.primary};`}
    input{
        font-size: 20px;
        color: #F4EDE8;
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
        color: ${({ theme }) => theme.colors.shape_light};
        ${(props) => props.isFilled && css` color: ${({ theme }) => theme.colors.primary};`}
    }
    & + div {
        margin-top: 35px;
    }
`;