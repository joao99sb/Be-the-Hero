import React,{useState} from 'react'
import "./styles.css"
import logo from "../../assets/logo.svg"
import {Link,useHistory} from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
import api from '../../services/api'

export default function NewIncident(){
    const[title, setTitle]=useState('')
    const[description, setDescription]=useState('')
    const[value, setValue]=useState('')
    const ongId = localStorage.getItem('ongId')
    const history = useHistory()

    function handleNewIncident(e){
        e.preventDefault()
        const data ={
            title,
            description,
            value
        }
        try{
            api.post('/incidents',data,{
                headers:{
                    Authorization:ongId
                }
            })
            history.push('/profile')
        }catch(err){
            alert(err)
        }
    }
    return(
        <div className="incidents-container">
        <div className="content">
            <section>
                <img src={logo} alt="Be The Hero"/>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
                <Link to="/profile" className='link'>
                    <FiArrowLeft size={20} color="#e02041"/>
                    voltar para a home
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Titulo do caso"/>
                
                <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Descrição"></textarea>

                <input type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Valor em reais (favor usar ponto e nao vírgula)"/>

                <button className="button" type="submit">cadastrar</button>
            </form>
        </div>
    </div>
    )
}