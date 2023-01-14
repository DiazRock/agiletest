import {
  CardWetherComponentStyle,
  LeftImageStyle,
  TitleBannerRight,
  CoordinateWeather,
} from './styles'

export const CardWetherComponent = () => {
  return (
    <CardWetherComponentStyle>
      <LeftImageStyle />
      <TitleBannerRight>Washington DC</TitleBannerRight>
      <CoordinateWeather> 38.9072° N, 77.0369° W</CoordinateWeather>
    </CardWetherComponentStyle>
  )
}
