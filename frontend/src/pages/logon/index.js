import React, {useState} from 'react'
import './styles.css'
import heroImg from "../../assets/hero.png"
import logo from "../../assets/logo.svg"
import { FiLogIn } from "react-icons/fi"
import {Link, useHistory} from "react-router-dom"
import api from "../../services/api"


export default function Logon(){
    const [id, setId] = useState('')
    const history = useHistory()
    async function handleLogin(e){
        e.preventDefault()

        try{
            const response = await api.post('session',{ id })
            
            localStorage.setItem('ongId',id)
            localStorage.setItem('ongName',response.data.name)
            history.push('/profile')
        }catch(err){
            alert(err)
        }
    }

    return(
        <div className="logon-container">
        <section className="form">
            <img src={logo} alt="logo"/>

            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>
                
                <input type="text" placeholder="insira sua ID" value={id} onChange={e => setId(e.target.value)}/>

                <button type="submit" className="button">Entrar</button>

                <Link to="/register" className='link'>
                    <FiLogIn size={20} color="#e02041"/>
                    Não tenho cadastro
                    
                </Link>


            </form>
        </section>
        <img src={ heroImg } alt="heroes"/>
    </div>
    )
}