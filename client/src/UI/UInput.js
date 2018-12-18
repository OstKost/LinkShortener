import React from 'react'

const UInput = props => {
	return (
		<div className="form-label-group">
			<input className="form-control" {...props} />
			<label htmlFor={props.id}>{props.label}</label>
		</div>
	)
}

export default UInput
