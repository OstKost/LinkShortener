import React, { Component } from 'react'
import FormHeader from './FormHeader'
import FormFooter from './FormFooter'
import UInput from './UI/UInput'
import UButton from './UI/UButton'
import FormMessage from './FormMessage'

export default class MainForm extends Component {
	state = {
		fullUrl: '',
		shortCode: '',
		shortUrl: '',
		loading: false,
		error: false,
		message: 'Just give it a try!'
	}

	onInputChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	onFormSubmit = event => {
		event.preventDefault()
		console.log(this.state)
	}

	render() {
		return (
			<form className="form-signin" onSubmit={this.onFormSubmit}>
				<FormHeader />

				<FormMessage {...this.state} />

				<UInput
					type="text"
					id="fullUrl"
					placeholder="Long URL address"
					required={true}
					autoFocus={true}
					value={this.state.fullUrl}
					onChange={this.onInputChange}
				/>

				<UInput
					type="text"
					id="shortCode"
					placeholder="Your own code for short URL"
					value={this.state.shortCode}
					onChange={this.onInputChange}
				/>

				<UButton type="submit" text="Generate" classes="btn-block" />

				<FormFooter />
			</form>
		)
	}
}
