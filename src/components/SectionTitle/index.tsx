import style from './style.module.scss'

interface SectionTitleProps{
    title: string
}

export function SectionTitle({ title }:SectionTitleProps){

    return(
        <div className={style.Container}>
            <h1>
                {title}
            </h1>
        </div>
    )
}