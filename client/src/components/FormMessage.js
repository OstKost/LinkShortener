import React, { Component } from 'react'
import UButton from './UI/UButton'
import styles from './FormMessage.module.css'

export default class FormMessage extends Component {
	state = {
		message: '',
		height: 'auto'
	}

	onCopyClick = () => {
		this.setState({
			message: 'Link is copied! Now just share it!'
		})
	}

	onLinkClick = () => {
		this.setState({
			message: 'You will be redirected in a second.'
		})
	}

	render() {
		console.log(this.props)
		return (
			<div
				className={styles.messageWrapper}
				style={{
					height: this.state.height
				}}
			>
				<p className="text-center">
					<code>{this.state.message || this.props.message}</code>
				</p>

				<div className={styles.linkWrapper}>
					<UButton
						type="button"
						text={this.props.shortUrl}
						classes="btn-lg btn-link"
						onClick={this.onLinkClick}
					/>
					<UButton
						type="button"
						text="Copy"
						classes="btn-success"
						onClick={this.onCopyClick}
					/>
				</div>
			</div>
		)
	}
}
