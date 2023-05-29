import styled from "styled-components"
import Top from "./components/Top"
import Bot from "./components/Bot"
import { useState } from "react"
import axios from "axios"
export default function SignupStudents() {
    const url = process.env.REACT_APP_BD
    const [data, setData] = useState({name:"",cpf:"",email:"",image:"",classId:""})     
    console.log(data)
    function register(event){
        event.preventDefault();
        const requisicao = axios.post(`${url}/signUp`,data)
		requisicao.then(() => alert("Aluno cadastrado"))
        requisicao.catch((err) => alert(err.message)) 
        setData({name:"",cpf:"",email:"",image:"",classId:""})
    }
    return (
        <>
        <Top/>
        <Main>
            <h1>Cadastro de estudante</h1>
            <div>
                <form onSubmit={register}> 
                <input value={data.name} onChange={e => setData({...data,name:e.target.value})} type="text" required placeholder="Nome" />
                <input value={data.cpf} onChange={e => setData({...data,cpf:e.target.value})} type="text" required placeholder="CPF" />
                <input value={data.email} onChange={e => setData({...data,email:e.target.value})} type="email" required placeholder="Email" />
                <input value={data.image} onChange={e => setData({...data,image:e.target.value})} type="url" required placeholder="Foto" />
                <select value={data.classId} onChange={e => setData({...data,classId:parseInt(e.target.value)})} id="Turmas" name="Turmas">
		            <option value="1">Turma 8</option>
		            <option value="2">Turma 9</option>
		            <option value="3">Turma 10</option>
                    <option value="4">Turma 11</option>
                </select>
               <button type="submit">Cadastrar</button>
               </form>
            </div>
        </Main>
        <Bot/>
        </>
    )
}

const Main = styled.div`
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