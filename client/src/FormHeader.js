import img_phoenix from './images/phoenix.png'
import React from 'react'

const FormHeader = () => {
	return (
		<header className="text-center mb-4">
			<img
				className="mb-4"
				src={img_phoenix}
				alt="Logo"
				width="90"
				height="90"
			/>
			<h1 className="h3 mb-3 font-weight-normal">URL Shortener</h1>
			<p>
				This service turns your long URLs into shorter, more shareable
				links.
			</p>			
		</header>
	)
}

export default FormHeader
