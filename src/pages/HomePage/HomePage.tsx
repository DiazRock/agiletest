import { PlaceHolder } from 'src/components/PlaceHolder/PlaceHolder'
import { Button } from 'src/components/Button/Button'
import { ToggleButton } from 'src/components/ToggleButton/ToggleButton'
import { ButtonProps } from 'src/@types/interfaces'

const buttonProps: ButtonProps = {
  children: <p>Submit</p>,
  onClickFunc(): void {
    console.log('Button')
  },
}

export const HomePage = () => {
  return (
    <div>
      <ToggleButton />
      <PlaceHolder />
      <Button {...buttonProps} />
    </div>
  )
}
