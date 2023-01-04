import styled from "@emotion/styled";

const Texto = styled.div`
    color: #FFF;
    background-color: #B7322C;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    padding: 15px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    
`

const MensajeError = ({children}) => {
    return ( 
        <Texto>
            {children}
        </Texto>
    );
}
 
export default MensajeError;