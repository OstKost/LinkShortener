import './index.css'
import React from 'react'
import { render } from 'react-dom'
import MainForm from './components/MainForm'

const App = () => <MainForm />

render(<App />, document.querySelector('#root'))
