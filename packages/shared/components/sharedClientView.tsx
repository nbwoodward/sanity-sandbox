import {useEffect, useState} from 'react'
import {SanityDocument} from 'sanity'
import { useSanityClient } from '../useSanityClient'

export const SharedClientView = ({ document }: { document: SanityDocument }) => {
  const [state, setState] = useState('Fetching')
  const client = useSanityClient()
  const {displayed}: any = document

  useEffect(() => {
    client.fetch(`*[_id == '${displayed._id}'][0]`).then((doc) => {
      setState(`Loaded document: ${doc._id}`)
    }).catch((e) => {
      console.log(e)
      setState(`Error fetching doc: ${e}`)
    })
  }, [displayed])

  return (
    <div style={{padding:'20px'}}>
      <h4>I'm the shared client view</h4>
      <div>{state}</div>
    </div>
  )
}
