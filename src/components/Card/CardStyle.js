import styled from "styled-components";

const Container = styled.div`
    width: 304px;
    height: 420px;
    background-color: #FFFFFF;
    border-radius: 12px;
`;

const Date = styled.div`
    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    padding: 30px;
`;

const Title = styled.div`
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 6px;
`;

const Description = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 12px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Container, Date, Title, Description};