import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import { useState } from "react";
import MenuIcon from '../../../public/menuIcon.svg'
import { ActiveLink } from "../ActiveLink";
import style from './style.module.scss'

export function NavMobile() {

    const [open, setOpen] = useState(false)

    function handleOpen() {
        setOpen(!open)
    }

    return (
        <div className={style.container}>
            <div
                className={style.IconMenu}
            >
                <FontAwesomeIcon 
                    color="#007CED" 
                    icon={faBars}
                    size={"2xl"}
                    cursor="pointer"
                    onClick={() => { handleOpen() }}
                />
            </div>
            <div className={open ? style.navBar : style.showNavBar}>

                <div className={style.Menu}>

                    <div className={style.DivMenu}>
                        <ActiveLink
                            href='/'
                            activeClassname={style.selected}
                            disableClassname={style.link}
                            onClick={() => { handleOpen() }}
                        >
                            <p>Home</p>
                        </ActiveLink>
                    </div>

                    <div className={style.DivMenu}>
                        <ActiveLink
                            href='/front-end'
                            activeClassname={style.selected}
                            disableClassname={style.link}
                            onClick={() => { handleOpen() }}
                        >
                            <p>Front-End Skills</p>
                        </ActiveLink>
                    </div>

                    <div className={style.DivMenu}>
                        <ActiveLink
                            href='/back-end'
                            activeClassname={style.selected}
                            disableClassname={style.link}
                            onClick={() => { handleOpen() }}
                        >
                            <p>Back-End Skills</p>
                        </ActiveLink>
                    </div>

                    <div className={style.DivMenu}>

                        <ActiveLink
                            href='/portifolio'
                            activeClassname={style.selected}
                            disableClassname={style.link}
                            onClick={() => { handleOpen() }}
                        >
                            <p>Portifólio</p>
                        </ActiveLink>
                    </div>

                    <div className={style.DivMenu}>
                        <ActiveLink
                            href='/contact'
                            activeClassname={style.selected}
                            disableClassname={style.link}
                            onClick={() => { handleOpen() }}
                        >
                            <p>Contato</p>
                        </ActiveLink>

                    </div>

                </div>
            </div>
        </div>
    )
}