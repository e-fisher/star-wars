import { SWRConfig } from 'swr'

import Layout from './components/Layout'
import Search from './components/Search'
import ErrorBoundary from './components/ErrorBoundary'

const SWR_CONFIG = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
}

const App = () => {
  return (
    <SWRConfig value={SWR_CONFIG}>
      <Layout>
        <ErrorBoundary>
          <Search />
        </ErrorBoundary>
      </Layout>
    </SWRConfig>
  )
}

export default App
