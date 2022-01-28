import React from 'react'
import '../src/App.css'
import Minimalsection from './Components/Minimalsection'
import Elementsection from './Components/Elementsection'
import Main from './Components/Screens/Main'
import Darkmode from './Components/Darkmode'
import Themecolor from './Components/Themecolor'
import Userinterface from './Components/Userinterface'
import Price from './Components/Price'
import Purchase from './Components/Purchase'
import Footer from './Components/Footer'
import Settings from './Components/Screens/Settings'


export default function App() {
  return (
    <>
      <Main />
      <Minimalsection />
      <Elementsection />
      <Darkmode />
      <Themecolor />
      <Userinterface />
      <Price />
      <Purchase />
      <Footer />
      <Settings />
    </>
    
  )
}

export function greencolor() {
  const header=document.getElementById("header")
  const spotlight=document.getElementById("spotlight")
  const price=document.getElementById("price")
  const purchase=document.getElementById("purchase")

  header.classList.toggle("green")
  spotlight.classList.toggle("green")
  price.classList.toggle("green")
  purchase.classList.remove("green")
  header.classList.remove("purple")
  spotlight.classList.remove("purple")
  price.classList.remove("purple")
  purchase.classList.remove("purple")
  header.classList.remove("red")
  spotlight.classList.remove("red")
  price.classList.remove("red")
  purchase.classList.remove("red")
  header.classList.remove("cyan")
  spotlight.classList.remove("cyan")
  price.classList.remove("cyan")
  purchase.classList.remove("cyan")
  header.classList.remove("blue")
  spotlight.classList.remove("blue")
  price.classList.remove("blue")
  purchase.classList.remove("blue")
  header.classList.remove("orange")
  spotlight.classList.remove("orange")
  price.classList.remove("orange")
  purchase.classList.remove("orange")
  


  
}
export function purplecolor() {
  const header=document.getElementById("header")
  const spotlight=document.getElementById("spotlight")
  const price=document.getElementById("price")
  const purchase=document.getElementById("purchase")

  header.classList.toggle("purple")
  spotlight.classList.toggle("purple")
  price.classList.toggle("purple")
  purchase.classList.toggle("purple")
  header.classList.remove("green")
  spotlight.classList.remove("green")
  price.classList.remove("green")
  purchase.classList.remove("green")
  header.classList.remove("red")
  spotlight.classList.remove("red")
  price.classList.remove("red")
  purchase.classList.remove("red")
  header.classList.remove("blue")
  spotlight.classList.remove("blue")
  price.classList.remove("blue")
  purchase.classList.remove("blue")
  header.classList.remove("orange")
  spotlight.classList.remove("orange")
  price.classList.remove("orange")
  purchase.classList.remove("orange")
  header.classList.remove("cyan")
  spotlight.classList.remove("cyan")
  price.classList.remove("cyan")
  purchase.classList.remove("cyan")
}
export function redcolor() {
  const header=document.getElementById("header")
  const spotlight=document.getElementById("spotlight")
  const price=document.getElementById("price")
  const purchase=document.getElementById("purchase")

  header.classList.toggle("red")
  spotlight.classList.toggle("red")
  price.classList.toggle("red")
  purchase.classList.toggle("red")
  header.classList.remove("purple")
  spotlight.classList.remove("purple")
  price.classList.remove("purple")
  purchase.classList.remove("purple")
  header.classList.remove("green")
  spotlight.classList.remove("green")
  price.classList.remove("green")
  purchase.classList.remove("green")
  header.classList.remove("blue")
  spotlight.classList.remove("blue")
  price.classList.remove("blue")
  purchase.classList.remove("blue")
  header.classList.remove("orange")
  spotlight.classList.remove("orange")
  price.classList.remove("orange")
  purchase.classList.remove("orange")
  header.classList.remove("cyan")
  spotlight.classList.remove("cyan")
  price.classList.remove("cyan")
  purchase.classList.remove("cyan")
}
export function bluecolor() {
  const header=document.getElementById("header")
  const spotlight=document.getElementById("spotlight")
  const price=document.getElementById("price")
  const purchase=document.getElementById("purchase")

  header.classList.toggle("blue")
  spotlight.classList.toggle("blue")
  price.classList.toggle("blue")
  purchase.classList.toggle("blue")
  header.classList.remove("purple")
  spotlight.classList.remove("purple")
  price.classList.remove("purple")
  purchase.classList.remove("purple")
  header.classList.remove("green")
  spotlight.classList.remove("green")
  price.classList.remove("green")
  purchase.classList.remove("green")
  header.classList.remove("red")
  spotlight.classList.remove("red")
  price.classList.remove("red")
  purchase.classList.remove("red")

  header.classList.remove("orange")
  spotlight.classList.remove("orange")
  price.classList.remove("orange")
  purchase.classList.remove("orange")
  header.classList.remove("cyan")
  spotlight.classList.remove("cyan")
  price.classList.remove("cyan")
  purchase.classList.remove("cyan")
}
export function orangecolor() {
  const header=document.getElementById("header")
  const spotlight=document.getElementById("spotlight")
  const price=document.getElementById("price")
  const purchase=document.getElementById("purchase")

  header.classList.toggle("orange")
  spotlight.classList.toggle("orange")
  price.classList.toggle("orange")
  purchase.classList.toggle("orange")
  header.classList.remove("purple")
  spotlight.classList.remove("purple")
  price.classList.remove("purple")
  purchase.classList.remove("purple")
  header.classList.remove("green")
  spotlight.classList.remove("green")
  price.classList.remove("green")
  purchase.classList.remove("green")
  header.classList.remove("red")
  spotlight.classList.remove("red")
  price.classList.remove("red")
  purchase.classList.remove("red")
  header.classList.remove("blue")
  spotlight.classList.remove("blue")
  price.classList.remove("blue")
  purchase.classList.remove("blue")
  header.classList.remove("cyan")
  spotlight.classList.remove("cyan")
  price.classList.remove("cyan")
  purchase.classList.remove("cyan")
}
export function cyancolor() {
  const header=document.getElementById("header")
  const spotlight=document.getElementById("spotlight")
  const price=document.getElementById("price")
  const purchase=document.getElementById("purchase")

  header.classList.toggle("cyan")
  spotlight.classList.toggle("cyan")
  price.classList.toggle("cyan")
  purchase.classList.toggle("cyan")
  header.classList.remove("purple")
  spotlight.classList.remove("purple")
  price.classList.remove("purple")
  purchase.classList.remove("purple")
  header.classList.remove("green")
  spotlight.classList.remove("green")
  price.classList.remove("green")
  purchase.classList.remove("green")
  header.classList.remove("red")
  spotlight.classList.remove("red")
  price.classList.remove("red")
  purchase.classList.remove("red")
  header.classList.remove("blue")
  spotlight.classList.remove("blue")
  price.classList.remove("blue")
  purchase.classList.remove("blue")
  header.classList.remove("orange")
  spotlight.classList.remove("orange")
  price.classList.remove("orange")
  purchase.classList.remove("orange")
}