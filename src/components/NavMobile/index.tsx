import { useState } from "react";
import { IoMdMenu } from "react-icons/Io";
import { ActiveLink } from "../ActiveLink";
import style from './style.module.scss'

export function NavMobile() {

    const [open, setOpen] = useState(false)

    function handleOpen(){
        setOpen(!open)
    }

    return (
        <div className={style.container}>
            <div
                className={style.IconMenu}
            >
                <IoMdMenu
                    cursor="pointer"
                    color="#007CED"
                    size={40}
                    onClick={() =>{handleOpen()}}
                />
            </div>
            <div className={ open? style.navBar : style.showNavBar}>

                <div className={style.Menu}>
                    <ActiveLink
                        href='/'
                        activeClassname={style.selected}
                        disableClassname={style.link}
                        onClick={() =>{handleOpen()}}
                    >
                        <p>Home</p>
                    </ActiveLink>
                    <ActiveLink
                        href='/front-end'
                        activeClassname={style.selected}
                        disableClassname={style.link}
                        onClick={() =>{handleOpen()}}
                    >
                        <p>Front-End <br /> Skills</p>
                    </ActiveLink>
                    <ActiveLink
                        href='/back-end'
                        activeClassname={style.selected}
                        disableClassname={style.link}
                        onClick={() =>{handleOpen()}}
                    >
                        <p>Back-End Skills</p>
                    </ActiveLink>

                    <ActiveLink
                        href='/portifolio'
                        activeClassname={style.selected}
                        disableClassname={style.link}
                        onClick={() =>{handleOpen()}}
                    >
                        <p>Portifólio</p>
                    </ActiveLink>

                    <ActiveLink
                        href='/contact'
                        activeClassname={style.selected}
                        disableClassname={style.link}
                        onClick={() =>{handleOpen()}}
                    >
                        <p>Contato</p>
                    </ActiveLink>
                </div>
            </div>
        </div>
    )
}