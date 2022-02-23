import styled from "styled-components";

const Container = styled.div`
    width: 300px;
    height: 420px;
    background-color: #FFFFFF;
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap;
    padding: 0 30px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const Header = styled.div`
    flex-direction: row;
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    margin-bottom: 16px;
`;

const Image = styled.div`
    width: 300px;
    height: 180px;
`;

const Title = styled.div`
    
`;

const Description = styled.div`
    
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Container, Title, Description, Header, Image };