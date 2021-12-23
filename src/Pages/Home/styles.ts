import styled from "styled-components";

export const Container = styled.div`
`;

export const Content = styled.div`
    width: 90%;
    margin: 0 5%;
    button {
        margin-bottom: 54px;
        margin-top: 56px;
        width: 40%;
        margin-left: 30%;
        margin-right: 30%;
    }

    @media screen and (max-width: 970px) {
        button {
            width: 60%;
            margin-left: 20%;
            margin-right: 20%;
        }
    }
`;

export const SubsidiaryArea = styled.div`
    width: 100vw;
    margin-top: 80px;
`;

