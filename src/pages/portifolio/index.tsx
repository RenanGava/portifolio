import axios from "axios";
import { useEffect, useState } from "react";
import { ListRepos } from "../../components/ListRepos";
import { SectionTitle } from "../../components/SectionTitle";
import style from "./style.module.scss"

export default function portifolio() {

    const [repos, setRepos] = useState([])


    useEffect(() => {
        async function getRepos(){
            const res = await axios.get('https://api.github.com/users/RenanGava/repos')

            setRepos(res.data)
        }

        getRepos()

    }, [])

    console.log(repos);



    return (
        <>
            <head>
                <title>Portifolio - Repositórios</title>
            </head>

            <div className={style.Container}>
                <SectionTitle title="Portifólio" />
                <div className={style.Content}>
                    <h2>
                        Repositórios
                        <span className={style.span_extern}>
                            <span className={style.span_intern}>

                            </span>
                        </span>
                    </h2>

                    <div className={style.center}>
                        <ListRepos repos={repos} style={style} />
                    </div>
                </div>
            </div>
        </>
    )
}