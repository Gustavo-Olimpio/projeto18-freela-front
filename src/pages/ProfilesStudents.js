import Top from "./components/Top"
import Bot from "./components/Bot"
import styled from "styled-components"
import { useEffect,useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import dayjs from "dayjs"


export default function ProfilesStudents() {
    const url = process.env.REACT_APP_BD
    const [list,setList] = useState(0)
    const params = useParams()
    useEffect(() => {
		const requisicao = axios.get(`${url}/studentsById/${params.id}`);

		requisicao.then(response => {
			setList(response.data);
		});
	}, []);

    
    console.log(dayjs(list.inputData).format('DD-MM-YYYY'))
    return (
        <>
        <Top/>
        <Main>
            <div>
                <h1>Registro de estudante</h1>
                <img src={list.image} alt={list.name}/>
                <p>Nome Completo: {list.name}</p>
                <p>CPF:{list.cpf}</p>
                <p>Email: {list.email}</p>
                <p>Turma:</p>
                
                <span>
                    <p>{list.class}</p>
                    <p>Data de ingresso: {dayjs(list.inputData).format('DD-MM-YYYY')}</p>
                    <p>Data de saida: {!list.outputData? <>Sem Data</>: list.outputData}</p>
                </span>
            </div>
        </Main>
        <Bot/>
        </>
    )
}

const Main = styled.div`
margin-top:80px;
display:flex;
justify-content:center;
div{
    background-color:lightgray;
    height:520px;
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    padding-top:40px;
    padding-bottom:40px;
    border: 1px solid gray;
    img{
        width:80px;
        height:80px;
        border-radius:40px;
    }
   span{
    padding:10px;
    border: 1px solid black;
    background-color:lightsteelblue;
    
   }
   h1{
    font-size:30px;
   }
}
`

