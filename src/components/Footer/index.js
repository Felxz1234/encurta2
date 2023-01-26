import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer(){
    return(
        <div className='footer'>
            <div className='boost'>
                    <h2 className='ft'>
                        Boost your links today
                    </h2>
                    <button className='btn bbbb btn-info'>Get started</button>
            </div>
            
            <div className='informacoes'>
                <h2 className='s'>Shortly</h2>          
            </div>
        </div>
    )
}

export default Footer