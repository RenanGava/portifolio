import { ActiveLink } from "../ActiveLink";
import style from './style.module.scss'

export function NavDesktop() {
    return (

        <nav className={style.navBarDesktop}>            
            <ActiveLink
                href='/'
                activeClassname={style.selected}
                disableClassname={style.link}
            >
                <p>Home</p>
            </ActiveLink>
            <ActiveLink
                href='/front-end'
                activeClassname={style.selected}
                disableClassname={style.link}
            >
                <p>Front-End Skills</p>
            </ActiveLink>
            <ActiveLink
                href='/back-end'
                activeClassname={style.selected}
                disableClassname={style.link}
            >
                <p>Back-End Skills</p>
            </ActiveLink>

            <ActiveLink
                href='/portifolio'
                activeClassname={style.selected}
                disableClassname={style.link}
            >
                <p>Portifólio</p>
            </ActiveLink>

            <ActiveLink
                href='/contact'
                activeClassname={style.selected}
                disableClassname={style.link}
            >
                <p>Contato</p>
            </ActiveLink>
        </nav>
    )
}