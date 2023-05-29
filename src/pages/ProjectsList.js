import styled from "styled-components"
import Top from "./components/Top"
import Bot from "./components/Bot"
import { useState } from "react"
import axios from "axios"
import { FcSearch } from "react-icons/fc"

export default function ProjectsList() {
    const url = process.env.REACT_APP_BD
    const [classes, setClasses] = useState(0)
    const [projects, setProjects] = useState(0)
    const [list, setList] = useState(0)
    const [data, setData] = useState(0)
    const [grade,setGrade] = useState(0)

    function search() {
        if (classes !== 0 && projects !== 0) {
            const requisicao = axios.get(`${url}/students/${classes}/${projects}`);
            requisicao.then(response => {
                if (!response.data[0]) {
                    setList(0);
                } else {
                    setList(response.data);
                }
            });

        }
    }
    function changeGrade(data) {
        setData({id:data.id,name:data.name,link:data.link})
    }
    console.log(grade)
    function confirmGrade(){
        const id=data.id
        console.log(data)
        console.log(grade)
        if (grade===0) return alert("Selecione a nota do aluno")
        const requisicao = axios.put(`${url}/grade/${id}`,{grade:grade});
        requisicao.then(() => {
            alert("Nota cadastrada")
            setData(0)
            setGrade(0)
        })
        requisicao.catch((err) => alert(err.message)) 
    }

    return (
        <>
            <Top />
            <Main>
                <MenuLeft>
                    <div>
                        <font color={classes === 1 ? "red" : "black"}> <p onClick={e => setClasses(1)} >Turma 8 </p></font>
                        <font color={classes === 2 ? "red" : "black"}><p onClick={e => setClasses(2)}>Turma 9 </p></font>
                        <font color={classes === 3 ? "red" : "black"}><p onClick={e => setClasses(3)}>Turma 10 </p></font>
                        <font color={classes === 4 ? "red" : "black"}><p onClick={e => setClasses(4)}>Turma 11 </p></font>
                    </div>
                    <div>
                        <font color={projects === 1 ? "red" : "black"}><p onClick={e => setProjects(1)}>DrovenEats </p></font>
                        <font color={projects === 2 ? "red" : "black"}><p onClick={e => setProjects(2)}>DrovenParrots </p></font>
                        <font color={projects === 3 ? "red" : "black"}><p onClick={e => setProjects(3)}>DrovenShortly </p></font>
                        <button onClick={search}>Buscar <FcSearch /></button>
                    </div>
                </MenuLeft>

                <List>

                    {data===0 ? <></> : <Prompt>
                        <h1>Alteração de nota</h1>
                        
                        <p>Aluno: {data.name} </p>
                        <div>
                        <p>Link: <a href={data.link}>Clique aqui</a></p>
                       
                        <select value={grade} onChange={e => setGrade(e.target.value)} id="Grades" name="Grades">
                            <option value="">Selecione a nota</option>
                            <option value="Acima das expectativas">Acima das expectativas</option>
                            <option value="Dentro das expectativas">Dentro das expectativas</option>
                            <option value="Abaixo das expectativas">Abaixo das expectativas</option>
                        </select>
                        </div>
                        <section>
                        <button onClick={a=> setData(0)}>Cancelar</button>
                        <button onClick={confirmGrade}>Confirmar</button>
                        
                        </section>
                        
                    </Prompt>}
                    
                    <h1>{list === 0 ? <>Selecione a turma e o projeto</> : <>Projeto {list[0].project} na {list[0].class}</>}</h1>
                    {list === 0 ? <h2>Não existem projetos com esses dados</h2> : list.map(a => <div>
                        <img src={a.image} alt={a.name} />
                        <p>{a.name}</p>
                        <span >{!a.grade ? <p onClick={b => changeGrade(a)}>Sem Nota</p> : a.grade}</span>
                    </div>)}


                </List>
            </Main>
            <Bot />
        </>
    )
}



const Main = styled.div`
margin-top:80px;
display:flex;
`

const MenuLeft = styled.div`
background-color:lightgray;
width:20%;
display:flex;
flex-direction:column;
align-items:center;
padding:30px;
padding-top:50px;
font-size:18px;
p{
    margin-bottom:30px;
    cursor: pointer;
    :hover{
        text-decoration:underline;
    }
}
button{
    height:30px;
    width:120px;
    font-size:16px;
}
div{
    margin-bottom:60px;
}
`
const List = styled.div`
width:80%;
display:flex;
flex-direction:column;
padding:30px;
align-items:center;
position: relative;
h1{
    font-size:30px;
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
    position: relative;
    span{
        position:absolute;
        top:26px;
        right:10px;
        font-size:16px;
    }
}
img{
    height:50px;
    width:50px;
    border-radius:30px;
    margin-right:10px;
}
`
const Prompt = styled.section`
    width:70%;
    height:200px;
    background-color:lightslategray;
    position:absolute;
    top:6%;
    left:15%;
    z-index: 2;
    border:1px solid black;
    padding:10px;
    display:flex;
    flex-direction:column;
    p{
        font-size:18px;
        margin-bottom:8px;
    }
    select{
        margin-left:20px;
        width:50%;
        height:26px;
        font-size:16px;
    }
    div{
        background-color:lightslategray;
    }
    button{
        font-size:18px;
        width:40%;
        height:30px;
        margin-right:30px;
    }
`