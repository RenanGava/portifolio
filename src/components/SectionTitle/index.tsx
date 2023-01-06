import { ReactNode } from 'react'
import style from './style.module.scss'

interface SectionTitleProps {
    title: string
    children?: ReactNode
    styleComponent?: any
}

export function SectionTitle({ title, children, styleComponent }: SectionTitleProps) {

    return (
        <div className={style.Container}>
            <h1>
                {title}
            </h1>

            {
                children && (
                    <div className={styleComponent.RedeSociais}>
                        {children}
                    </div>
                )
            }
        </div>
    )
}