import { SWRConfig } from 'swr'

import Search from './components/Search'

const SWR_CONFIG = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
}

const App = () => {
  return (
    <SWRConfig value={SWR_CONFIG}>
      <div className="App">
        <Search />
      </div>
    </SWRConfig>
  )
}

export default App
