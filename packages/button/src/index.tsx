import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonProps = {
  bg?: string
  children?: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ bg = "#fff", children }: ButtonProps) => {
  return (
    <S.Wrapper bg={bg}>
      {children}
    </S.Wrapper>
  )
}

export default Button
