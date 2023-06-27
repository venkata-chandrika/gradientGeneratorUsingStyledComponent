// Style your elements here
import styled from 'styled-components'

export const List = styled.li`
  list-style-type: none;
`

export const DirectionTab = styled.button`
  background-color: ${props => (props.isActive ? '#ededed' : '#ffffff79')};
  margin-right: 20px;
  border-radius: 12px;
  border-style: none;
  outline: none;
  cursor: pointer;
  color: #334155;
  padding: 20px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  min-width: 125px;
  max-width: 250px;
`
