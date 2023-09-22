import { observer } from 'mobx-react'
import { MainTitleGreet, MainWrapper } from './StartScreen.styles'
import { useEffect, useState } from 'react'

const StartScreen = observer(() => {
  const [textColor, setTextColor] = useState<string>('transparent')
  const [position, setPosition] = useState<string>('0')

  useEffect(() => {
    setTextColor('#d4d4d4')
  }, [])

  useEffect(() => {
    setTimeout(() => setPosition('100vw'), 2500)
  }, [])

  return (
    <MainWrapper style={{ left: position }}>
      <MainTitleGreet style={{ color: textColor }}>KUDA</MainTitleGreet>
    </MainWrapper>
  )
})

export default StartScreen
