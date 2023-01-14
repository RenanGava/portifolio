import Image from 'next/image'
import { SectionTitle } from '../../components/SectionTitle'
import { StatusBar } from '../../components/StatusBar'
import style from './style.module.scss'
import IconPencil from '../../../public/pencil.svg'
import desktop from '../../../public/desktop.svg'
import home from "../../../public/home.svg"

export default function BackEnd() {


    return (
        <>
            <head>
                <title>Back-End Skills</title>
            </head>
            <div
                className={style.Container}
            >
                <SectionTitle title='Back-end skills' />

                <div
                    className={style.ContentContainer}
                >
                    <div
                        className={style.DescriptionContainer}
                    >
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
                                    Todas as tecnologias listadas fazem parte da minha stack de desenvolvimento back-end, das quais
                                    desenvolvo e aprimoro minhas API's.
                                </p>
                            </div>

                        </div>
                        <div className={style.Description}>

                            <div
                                className={style.BoxIcon}
                            >
                                <Image
                                    className={style.Icon}
                                    src={desktop}
                                    alt=''
                                />
                            </div>
                            <div className={style.TitleAndDescription}>
                                <h4>
                                    Express, Prisma, SQL
                                </h4>

                                <p>
                                    Na minha stack de desenvolvimento essas tecnologias se destacam por
                                    sempre estarem presentes em minhas a API's. O Express é utilizado para receber, interpretar e manipular as chamdas HTTP. Já o Prisma
                                    é um ORM utilizado para integração do banco de dados. O SQL é utilizado para criar Banco de dados
                                    estruturados e robustos junto com Postgress.
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
                                    Jsonwebtoken, Cloudnary-Provider, NoSQL
                                </h4>

                                <p>
                                    Em toda API se faz necessário a autenticação sendo eestabelcidadas, por sua praticidade a lib jsonwebtoken para este serviço.
                                    Para salvar e acondicionar as  imagens das aplicações, é utilizado a Cloudnary para hospedar as imagens destimadas as API's, e
                                    para aplicações mais simples que não vão utilizar dados complexos são utilizados NoSQL juntamente com  MongoDB e FaunaDB, pois são
                                    dois exímios bancos de dados.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div
                        className={style.StatsContainer}
                    >
                        <h2>
                            Coding skills
                            <span className={style.span_extern}>
                                <span className={style.span_intern}>

                                </span>
                            </span>
                        </h2>

                        <div className={style.status}>
                            <StatusBar language='Nodejs' percentCurrent='60' />
                            <StatusBar language='Express' percentCurrent='50' />
                            <StatusBar language='prisma' percentCurrent='60' />
                            <StatusBar language='jsonwebtoken' percentCurrent='40' />
                            <StatusBar language='Cloudnary-Provider' percentCurrent='30' />
                            <StatusBar language='PostgresSQL' percentCurrent='30' />
                            <StatusBar language='MySQL' percentCurrent='30' />
                            <StatusBar language='FaunaDB' percentCurrent='30' />
                            <StatusBar language='MongoDB' percentCurrent='30' />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}