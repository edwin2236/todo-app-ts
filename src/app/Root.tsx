import { StyledEngineProvider } from '@mui/material'
import App from './ui/App'
import './di/inversify.config'

export default function Root() {
  return (
    <StyledEngineProvider>
      <App />
    </StyledEngineProvider>
  )
}
