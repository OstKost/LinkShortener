import React from 'react'

const UInput = props => {
	return (
		<div className="form-label-group">
			<input className={`form-control ${props.classes}`} {...props} />
			<label htmlFor={props.id}>{props.placeholder}</label>
		</div>
	)
}

export default UInput
