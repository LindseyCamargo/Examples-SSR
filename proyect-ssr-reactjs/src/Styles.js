import styled from "@emotion/styled";


export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
    background: url('data:image/jpeg;base64,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');
    color: ${props => props.theme.colors.white};
    width: 80%;
    text-align: center;
    margin: 40px auto;
`;

export const Content = styled.form`
    width: 50%;
    margin: 0 auto;
    border: 5px solid ${props => props.theme.colors.blue};
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
`

export const Camp = styled.div`
    display: grid;
    grid-template-columns: 100%;
    margin: 10px 0px;

    @media screen and (min-width: 768px) {
        
        grid-template-columns: 50% 50%;

    } 
`

export const Button = styled.button`
    width: 80%;
    margin: 5px auto;
    background-color: ${props => props.theme.colors.blue};
    border-radius: 10px;
    border: none;
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    padding: 5px;

    @media screen and (min-width: 768px) {
        
        width: 20%;

    } 
`;

