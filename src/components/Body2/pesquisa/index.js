import React from "react"
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from "react"
import {useDispatch} from 'react-redux'

function Pesquisa(){

    const [link,SetLink] = useState('')
    const [Url,SetUrl] = useState('')

    const dispatch = useDispatch()

    function handleChangeInput(e){
        let valor = e.target.value
        SetLink(valor)
        console.log(valor)

    }

    function handleShortClick(e){
        e.preventDefault()
        let url = `https://api.shrtco.de/v2/shorten?url=${link}`
        if(link == ''){
            alert('digite a url no campo abaixo')
        }
        fetch(url).then((res)=>{
            return res.json()
        }).then((url)=>{
            SetUrl(url.result.short_link)
            dispatch({
                type: 'url',
                payload: Url
            })
        })
    }


    return(
        <>
           <div className="pesquisa">
                <form className="pesquisar">
                    <input onChange={handleChangeInput}  type='text' placeholder="Shorten a link here..."></input>
                    <button onClick={handleShortClick} className="btn bbb btn-info">Shoten It!</button>
                </form>
           </div>

        </>


    )
}


export default Pesquisa