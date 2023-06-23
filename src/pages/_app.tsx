import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { useEffect, useState } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import { ToastContainer } from 'react-toastify';

import '../styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from '../components/Footer';


config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {

	const [render, setRender] = useState(false)

	useEffect(() => {
		setRender(true)
	}, [])

	if (!render) {
		return null
	} else {
		return (
			<div className='_app'>
				<Header />
				<Component {...pageProps} />
				<ToastContainer/>
				<Footer/>
			</div>
		)
	}
}
