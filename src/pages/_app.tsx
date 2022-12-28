import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

	const [render, setRender] = useState(false)

	useEffect(() => {
		setRender(true)
	}, [])

	if (!render) {
		return null
	} else {
		return (
			<>
				<Header />
				<Component {...pageProps} />
			</>
		)
	}
}
