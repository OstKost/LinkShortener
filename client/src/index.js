import './index.css'
import React from 'react'
import { render } from 'react-dom'
import MainForm from './MainForm'

const App = () => {
	return <MainForm />
}

render(<App />, document.querySelector('#root'))
