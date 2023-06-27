// Write your code here

import {List, DirectionTab} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, changeDirection, isActive} = props
  const {displayText, directionId} = directionDetails
  const changeDirectionId = () => {
    changeDirection(directionId)
  }

  console.log(isActive)
  return (
    <List>
      <DirectionTab
        type="button"
        onClick={changeDirectionId}
        isActive={isActive}
      >
        {displayText}
      </DirectionTab>
    </List>
  )
}
export default GradientDirectionItem
