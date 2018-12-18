import React, { Component } from 'react'
import FormHeader from './FormHeader'
import FormFooter from './FormFooter'
import UInput from './UI/UInput'
import UButton from './UI/UButton'
import FormMessage from './FormMessage'

export default class MainForm extends Component {
	state = {
		fullUrl: 'google.com',
		shortCode: 'goo',
		shortUrl: 'lh.com/goo',
		loading: false,
		error: false,
		message: 'Just give it a try!'
	}

	onInputChange = event => {
		const url = event.target.value
		const newState = {
			[event.target.id]: url
		}

		if (
			event.target.id === 'fullUrl' &&
			this.validUrl(event.target.value)
		) {
			newState.error = false
			newState.message = 'Seems like an valid URL. Short it!'
		} else {
			newState.error = true
			newState.message = 'URL is not valid!'
		}

		this.setState({ ...newState })
	}

	onFormSubmit = event => {
		event.preventDefault()
		console.log(this.state)
		this.setState({
			loading: true,
			message: 'Wait a second...'
		})
	}

	validUrl(url) {
		// const regStr = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
		const regStr = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
		return regStr.test(url)
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

				<UButton
					type="submit"
					text="Generate"
					classes="btn-lg btn-primary btn-block"
					disabled={
						this.state.loading || this.state.error ? true : false
					}
				/>

				<FormFooter />
			</form>
		)
	}
}
