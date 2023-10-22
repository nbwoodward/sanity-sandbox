import {useEffect, useState} from 'react'
import {SanityDocument} from 'sanity'
import { useSanityClient } from '../client'

export const LocalClientView = ({ document }: { document: SanityDocument }) => {
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
      <h4>I'm the Local Client View</h4>
      <div>{state}</div>
    </div>
  )
}
