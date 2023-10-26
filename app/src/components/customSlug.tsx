import { StringInput, StringInputProps, useFormValue } from 'sanity'
import React, { useEffect, useState, useCallback } from 'react'
import { Box, Flex, Button } from '@sanity/ui'
import sanityClient from '../sanityClient'

const getSlug = async (docId: string): Promise<string> => {
  docId = docId.replace('drafts.', '')
  return sanityClient
    .fetch(`*[_id == "${docId}"][0]`)
    .then((doc: any) => {
      console.log(docId, doc)
      return doc?.name?.replace(' ', '-').toLowerCase()
    });
}

export const CustomSlugInput = (props: StringInputProps) => {
  const docId = useFormValue(['_id'])
  const [slug, setSlug] = useState('')
  const { elementProps } = props
  const { onChange } = elementProps

  useEffect(() => {
    if (!props.value) return
    setSlug(props.value)
  }, [props.value])

  const onButtonClick = useCallback(
    (e: any) => {
      getSlug(String(docId)).then( slug => {
        setSlug(slug)
        e.target.value = slug
        onChange(e)
      })
    },
    [onChange]
  )

  return (
    <>
      <Flex direction="row">
        <Flex justify="flex-start" align="center">
          <Box style={{ width: '300px' }}>
            <StringInput
              {...props}
              value={slug}
              readOnly={true}
            />
          </Box>
        </Flex>
        <Button onClick={onButtonClick}>Generate</Button>
      </Flex>
      <Box>
        {slug}
      </Box>
    </>
  )
}

