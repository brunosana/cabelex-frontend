import styled from "styled-components";
import { Subsidiary } from "../../Components/Subsidiary";

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

export const EmployeeArea = styled.div`
    width: 100vw;
    margin-top: 80px;
`;

export const TableHeader = styled.div`
    width: 100vw;
    height: 80px;
    align-items: center;
    background-color: transparent;
`;

export const TableContent = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const TableInfo = styled.div`
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

export const TableId = styled.span`
    width: 16%;
    margin-right: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const TableEmployee = styled.span`
    width: 60%;
    margin-right: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    
    @media screen and (max-width: 500px)  {
        width: 45%;
    }

`;