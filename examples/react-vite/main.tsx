import ReactDOM from 'react-dom/client'
import { Kelpe } from 'vibrant-stoic-paradox'

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <h1 style={{ position: 'absolute', bottom: 0, right: 0 }}>App</h1>
      <Kelpe url="https://raw.githubusercontent.com/getsentry/sentry-api-schema/main/openapi-derefed.json" />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
