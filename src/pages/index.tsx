import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import style from '../styles/Home.module.scss'

interface UserProps {
	name: string
	avatar_url: string
	html_url: string
	repos_url: string
}

export default function Home() {
	const [user, setUser] = useState<UserProps>()


	useEffect(() => {
		axios.get('https://api.github.com/users/RenanGava').then(
			res => {
				setUser(res.data)
			}
		)
	}, [])

	console.log(user);

	return (
		<>
			<head>
				<title>Home</title>
			</head>
			<div className={style.HomeContainer}>
				<div className={style.HomeContent}>
					<div className={style.Avatar}>
						<img className={style.image} src={user?.avatar_url} alt='Logo' />
					</div>

					<div className={style.UserContent}>
						<div className={style.Title}>
							<span>
								Full Stack Developer
							</span>
							<h2>{user?.name}</h2>
						</div>
						<div className={style.Description}>
							<p>
								Olá, meu nome é Renan. Muito obrigado pela visita!
								Minha carreira como desenvolvedor se iniciou em 2019, onde cursei juntamente com o ensino médio, o curso "Técnico em Informática" no Instituto Federal do Espírito Santo, onde me formei em 2022. Durante a minha trajetória, não foquei apenas no Curso Técnico, me especializei e fiz vários cursos relacionados. Atualmente, estou em minha segunda graduação, Análise e Desenvolvimento de Sistemas.
								Busco sempre me aprimorar e atualizar meus conhecimentos, principalmente com novas linguagens e diferentes bibliotecas.
							</p>
						</div>
						<div
							className={style.Buttons}>
							<div
								className={style.BorderButton}
							>
								<Link
									href="/portifolio"
									className={style.Button}
								>
									Portifólio
								</Link>
							</div>
							<div
								className={style.BorderButton}
							>
								<Link
									href="/contact"
									className={style.Button}
								>
									Contato
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)

}

