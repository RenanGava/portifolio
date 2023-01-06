import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { SectionTitle } from "../../components/SectionTitle";
import style from "./style.module.scss"
import { FormEvent, useRef, useState } from "react";
import axios from "axios";


export default function Contact() {


    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const message = useRef<HTMLTextAreaElement>(null)


    async function hanldeSubmit(e: FormEvent) {
        e.preventDefault()

        await axios.post("http://localhost:3000/api/contact",
            {ok: true}
        )
    }

    return (
        <>
            <head>
                <title>Formulário - Contato</title>
            </head>

            <div>
                <SectionTitle
                    title="Contato"
                    styleComponent={style}
                >

                    <a
                        href="https://www.instagram.com/renan87br_/"
                        className={style.icon}
                    >
                        <FontAwesomeIcon
                            icon={faInstagram}
                            color="#007CED"

                        />
                    </a>

                    <a
                        href="https://github.com/RenanGava"
                        className={style.icon}
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="#007CED"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/renan-dellecrode-gava-39687624b/"
                        className={style.icon}
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#007CED"
                        />
                    </a>

                </SectionTitle>


                <div
                    className={style.ContentContainer}
                >
                    <h2></h2>
                    <form onSubmit={hanldeSubmit}>
                        <input
                            type="text"
                            placeholder="Nome"
                            ref={name}
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            ref={email}
                        />
                        <textarea
                            name=""
                            placeholder="Digite Sua Menssagem!"
                            ref={message}
                        />

                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}