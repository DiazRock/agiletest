import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { HomePage } from 'src/pages/HomePage/HomePage'

describe('Home Page', () => {
  it('should render correcty', () => {
    const component = renderer.create(<HomePage />)

    expect(component).toMatchSnapshot()
  })
  it('should be able to render home', () => {
    render(<HomePage />)

    expect(screen.getByText(/home/i)).toBeInTheDocument()
  })
})
