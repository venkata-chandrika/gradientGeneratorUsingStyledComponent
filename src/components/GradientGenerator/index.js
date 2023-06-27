import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  DirectionHeading,
  Heading,
  InputsContainer,
  Input,
  Form,
  Button,
  DirectionsContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    inputColor1: '#8ae323',
    inputColor2: '#014f7b',
    directionId: gradientDirectionsList[0].directionId,
    color1: '#8ae323',
    color2: '#014f7b',
    activeDirectionId: '',
  }

  onGenerate = event => {
    event.preventDefault()
    const {inputColor1, inputColor2, directionId} = this.state
    this.setState({
      color1: inputColor1,
      color2: inputColor2,
      activeDirectionId: directionId,
    })
  }

  onChangeColor1 = event => {
    this.setState({inputColor1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({inputColor2: event.target.value})
  }

  onChangeDirectionId = id => {
    this.setState({directionId: id})
  }

  render() {
    const {
      inputColor2,
      inputColor1,
      directionId,
      color1,
      color2,
      activeDirectionId,
    } = this.state
    return (
      <AppContainer
        color1={color1}
        color2={color2}
        direction={activeDirectionId}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient </Heading>
        <Form onSubmit={this.onGenerate}>
          <DirectionHeading>Choose Direction</DirectionHeading>
          <DirectionsContainer>
            {gradientDirectionsList.map(eachObj => (
              <GradientDirectionItem
                key={eachObj.directionId}
                directionDetails={eachObj}
                changeDirection={this.onChangeDirectionId}
                isActive={eachObj.directionId === directionId}
              />
            ))}
          </DirectionsContainer>
          <DirectionHeading>Pick the Colors</DirectionHeading>
          <InputsContainer>
            <div>
              <DirectionHeading>{inputColor1}</DirectionHeading>
              <Input
                type="color"
                value={inputColor1}
                onChange={this.onChangeColor1}
              />
            </div>
            <div>
              <DirectionHeading>{inputColor2}</DirectionHeading>
              <Input
                type="color"
                value={inputColor2}
                onChange={this.onChangeColor2}
              />
            </div>
          </InputsContainer>
          <Button>Generate</Button>
        </Form>
      </AppContainer>
    )
  }
}
export default GradientGenerator
