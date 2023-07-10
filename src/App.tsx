import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './router'

import { BrowserRouter } from "react-router-dom"
import { createContext } from 'react'
import { CyclesContextProvider } from './contexts/CyclesContexts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <CyclesContextProvider>
          <Router/>  
        </CyclesContextProvider>
      </BrowserRouter>
      
      <GlobalStyle />
      
    </ThemeProvider>
  )
}
