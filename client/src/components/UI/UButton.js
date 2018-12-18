import React from 'react'

const UButton = props => {
	return (
		<button
			className={`btn ${props.classes}`}
			type={props.type}
			onClick={props.onClick}
		>
			{props.text}
		</button>
	)
}

export default UButton
