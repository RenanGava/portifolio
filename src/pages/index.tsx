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
		const repos = axios.get('https://api.github.com/users/RenanGava').then(
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
							Meu Nome é Renan tenho atualmente 21 anos e sou facinado por
							tecnologia desde novo sempre buscando aprender e me aprimorar cada vez mais
							na area como desenvolvedor.
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

