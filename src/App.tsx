import { SWRConfig } from 'swr'

import Layout from './components/Layout'
import Search from './components/Search'

const SWR_CONFIG = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
}

const App = () => {
  return (
    <SWRConfig value={SWR_CONFIG}>
      <Layout>
        <Search />
      </Layout>
    </SWRConfig>
  )
}

export default App
