import './styles/global.css'

import { Navigation } from './components/navigation'
import { Providers } from './components/providers'
import { OperationList } from './components/operation-list'
import { Content, Layout, Sidebar } from './components/layout'
import { Info } from './components/info'

interface KelpeProps {
  url: string
}

export const Kelpe = (props: KelpeProps) => {
  const { url } = props

  return (
    <div className="kelpe">
      <Providers>
        <Layout>
          <Sidebar>
            <Navigation url={url} />
          </Sidebar>
          <Content>
            <Info url={url} />
            <OperationList url={url} />
          </Content>
        </Layout>
      </Providers>
    </div>
  )
}
