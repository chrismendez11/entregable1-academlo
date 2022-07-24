import { useState } from 'react'
import QuoteBox from '../components/QuoteBox'
import quotes from '../json/quotes.json'
import colors from '../utils/colors'
import './App.css'

function App() {

  const getRandomNumber = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
  }

  let randomQuote = getRandomNumber(quotes)
  let randomColor = getRandomNumber(colors)

  const [quote, setQuote] = useState(randomQuote)
  const [color, setColor] = useState(randomColor)

  const changeState = () => {
    randomQuote = getRandomNumber(quotes)
    randomColor = getRandomNumber(colors)

    setQuote(randomQuote)
    setColor(randomColor)
  }

  const colorBgStyle = {
    backgroundColor: randomColor
  }

  return (
    <div className="App" style={colorBgStyle}>
      <QuoteBox infoQuote={randomQuote} infoColor={randomColor} infoButton={changeState}/>
    </div>
  )
}

export default App
