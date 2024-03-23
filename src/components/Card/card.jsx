import { useEffect, useState } from 'react'
import style from './card.module.css'


function Card(props) {
    const{name, price, description, status} = props.phone

    return (
        <div className={style.wrapper} style={{width: '18rem'}}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{price}$</h6>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{status}</p>
                </div>
            </div>
        </div>
    )
}

export default Card