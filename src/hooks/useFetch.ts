import useSWR from 'swr'

export const useFetch = <T>(key: string, fetcher: (...args: any[]) => Promise<T>) => {
  const { data, error } = useSWR(key, fetcher)

  if (error) { throw error }

  return { data }
}
