import { ReactNode, SetStateAction } from 'react'

export interface ButtonProps {
  children: ReactNode
  onClickFunc: () => void
}

export interface PlaceHolderProps {
  type: string
  placeholder: string
  id: string
  name: string
  onChange: (event: { target: { value: SetStateAction<string> } }) => void
  // value: string
}
