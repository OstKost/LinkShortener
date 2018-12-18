import React, { Component } from 'react'
import UButton from './UI/UButton'
import styles from './FormMessage.module.css'

export default class FormMessage extends Component {
	state = {
		message: '',
		height: '0px'
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

	componentDidMount() {
		if (this.props.shortUrl) {
			this.setState({
				height: 'auto'
			})
		}
	}

	render() {
		return (
			<div className={styles.messageWrapper}>
				<p className="text-center">
					<code>{this.state.message || this.props.message}</code>
				</p>

				<div
					className={styles.linkWrapper}
					style={{
						height: this.state.height
					}}
				>
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
