import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    height: calc(90vh - 200px);
    margin: 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const Content = styled.div`
    width: 40%;
    form{
        margin: 0 auto;
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

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    margin: 54px 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: 40px;
`;
