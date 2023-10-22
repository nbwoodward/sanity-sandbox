import React from 'react'
import {FieldMember, MemberField, ObjectInputProps} from 'sanity'

export interface FoodInfoFields {
  tastesGood: string
  info: string
}

export type FoodInfoInputProps = ObjectInputProps<FoodInfoFields>

export const FoodInfo = (props: FoodInfoInputProps) => {
  const {members, renderField, renderInput, renderItem, renderPreview} = props

  const tastesGoodMember = members.find(
    (member): member is FieldMember => member.kind === 'field' && member.name === 'tastesGood'
  )

  const storyMember = members.find(
    (member): member is FieldMember => member.kind === 'field' && member.name === 'story'
  )

  return (
    <>
      <div> Hello world! </div>
      {tastesGoodMember && (
        <MemberField
          {...props}
          member={tastesGoodMember}
          renderInput={renderInput}
          renderField={renderField}
          renderItem={renderItem}
          renderPreview={renderPreview}
        />
      )}
      {storyMember && (
        <MemberField
          {...props}
          member={storyMember}
          renderInput={renderInput}
          renderField={renderField}
          renderItem={renderItem}
          renderPreview={renderPreview}
        />
      )}
    </>
  )
}
