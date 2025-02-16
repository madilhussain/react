import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <>
      <h1>CUSTOM APP!</h1>
    </>
  )
}

const anotherElement = (
  <a href="http://www.google.com" target="_blank">VISIT GOOGLE! </a>
)

const myReactElement = React.createElement(
  'a',
  {
    href: 'https://www.youtube.com',
    target: '_blank'
  },
  ' VISIT YOUTUBE!',
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp />
    {anotherElement}
    {myReactElement}
  </StrictMode>,
)
