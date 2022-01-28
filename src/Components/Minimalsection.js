import React from 'react';
import styled from 'styled-components'
import ui from '../assests/icons/ic_design.svg'
import develepment from '../assests/icons/ic_code.svg'
import brand from '../assests/brand/logo_single.svg'
export default function Minimalsection() {
  return(
    <Minimalcontainer>
        <Minimalwrapper>
            <Title>Minimal</Title>
            <Minimalhead>What minimal helps you?</Minimalhead>
            <Cardlist>
                <Carditems>
                    <Logocontainer>
                        <Cardlogo src={ui}></Cardlogo>
                    </Logocontainer> 
                    <Cardtitle>UI & UX Design </Cardtitle>
                    <CardDiscription>The set is built on the principls of the atomic design system
                        it helps you to create projects fastests and easily customized packages
                        for your projects 
                    </CardDiscription>
                </Carditems>
                <Carditems>
                    <Logocontainer>
                        <Cardlogo src={develepment}></Cardlogo>
                    </Logocontainer>
                    <Cardtitle>Development</Cardtitle>
                    <CardDiscription>Easy to customize and extend each component.saving you time and 
                        money   
                    </CardDiscription>
                </Carditems>
                <Carditems>
                <Logocontainer>
                    <Cardlogo src={brand}></Cardlogo>
                </Logocontainer>
                    <Cardtitle>Branding </Cardtitle>
                    <CardDiscription>Consistent design in colors,fonts 
                        ...makes brand recoganition easy
                    </CardDiscription>
                </Carditems>
            </Cardlist>
        </Minimalwrapper>
    </Minimalcontainer>
  )
}
const Minimalcontainer=styled.div`
    padding-top:8%;
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
const Minimalwrapper=styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1280px;
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
const Title=styled.small`
    display: block;
    text-align: center;
    font-size: 20px;
    color: rgb(133, 136, 139);
    font-weight: 700;
    text-transform:uppercase;
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
const Minimalhead=styled.h3`
        text-align: center;
        margin-top: 2%;
        font-weight: 700;
        font-size: 40px;
        font-weight: 700;
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
const Cardlist=styled.ul`
    display:flex;
    justify-content:space-between;
    margin-top:10%;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){
        flex-wrap: wrap;
    }
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Carditems=styled.li`
    width:30%;
    border:1px soild #000;
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px, rgb(0 0 0 / 19%) 0px 6px 20px 0px;
    padding: 2% 2% 6%;
    border-radius: 20px;
    &:hover{
        transform: scale(1.1);
    }
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){
        width: 46%;
        &:last-child{
            margin-top:40px;
        }
    }
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
        width: 70%;
        margin: 20px auto;
    }
    @media all and (max-width: 540px){
        width: 80%;
    }
    @media all and (max-width: 480px){
        width: 96%;
    }
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Cardlogo =styled.img`
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
const Cardtitle=styled.span`
    text-align:center;
    display:block;
    text-align: center;
    margin-bottom: 5%;
    font-size: 20px;
    font-weight: 900;
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
const CardDiscription=styled.p`
    text-align: center;
    color: rgb(133, 136, 139);
    font-weight: 700;
    margin-bottom: 2%;
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
const Logocontainer=styled.div`
    width: 50%;
    margin: 0px auto;
    padding: 15%;
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
