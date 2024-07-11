import React from 'react'
import ReactDOM from 'react-dom/client'
import { Kelpe } from 'vibrant-stoic-paradox'

const App = () => {
  return (
    <div>
      <h1>Kelpe</h1>
      <Kelpe url="https://raw.githubusercontent.com/getsentry/sentry-api-schema/main/openapi-derefed.json" />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
