import { PlaceHolderProps } from 'src/@types/interfaces'
import { PlaceHolderStyle } from './styles'

export const PlaceHolder = (placeholderProps: PlaceHolderProps) => {
  return <PlaceHolderStyle {...placeholderProps} />
}

/* placeholder="Enter a city name"
          id="cityName"
          name="cityName"
          onChange={handleChange}
          value={cityName} */
