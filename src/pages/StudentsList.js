import Top from "./components/Top"
import Bot from "./components/Bot"
import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function StudentsList() {
    const url = process.env.REACT_APP_BD
    const [list,setList] = useState(0)
    const navigate = useNavigate();
    function classes(value){
        const requisicao = axios.get(`${url}/students/${value}`)
		requisicao.then(function (response) {
            setList(response.data)
          })
        requisicao.catch((err) => alert(err.message))       
    }
    console.log(list)
    return (
        <>
        <Top/>
        <Main>
            <MenuLeft>
                <a onClick={e => classes(1)}>Turma 8</a>
                <a onClick={e => classes(2)}>Turma 9</a>
                <a onClick={e => classes(3)}>Turma 10</a>
                <a onClick={e => classes(4)}>Turma 11</a>
            </MenuLeft>
            <List>
                <h1>{list===0 ? <>Seleciona a turma</>: <>Estudantes da {list[0].class} </>}</h1>
                {list===0 ? <></>: list.map(a=> <div onClick={() => navigate(`/Profiles/${a.studentId}`)}>
                    <img src={a.image} alt={a.name}/>
                    <p>{a.name}</p>
                </div>)}
            </List>
        </Main>
        <Bot/>
        </>
    )
}

const Main = styled.div`
margin-top:80px;
display:flex;
`

const MenuLeft = styled.div`
background-color:lightgrey;
width:20%;
height:520px;
display:flex;
flex-direction:column;
align-items:center;
padding:30px;
padding-top:50px;
font-size:18px;
a:visited,a:link,a:active{
    text-decoration:underline;
    color:red;
}
a{
    margin-bottom:30px;
    cursor: pointer;
    :hover{
        text-decoration:underline;
    }
}
`
const List = styled.div`
width:80%;
display:flex;
flex-direction:column;
padding:30px;
align-items:center;
h1{
    font-size:40px;
    margin-bottom:20px;
}
div{
    width:100%;
    display:flex;
    background-color:lightsteelblue;
    align-items:center;
    padding:10px;
    font-size:20px;
    margin-bottom:20px;
    cursor: pointer;
}
img{
    height:50px;
    width:50px;
    border-radius:30px;
    margin-right:10px;
}
`