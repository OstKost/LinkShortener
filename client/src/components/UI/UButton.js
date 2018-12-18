import React from 'react'

const UButton = props => {
	return (
		<button
			className={`btn ${props.classes}`}
			{...props}			
		>
			{props.text}
		</button>
	)
}

export default UButton
