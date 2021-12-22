import styled from 'styled-components';

export const Container = styled.button`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    border: 0;
    border-radius: ${({ theme }) => theme.roundness.ultra}px;
    width: 100%;
    height: 65px;
    margin-top: 50px;
    font-size: 28px;
    font-weight: bold;
    transition: 0.1s;
    
    &:hover {
        background: ${({ theme }) => theme.colors.shape};
        color: ${({ theme }) => theme.colors.primary};
        transform: scale(0.99, 0.99);
        cursor: pointer;
    }

`;