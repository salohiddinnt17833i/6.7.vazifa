import { useState } from 'react'
import logo from '../../assets/logo.png'
import menu from '../../assets/nav-menu.png'

import style from './index.module.css'


function Header() {
    const [input, setInput] = useState('')
    function handleClick() {
        alert(input)
    }
    return (
        <div className={style.header}>
            <nav className={style.nav}>
                <a className={style.a} href="#">
                    <img className={style.img} src={logo} alt="Logo img" />
                    <span>Kreed</span>
                </a>
                <a href="#">
                    <img className={style.img} src={menu} alt="" />
                </a>
            </nav>
            <main className={style.main}>
                <h1 className={style.h1}>Search Our Customer Database</h1>
                <div className={style.inputDiv}>
                    <input value={input} onChange={(e) => { setInput(e.target.value) }} className={style.input} type="text" placeholder='Find your customer here...' />
                </div>
                <p className={style.p}>Get your customers onboarded with our technolgy</p>
                <button onClick={handleClick} className={style.button}>Lets's Go</button>
            </main>
        </div>

    )
}

export default Header