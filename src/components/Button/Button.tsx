import { ButtonProps } from 'src/@types/interfaces'
import { Container } from './styles'

export const Button = ({ children, onClickFunc }: ButtonProps) => {
  return <Container onClick={onClickFunc}>{children}</Container>
}
