import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min";
import imagem from '../../images/ilustador.jpg'

function Body(){
    return(
        <div className='body '>
            <img src={imagem}></img>
            <div className='informations '>
                <h1>More than just <br></br>shorter links d</h1>
                <p>Build your brand's recognition and get detailed <br/>
                    insights on how your links are performing dffdf</p>
                 <button className='started'>Get Started</button> 
            </div>
        </div>
    )
}

export default Body