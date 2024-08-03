import './styles/global.css'

import { Navigation } from './components/navigation'
import { Providers } from './components/providers'
import { OperationList } from './components/operation-list'

interface KelpeProps {
  url: string
}

export const Kelpe = (props: KelpeProps) => {
  const { url } = props

  return (
    <div className="kelpe">
      <Providers>
        <div className="flex flex-row">
          <Navigation url={url} />
          <OperationList url={url} />
        </div>
      </Providers>
    </div>
  )
}
