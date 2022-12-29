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
                <title>Back-End Skills</title>
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
                                    Todos os frameworks ou Bibliotecas listadas ao lado já foram utilizadas por mim para desenvolver
                                    algum tipo de aplicação front-end, como exemplo este meu App portifólio que foi
                                    desenvolvido com NextJs Typescript e Sass e axios para as requisições a API do GitHub.
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
                                    Essas tecnologias para contrução de interfaces são as que eu utilizo para
                                    criar meus Apps Front-End sendo a principal delas o Styled-Components o meu preferido
                                </p>
                            </div>

                        </div>
                        <div className={style.Description}>

                            <div
                                className={style.BoxIcon}
                            >
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
                                    Bom Estes Frameworks como Nextjs e React-Native dispensam apresentações,
                                    esses são os frameworks utilizados nos meus proejtos, tendo preferencia
                                    por aplicações web ou Web Apps sendo SPA ou SSR.
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