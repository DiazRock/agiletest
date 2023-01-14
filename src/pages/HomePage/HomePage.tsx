import { SetStateAction, useState } from 'react'
import { PlaceHolder } from 'src/components/PlaceHolder/PlaceHolder'
import { Button } from 'src/components/Button/Button'
import { ToggleButton } from 'src/components/ToggleButton/ToggleButton'
import { ButtonProps, PlaceHolderProps } from 'src/@types/interfaces'
import { CityBlankSpace } from 'src/components/CityBlankSpace/CityBlankSpace'
import { CardWetherComponent } from 'src/components/CardWetherComponent/CardWetherComponent'

export const HomePage = () => {
  const [isCelcius, setIsCelcius] = useState(false)
  const [cityName, setCityName] = useState('')
  const [updated, setUpdated] = useState(cityName)
  const buttonProps: ButtonProps = {
    children: <p>Submit</p>,
    onClickFunc: () => {
      // 👇 "message" stores input field value
      setUpdated(cityName)
      console.log(cityName)
    },
  }
  const handleChangeFunc = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setCityName(event.target.value)
  }
  const placeholderProps: PlaceHolderProps = {
    type: 'text',
    placeholder: 'Enter a city name',
    id: 'cityName',
    name: 'cityName',
    onChange: handleChangeFunc,
    // value: cityName
  }

  return (
    <div>
      <ToggleButton />
      <PlaceHolder {...placeholderProps} />
      <Button {...buttonProps} />
      {updated === '' && <CityBlankSpace />}
      {updated !== '' && <CardWetherComponent />}
    </div>
  )
}
