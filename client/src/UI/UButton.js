import React from 'react'

const UButton = props => {
	return (
		<button className="btn btn-lg btn-primary btn-block" type={props.type}>
			{props.text}
		</button>
	)
}

export default UButton
