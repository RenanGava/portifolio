import style from './style.module.scss'
import logo from '../../../public/logo.svg'
import Image from 'next/image'
import React,{ useState } from 'react'
import { NavDesktop } from '../NavDesktop'
import { NavMobile } from '../NavMobile'

export function Header() {

    const [selected, setSelected] = useState(true)

    return (
        <div className={style.HeaderContainer}>
            <Image
                className={style.logo}
                src={logo} 
                alt="logo"
            />

            <NavDesktop/>
            <NavMobile/>
        </div>
    )
}