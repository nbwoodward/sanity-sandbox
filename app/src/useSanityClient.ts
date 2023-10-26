import { useMemo } from "react"
import {useClient} from 'sanity'

const config = {
  projectId: 'q429asnu',
  dataset: 'production',
  apiVersion: '2022-10-21',
  useCdn: false,
}

export const useSanityClient = () => {
  const client = useClient({apiVersion: '2022-10-21'}).withConfig(config)
  return useMemo(() => client, [client])
}

