// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: roboto;
  min-height: 100vh;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-weight: 600;
`

export const DirectionHeading = styled.p`
  color: #ededed;
`
export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Input = styled.input`
  outline: none;
  width: 100%;
  cursor: pointer;
  height: 40px;
`
export const Button = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`

export const DirectionsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
