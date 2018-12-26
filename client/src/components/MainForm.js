import React, { Component } from 'react'
import axios from 'axios'
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
		errorUrl: true,
		touchedUrl: false,
		errorCode: false,
		message: 'Just give it a try!'
	}

	onInputChange = event => {
		const value = event.target.value
		const id = event.target.id

		const newState = {
			[id]: value
		}

		if (id === 'shortCode') {
			if (!value) {
				newState.errorCode = false
				newState.message = `"Do or do not. There is no try."– Yoda`
			} else if (this.validCode(value)) {
				newState.errorCode = false
				newState.message =
					'Code is valid. May the short URL be with you.'
			} else {
				newState.errorCode = true
				newState.message =
					'Your short URL is not valid. Try another one!'
			}
		}

		if (id === 'fullUrl') {
			newState.touchedUrl = true
			if (!value) {
				newState.errorUrl = true
				newState.message = 'URL field is empty!'
			} else if (value && this.validUrl(value)) {
				newState.errorUrl = false
				newState.message = 'Seems like an valid URL. Short it!'
			} else {
				newState.errorUrl = true
				newState.message = 'URL is not valid!'
			}
		}

		this.setState({ ...newState })
	}

	onFormSubmit = async event => {
		event.preventDefault()

		this.setState({
			loading: true,
			message: 'Wait a second...'
		})

		try {
			const response = await axios.post('/', {
				fullUrl: this.state.fullUrl,
				shortCode: this.state.shortCode
			})
			if (response.data.success) {
				this.setState({
					fullUrl: response.data.fullUrl,
					shortUrl: response.data.shortUrl,
					message: response.data.message,
					loading: false
				})
			} else {
				this.setState({
					message: response.data.message,
					shortUrl: '',
					loading: false
				})
			}
		} catch (error) {
			this.setState({
				loading: false,
				message: error.message
			})
		}
	}

	validUrl(url) {
		const regStr = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([-.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
		return regStr.test(url)
	}

	validCode(code) {
		const regStr = /^[a-zA-Z0-9]{1,}$/
		return regStr.test(code)
	}

	onCopyClick = () => {
		this.setState({
			message: 'Link is copied! Now just share it!'
		})
	}

	render() {
		return (
			<form className="form-signin" onSubmit={this.onFormSubmit}>
				<FormHeader />

				<p className="text-center">
					<code>{this.state.message}</code>
				</p>

				<FormMessage
					shortUrl={this.state.shortUrl}
					onCopyClick={this.onCopyClick}
				/>

				<UInput
					type="text"
					id="fullUrl"
					placeholder="Long URL address"
					required={true}
					autoFocus={true}
					value={this.state.fullUrl}
					onChange={this.onInputChange}
					classes={
						this.state.touchedUrl
							? this.state.errorUrl
								? 'is-invalid'
								: 'is-valid'
							: ''
					}
				/>

				<UInput
					type="text"
					id="shortCode"
					placeholder="Your own code for short URL"
					value={this.state.shortCode}
					onChange={this.onInputChange}
					classes={
						this.state.shortCode
							? this.state.errorCode
								? 'is-invalid'
								: 'is-valid'
							: ''
					}
				/>

				<UButton
					type="submit"
					text="Generate"
					classes="btn-lg btn-primary btn-block"
					disabled={
						this.state.loading ||
						this.state.errorUrl ||
						this.state.errorCode
							? true
							: false
					}
				/>

				<FormFooter />
			</form>
		)
	}
}
