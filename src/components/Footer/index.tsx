import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./style.module.scss"

export function Footer() {

    return (
        <div className={style.Container}>
            <a
                href="https://www.instagram.com/renan87br_/"
                className={style.icon}
            >
                <FontAwesomeIcon
                    icon={faInstagram}
                    color="#007CED"
                    size="2x"
                />
            </a>

            <a
                href="https://github.com/RenanGava"
                className={style.icon}
            >
                <FontAwesomeIcon
                    icon={faGithub}
                    color="#007CED"
                    size="2x"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/renan-dellecrode-gava-39687624b/"
                className={style.icon}
            >
                <FontAwesomeIcon
                    icon={faLinkedin}
                    color="#007CED"
                    size="2x"
                />
            </a>
        </div>
    )
}