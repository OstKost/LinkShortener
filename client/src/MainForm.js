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
					value={this.state.fullUrl}
				/>

				<UInput
					type="text"
					id="shortCode"
					placeholder="Your code for URL"
					label="Your own code for URL"
					required={true}
					value={this.state.shortCode}
				/>

				<p>
					<h6>Your short link is ready! Copy and share it!</h6>
					<div>
						<a href="http://google.com">http://g.com/dkajgs</a>
						<button>Copy</button>
					</div>
				</p>

				<UButton type="submit" text="Generate" />

				<FormFooter />
			</form>
		)
	}
}
