import React from 'react';
import styled from 'styled-components';
import logo from '../assests/brand/logo_single.svg'

export default function Footer() {
  return (
      <Footercontainer>
          <Footerwrapper>
              <Minimallogo src={logo} />
              <Footerdiscription>
                  &copy; All rights reserved made by <Color>minimals.cc</Color>
              </Footerdiscription>
          </Footerwrapper>
      </Footercontainer>
  );
}
const Footercontainer =styled.div`
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){
            width: 80%;
            margin:5% auto;
            align-items: center;
    }
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Footerwrapper =styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1280px;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){
        width: 60%;
    }
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Minimallogo =styled.img`
    width:6%;
    margin:0 auto;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){
        width: 12%;
    }
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){
        width: 30%;
    }
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Footerdiscription =styled.p`
    text-align: center;
    width: 80%;
    font-size: 13px;
    margin: 0 auto;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){
        width: 90%;
        font-size: 16px;
        margin-left: 32px;
    }
    @media all and (max-width: 768px){
        margin: 0 auto;
    }
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){
        width: 100%;
    }
    @media all and (max-width: 320px){}
`
const Color=styled.span`
    color:#53ac56;
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