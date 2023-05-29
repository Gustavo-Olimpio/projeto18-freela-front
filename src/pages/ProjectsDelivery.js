import Top from "./components/Top"
import Bot from "./components/Bot"
import styled from "styled-components"
import axios from "axios"
import { useState } from "react"

export default function ProjectsDelivery() {
    const url = process.env.REACT_APP_BD
    const [data, setData] = useState({classId:"",studentId:"",projectId:"",link:""})     
    const [list,setList] = useState(0)
    function searchStudents(value){
        const requisicao = axios.get(`${url}/students/${value}`)
		requisicao.then(function (response) {
            setList(response.data)
          })
        requisicao.catch((err) => alert(err.message)) 
        setData({...data,classId:parseInt(value),studentId:""})
        
        
    }
    function register(event){
        event.preventDefault();
        const requisicao = axios.post(`${url}/delivery`,data)
		requisicao.then(() => alert("Projeto entregue"))
        requisicao.catch((err) => alert(err.message))
        setData({classId:"",studentId:"",projectId:"",link:""}) 
        setList(0)
    }
    console.log(data)
    return (
        <>
        <Top/>
        <Main>
        <h1>Entrega de Projeto</h1>
            <div>
            <form onSubmit={register}> 
            <select required value={data.classId} onChange={e => searchStudents(e.target.value)} id="Turmas" name="Turmas">
            {!data.classId ? <option value="">Selecione a turma</option> : <></> } 
                    <option value="1">Turma 8</option>
		            <option value="2">Turma 9</option>
		            <option value="3">Turma 10</option>
                    <option value="4">Turma 11</option>
                </select>
            <select required value={data.studentId} onChange={e => setData({...data,studentId:parseInt(e.target.value)})} id="Nomes" name="Nomes">
            {!data.studentId ? <option value="">Selecione o aluno</option> : <></> } 
		            {list===0 ?<></> :list.map(a => <option value={a.studentId}>{a.name}</option>)}
                </select>
                <select required value={data.projectId} onChange={e => setData({...data,projectId:parseInt(e.target.value)})} id="Projetos" name="Projetos">
                   {!data.projectId ? <option value="">Selecione o projeto</option> : <></> } 
                    <option value="1">DrovenEats</option>
		            <option value="2">DrovenParrots</option>
		            <option value="3">DrovenShortly</option>
                   
                </select>
                <input value={data.link} onChange={e => setData({...data,link:e.target.value})} type="url" required placeholder="Link do projeto" />
               <button type="submit" >Entregar</button>
               </form>
            </div>
        </Main>
        <Bot/>
        </>
    )
}

const Main = styled.div`
height:500px;
margin-top:100px;
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:40px;
h1{
    font-size:40px;
    margin-bottom:30px;
}
div{
    width:80%;
    padding:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    form{
        display:flex;
        flex-direction:column;
        width:100%;
        align-items:center;
    }
    input{
        margin-bottom:20px;
        height:40px;
        font-size:18px;
        width:100%;
    }
    select{
        margin-bottom:20px;
        height:40px;
        font-size:18px;
        width:100%;
    }
    button{
        height:60px;
        width:60%;
        font-size:26px;
    }
}
`