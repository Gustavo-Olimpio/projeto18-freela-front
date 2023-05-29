import styled from "styled-components"
import {useNavigate } from "react-router-dom"
export default function Top() {
    const navigate = useNavigate();
    return (
        <><Menu>
        <Logo>Droven</Logo>
        <Itens>
        <p onClick={() => navigate("/")} >Cadastro</p>
        <p onClick={() => navigate("/Students")}>Estudantes</p> 
        <p onClick={() => navigate("/Delivery")}>Entrega</p> 
        <p onClick={() => navigate("/Projects")}>Projetos</p>
        </Itens>    
        </Menu></>
    )
}
const Logo =styled.div`
font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size:28px;
:hover{
        transform:scale(1.1)
    }
`
const Menu = styled.div`
background-color:black;
height:80px;
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
padding:10px;
padding-right:30px;
color:white;
position:fixed;
top:0px;
left:0px;
z-index:10;
div{
    cursor: pointer;
}
`

const Itens = styled.div`
display:flex;
p{
    margin-left:18px;
    cursor: pointer;
    font-size:18px;
    
}
`