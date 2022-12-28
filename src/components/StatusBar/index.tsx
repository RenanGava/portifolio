import style from "./style.module.scss"


interface StatusBarProps {
    percentCurrent: "10" | "20" | "30" | "40"
    | "50" | "60" | "70" | "80" | "90" | "100",
    language: string
}

export function StatusBar({ percentCurrent,language }: StatusBarProps) {

    return (

        <div className={style.Statusbar}>
            <span className={style.Language}>{language}</span>
            <span className={style.ValuePercent}>{percentCurrent}%</span>
            <div style={{ width: `${percentCurrent}%` }} />
        </div>
    )
}