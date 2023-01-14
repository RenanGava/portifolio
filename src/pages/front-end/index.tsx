import Image from 'next/image'
import { SectionTitle } from '../../components/SectionTitle'
import { StatusBar } from '../../components/StatusBar'
import style from './style.module.scss'
import IconPencil from '../../../public/pencil.svg'
import desktop from '../../../public/desktop.svg'
import home from "../../../public/home.svg"

export default function FrontEnd() {

    return (
        <>
            <head>
                <title>Front-End Skills</title>
            </head>
            <div
                className={style.Container}
            >
                <SectionTitle title='Front-end skills' />

                <div className={style.ContentContainer}>
                    <div className={style.DescriptionContainer}>
                        <h2>
                            Descriptions
                            <span className={style.span_extern}>
                                <span className={style.span_intern}>

                                </span>
                            </span>
                        </h2>

                        <div className={style.Description}>

                            <div
                                className={style.BoxIcon}
                            >
                                <Image
                                    className={style.Icon}
                                    src={IconPencil}
                                    alt=''
                                />
                            </div>
                            <div className={style.TitleAndDescription}>
                                <h4>
                                    Conhecimento
                                </h4>

                                <p>
                                    Os Frameworks e Bibliotecas que foram pautados ao lado,
                                    foram utilizados para desenvolver e executar aplicações Front-end.
                                    Como exemplar para essas aplicações, é possível expor esse próprio APP de Portifólio,
                                    que foi desenvolvido com NextJs, Typescript, Sass e Axios para as requisições a API do GitHub.
                                </p>
                            </div>

                        </div>
                        <div className={style.Description}>

                            <div className={style.BoxIcon}>
                                <Image
                                    className={style.Icon}
                                    src={desktop}
                                    alt=''
                                />
                            </div>
                            <div className={style.TitleAndDescription}>
                                <h4>
                                    Sass, Styled-Components, Chakra-UI
                                </h4>

                                <p>
                                    São utilizadas três tecnologias pautadas para a construção de interfaces para
                                    produção de Apps Front-end sendo elas,
                                    Sass, Chakra-UI e a principal delas, Styled-Components.
                                </p>
                            </div>

                        </div>
                        <div className={style.Description}>

                            <div className={style.BoxIcon}>
                                <Image
                                    className={style.Icon}
                                    src={home}
                                    alt=''
                                />
                            </div>
                            <div className={style.TitleAndDescription}>
                                <h4>
                                    Reactjs, Nextjs, React-Native
                                </h4>

                                <p>
                                    Os Frameworks aderidos aos projetos dispensam apresentações. ReactJs, NextJs,
                                    React-Native, fazem parte da gama de particularidades das linguagens manuseadas.
                                    A ênfase de predileção se apresenta por aplicações Web Apps, sendo SPA ou SSR
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className={style.StatsContainer}>
                        <h2>
                            Coding skills
                            <span className={style.span_extern}>
                                <span className={style.span_intern}>

                                </span>
                            </span>
                        </h2>

                        <div className={style.status}>
                            <StatusBar language='TypeScript' percentCurrent='70' />
                            <StatusBar language='Sass' percentCurrent='70' />
                            <StatusBar language='ReactJs' percentCurrent='50' />
                            <StatusBar language='Styled-Components' percentCurrent='50' />
                            <StatusBar language='React-native' percentCurrent='50' />
                            <StatusBar language='Nextjs' percentCurrent='40' />
                            <StatusBar language='Axios' percentCurrent='40' />
                            <StatusBar language='Chakra-ui' percentCurrent='30' />
                        </div>
                    </div>

                </div>
            </div></>
    )
}