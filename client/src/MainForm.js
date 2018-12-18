import React, { Component } from 'react'
import FormHeader from './FormHeader'
import UInput from './UI/UInput'
import UButton from './UI/UButton'

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

				<p className="mt-5 mb-3 text-muted text-center">
					&copy; 2017-2018
				</p>
			</form>
		)
	}
}
