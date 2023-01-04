import { StyledEngineProvider } from '@mui/material'
import App from 'app/ui/App'

import 'app/di/inversify.config'

export default function Root(): JSX.Element {
  return (
    <StyledEngineProvider>
      <App />
    </StyledEngineProvider>
  )
}
