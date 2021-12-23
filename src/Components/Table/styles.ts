import styled from "styled-components";

export const TableHeader = styled.div`
    width: 100vw;
    height: 80px;
    align-items: center;
    background-color: transparent;
`;

export const TableContent = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 8%;
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
export const TableSubsidiaryName = styled.span`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  
    
    @media screen and (max-width: 500px)  {
        width: 45%;
    }

`;