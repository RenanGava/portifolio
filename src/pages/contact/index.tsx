import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { SectionTitle } from "../../components/SectionTitle";
import style from "./style.module.scss"
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from 'emailjs-com'

export default function Contact() {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    async function hanldeSubmit(e: FormEvent) {
        e.preventDefault()

        if (name === '' || email === '' || message === '') {
            toast.warn("Preencha os campos Corretamente")
        }

        console.log(e);


        const data = {
            name,
            email,
            message
        }

        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            data,
            process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });


        setName('')
        setEmail('')
        setMessage('')
        // console.log(response);

    }


    return (
        <>
            <head>
                <title>Formulário - Contato</title>
            </head>

            <div className={style.Container}>
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
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <textarea
                            name=""
                            placeholder="Digite Sua Menssagem!"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />

                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}