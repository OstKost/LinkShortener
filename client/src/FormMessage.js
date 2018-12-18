import React from 'react'
import UButton from './UI/UButton'

const FormMessage = props => {
	return (
		<div style={{ marginBottom: '1rem' }}>
			{/* <h6>Your short link is ready! Copy and share it!</h6> */}
			<p className="text-center">
				<code>{props.message}</code>
			</p>

			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<a href="http://google.com">http://g.com/dkajgs</a>
				<UButton type="button" text="Copy" />
			</div>            
		</div>
	)
}

export default FormMessage
