import { observer } from 'mobx-react'
import { MainTitleBox, MainTitleGreet, MainTitleGreetSecind, MainWrapper } from './MainPage.styles'

const MainPage = observer(() => {
  return (
    <MainWrapper>
      <MainTitleBox>
        <MainTitleGreet>A NIKUDA</MainTitleGreet>
        <MainTitleGreetSecind>Все сидим дома</MainTitleGreetSecind>
      </MainTitleBox>
    </MainWrapper>
  )
})

export default MainPage
