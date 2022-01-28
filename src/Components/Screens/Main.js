import React from 'react';
import styled from 'styled-components'
import Header from './Header';
import Spotlight from './Spotlight';

export default function Main() {
  return (
    <Background>
        <Header />
        <Spotlight />
    </Background>
  )
   
}
const Background=styled.div`
    background: linear-gradient(to right, rgb(22, 28, 36), rgb(67, 74, 82));`
