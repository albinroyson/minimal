import React from 'react';
import styled from 'styled-components'
import close from '../../assests/close.svg'
import Settingsimages from '../../assests/cogs-solid.svg'
import {greencolor} from "../../App"
import {purplecolor} from "../../App"
import {cyancolor}from "../../App"
import {bluecolor} from "../../App"
import {redcolor} from "../../App"
import {orangecolor} from "../../App"


export default function Settings() {
  return (
        <>
            <Settingsimage id="menu" src={Settingsimages} onClick={clicked} />
            <Settingscontainer id="home" >
                    <SettingsWrapper>
                        <Head>
                            <Name>Settings</Name>
                            <Close id='remove' onClick={removed} src={close} />
                        </Head>
                        <Directioncontaner>
                            <Name>Direction</Name>
                            <Maindiv>
                                <Fristdiv>
                                    <One></One>
                                    <Two></Two>
                                </Fristdiv>
                                <Secondtdiv>
                                    <One></One>
                                    <Two></Two>
                                </Secondtdiv>
                            </Maindiv>
                            <Colors>
                                <Tag>Colors</Tag>
                            </Colors>
                            <Colorlist>
                                <Item>
                                    <Colormode onClick={greencolor} className='greenicon'></Colormode>
                                </Item>
                                <Item>
                                    <Colormode onClick={purplecolor} className='purpleicon'></Colormode>
                                </Item>
                                <Item>
                                    <Colormode onClick={cyancolor}className='cyanicon'></Colormode>
                                </Item>
                                <Item>
                                    <Colormode onClick={bluecolor} className='blueicon'></Colormode>
                                </Item>
                                <Item>
                                    <Colormode onClick={redcolor} className='redicon'></Colormode>
                                </Item>
                                <Item>
                                    <Colormode onClick={orangecolor} className='orangeicon'></Colormode>
                                </Item>
                            </Colorlist>
                        </Directioncontaner>
                    </SettingsWrapper>
            </Settingscontainer>
        </>
    )
}
const Settingscontainer=styled.div`
    width:20%;
    position:fixed;
    right:-300px;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){} @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const SettingsWrapper=styled.div`   
    width:90%;
    margin:0 auto;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){} 
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Head=styled.div`
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid #000;
    padding-bottom: 18px;
    border-bottom: 1px solid #000;
    align-items: center;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Name=styled.h3`
    font-size:20px;
    font-weight:700;
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
const Close=styled.img`
    width:10%;
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
const Directioncontaner=styled.div`
    margin-top:20px;
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
const Maindiv=styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top:20px;
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
const Fristdiv=styled.div`
    width: 100px;
    height: 100px;
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px, rgb(0 0 0 / 19%) 0px 6px 20px 0px;
    border-radius: 10px;
    cursor: pointer;
    padding: 5%;
    margin-right:10px;
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
const Secondtdiv=styled.div`
    width: 100px;
    height: 100px;
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px, rgb(0 0 0 / 19%) 0px 6px 20px 0px;
    border-radius: 10px;
    cursor: pointer;
    padding: 5%;
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
const One=styled.div`
    width: 100%;
    height: 25%;
    background: rgb(185, 193, 201);
    margin-left: 0px;
    margin-right: auto;
    border-radius: 5px;
    margin-bottom: 15%;
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
const Two=styled.div`
    width: 75%;
    height: 25%;
    background: rgb(185, 193, 201);
    margin-left: 0px;
    margin-right: auto;
    border-radius: 5px;
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
const Colors=styled.div``
const Tag=styled.h3`
    font-size:20px;
    font-weight:700;
    margin-top: 20px;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Colorlist=styled.ul`
    margin-top: 20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    width:100%;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Item=styled.li`
    width: 50px;
    height: 65px;
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px, rgb(0 0 0 / 19%) 0px 6px 20px 0px;
    border-radius: 10px;
    cursor: pointer;
    padding: 5%;
    margin-bottom: 10%;
    display: flex;
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
const Colormode=styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: auto;
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
const Settingsimage=styled.img`
    position: fixed;
    width: 100px;
    top: 50%;
    right: 0px;
    padding: 9px;
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
 let menu = document.getElementById("menu")
 let home = document.getElementById("home")
 let remove = document.getElementById("remove")
// menu.onClick =()=>{
//     home.classList.toggle("active")
// }
function clicked(params) {
    let menu = document.getElementById("menu")
    let home = document.getElementById("home")
    let remove = document.getElementById("remove")
    home.classList.toggle("active")
}

function removed() {
    console.log("jj")
    let menu = document.getElementById("menu")
    let home = document.getElementById("home")
    let remove = document.getElementById("remove")
    remove.classList.toggle("active")
    home.classList.toggle("active")
}