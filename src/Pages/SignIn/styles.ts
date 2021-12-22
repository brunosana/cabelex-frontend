import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;
export const Content = styled.div`
    width: 25%;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        button {
            max-width: 50%;
            margin-left: 25%;
            margin-right: 25%;
        }
    }
`;

export const Title = styled.h2`
    font-family: ${({ theme }) => theme.fonts.cursive}, cursive;
    font-size: 120px;
    color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    text-align: center;
    margin-bottom: 50px;
`;