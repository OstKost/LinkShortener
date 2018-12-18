import React, { Component } from 'react'
import FormHeader from './FormHeader'
import UInput from './UI/UInput'
import UButton from './UI/UButton'
import FormFooter from './FormFooter'

export default class MainForm extends Component {
	state = {
		fullUrl: '',
		shortCode: '',
		shortUrl: ''
	}

	render() {
		return (
			<form className="form-signin">
				<FormHeader />

				<UInput
					type="text"
					id="fullUrl"
					placeholder="Long URL address"
					label="Long URL address"
					required={true}
					autofocus={true}
				/>
				<UInput
					type="text"
					id="shortCode"
					placeholder="Your code for URL"
					label="Your code for URL"
					required={true}
				/>

				<UButton type="submit" text="Generate" />

				<FormFooter />
			</form>
		)
	}
}
