import ReactDOM from 'react-dom/client'
import { Kelpe } from 'vibrant-stoic-paradox'

const URL = 'https://raw.githubusercontent.com/getsentry/sentry-api-schema/main/openapi-derefed.json'
// const URL = 'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v3.0/petstore-expanded.json'

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <h1 style={{ position: 'absolute', bottom: 0, right: 0 }}>App</h1>

      <Kelpe url={URL} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
