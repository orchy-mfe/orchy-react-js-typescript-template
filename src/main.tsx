import React from 'react'
import ReactDOM from 'react-dom/client'
import {renderWithQiankun, qiankunWindow, QiankunProps} from 'vite-plugin-qiankun/dist/helper'
import App from './App'
import './index.css'

const retrieveContainer = (props: QiankunProps) => props.container ?? document

let root: ReactDOM.Root

const render = (props: QiankunProps) => {
  const container = retrieveContainer(props)
  root = ReactDOM.createRoot(container.querySelector('#root') as HTMLElement)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

renderWithQiankun({
  mount(props) {
    render(props)
  },
  bootstrap() {
    console.log('bootstrap')
  },
  unmount(props) {
    root.unmount()
  },
  update() {
    console.log('update')
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}

