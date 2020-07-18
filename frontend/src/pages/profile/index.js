import React,{useEffect, useState} from  'react'
import './styles.css'
import logo from "../../assets/logo.svg"
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2} from "react-icons/fi"
import api from "../../services/api"


export default function Profile(){
    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')
    const [incidents, setIncidents] = useState([])
    const history = useHistory()

    useEffect(()=>{
        api.get('profiles',{
            headers:{
                Authorization: ongId
            }
        }).then(res => setIncidents(res.data))
    },[ongId])

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization:ongId
                }
            })
            setIncidents(incidents.filter(p => p.id !== id))
        }catch(err){
            alert(err)
        }
    }

    function handleLogOut(){
        localStorage.clear()
        history.push('/')
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be The Hero"/>
                <span>Bem vindo, <strong>{ongName}</strong> </span>
                <Link to="/incidents/new" className='button'>
                    Cadastre um novo caso
                </Link>
                <button type='button' onClick={handleLogOut}>
                    <FiPower size={18} color="e02041  "/>
                </button>

            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(i =>(                
                    <li key={i.id}>
                        <strong>CASO:</strong>
                        <p>{i.title}</p>

                        <strong>DESCRIÇÃO</strong>
                        <p>{i.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(i.value)}</p>

                        <button type="button" onClick={()=>handleDeleteIncident(i.id )}> 
                            <FiTrash2  size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}                 
            </ul>
        </div>
    )
}