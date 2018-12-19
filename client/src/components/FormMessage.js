import React, { Component } from 'react'
import UButton from './UI/UButton'
import styles from './FormMessage.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

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

	renderLink = () =>
		this.props.shortUrl ? (
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
				<CopyToClipboard
					text={this.props.shortUrl}
					onCopy={this.onCopyClick}
				>
					<UButton type="button" text="Copy" classes="btn-success" />
				</CopyToClipboard>
			</div>
		) : null

	render() {
		return (
			<div className={styles.messageWrapper}>
				<p className="text-center">
					<code>{this.state.message || this.props.message}</code>
				</p>

				{this.renderLink()}
			</div>
		)
	}
}
