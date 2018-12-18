import React, { Component } from 'react'
import FormHeader from './FormHeader'
import FormFooter from './FormFooter'
import UInput from './UI/UInput'
import UButton from './UI/UButton'

export default class MainForm extends Component {
	state = {
		fullUrl: '',
		shortCode: '',
		shortUrl: ''
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

				<UButton type="submit" text="Generate" />

				<div>
					<h6>Your short link is ready! Copy and share it!</h6>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between'
						}}
					>
						<a href="http://google.com">http://g.com/dkajgs</a>
						<button>Copy</button>
					</div>
				</div>

				<FormFooter />
			</form>
		)
	}
}
