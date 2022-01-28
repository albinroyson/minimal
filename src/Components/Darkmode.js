import React from 'react';
import darkimage from '../assests/home/darkmode.png'
import lightimage from '../assests/home/lightmode.png'
import styled from 'styled-components'
import bg from "../assests/home/shape.svg"

export default function Darkmode() {
  return (
      <Darkcontainer>
          <Darkwrapper>
              <Darkleft>
                  <Fristimage>
                    <Lightimage src={lightimage} />
                  </Fristimage>
                  <Secondimage>
                    <Darkimage src={darkimage} />
                  </Secondimage>
                  
              </Darkleft>
              <Darkright>
                <Darktitle>
                        EASY TO SWITCH BETWEEN STYLES.
                  </Darktitle>
                  <Darkhead>
                        DARKMODE
                  </Darkhead>
                    <Darkdiscription>
                        A dark theme that feels easier on the eyes.

                    </Darkdiscription>
                </Darkright>
          </Darkwrapper>
      </Darkcontainer>
  )
}
const Darkcontainer=styled.section`
    padding: 13% 0px;
    background: rgb(26, 32, 39);
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){
        padding: 5% 0;
    }
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Darkwrapper=styled.section`
    width: 90%;
    margin:  auto;
    max-width: 1280px;
    display:flex;
    justify-content:space-between;
    background: url(${bg})no-repeat right ;
    padding: 10% 0;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){
        padding: 23% 0;
    }
    @media all and (max-width: 980px){
        padding: 9% 0;
        flex-wrap:wrap;
    }
    @media all and (max-width: 768px){
        background-size: 57%;
    }
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){
        padding: 2% 0;
    }
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Darkleft=styled.div`
    display:flex;
    justify-content:space-between;
    width:50%;
    position: relative;
    &:hover{
        transform: scale(1.1);
    }
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){
        width: 70%;
        margin: 0 auto;
    }
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){
        width: 91%;
    }
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Fristimage=styled.div`
    position:absolute;
    top:0;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Secondimage=styled.div`
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Lightimage=styled.img`
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Darkimage=styled.img`
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Darkright=styled.div`
    margin-top:10%;
    margin-right: 96px;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){
        margin-right: 3px;
    }
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Darktitle=styled.span`
    display: block;
    font-size: 12px;
    color: rgb(133,136,139);
    font-weight: 700;
    margin-bottom: 7%;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Darkhead=styled.h3`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 7%;
    color: rgb(255, 255, 255);
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Darkdiscription=styled.p`
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8%;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`

