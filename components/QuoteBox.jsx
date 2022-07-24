import React from 'react'
import './QuoteBox.css'

const QuoteBox = ({infoQuote, infoColor, infoButton}) => {

  const colorBgStyle = {
    backgroundColor: infoColor
  }

  const colorStyle = {
    color: infoColor
  }

  return (
    <div className='card__container'>
        <div className='card card__first-section'>
            <i className='bx bxs-quote-alt-left' style={colorStyle}></i>
            <span style={colorStyle}>{infoQuote.quote}</span>
        </div>
        <div className='card card__second-section'>
            <span style={colorStyle}>{infoQuote.author}</span>
        </div>
        <div className='card card__btn-section'>
            <button onClick={infoButton} style={colorBgStyle}>&#62;</button>
        </div>
    </div>
  )
}

export default QuoteBox