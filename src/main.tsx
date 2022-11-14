import {StrictMode} from 'react'
import {createRoot, Root} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'

import OrchyBaseMfe from '@orchy-mfe/spa-adapter'
import {MicroFrontendProperties} from '@orchy-mfe/models'
export class ReactMfeTypeScript extends OrchyBaseMfe {
  private root?: Root
  async mount(microFrontendProperties: MicroFrontendProperties) {
    this.root = createRoot(this.getContainer())
    this.root.render(
      <StrictMode>
        <BrowserRouter basename={microFrontendProperties?.basePath}>
          <App />
        </BrowserRouter>
      </StrictMode>
    )
  }

  async unmount() {
    this.root?.unmount()
  }
}

customElements.define('react-mfe-typescript', ReactMfeTypeScript)