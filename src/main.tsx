import {StrictMode} from 'react'
import {createRoot, Root} from 'react-dom/client'
import {renderWithQiankun, qiankunWindow, QiankunProps} from 'vite-plugin-qiankun/dist/helper'
import App from './App'
import './index.css'

const retrieveContainer = (props: QiankunProps) => props.container ?? document

let root: Root

const render = (props: QiankunProps = {}) => {
  const container = retrieveContainer(props)
  root = createRoot(container.querySelector('#root') as HTMLElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}

renderWithQiankun({
  mount(props) {
    render(props)
  },
  bootstrap() {
    console.log('bootstrap')
  },
  unmount() {
    root.unmount()
  },
  update() {
    console.log('update')
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}

