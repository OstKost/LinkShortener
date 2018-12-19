import React from 'react'
import UButton from './UI/UButton'
import styles from './FormMessage.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const renderLink = ({ shortUrl, onCopyClick }) =>
	shortUrl ? (
		<div className={styles.linkWrapper}>
			<CopyToClipboard text={shortUrl} onCopy={onCopyClick}>
				<UButton
					type="button"
					text={shortUrl}
					classes="btn-lg btn-link"
				/>
			</CopyToClipboard>
			<CopyToClipboard text={shortUrl} onCopy={onCopyClick}>
				<UButton type="button" text="Copy" classes="btn-success" />
			</CopyToClipboard>
		</div>
	) : null

const FormMessage = props => {
	return <div className={styles.messageWrapper}>{renderLink(props)}</div>
}

export default FormMessage
