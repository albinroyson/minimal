import React from 'react';
import styled from 'styled-components'
import fristtheme from '../assests/home/theme-color/screen-default.png'
import secondtheme from '../assests/home/theme-color/block1-default.png'
import thirdtheme from '../assests/home/theme-color/block2-default.png'
import forththeme from '../assests/home/theme-color/sidebar-default.png'

export default function Themecolor() {
  return (
        <Themecontainer>
            <Themewrapper>
                <Topcontainer>
                    <Toptitle>
                        CHOOSE YOUR STYLE
                    </Toptitle>
                    <Tophead>
                        theme color
                    </Tophead>
                    <Topdiscription>
                        Express your own style with just one click
                    </Topdiscription>
                </Topcontainer>
                <Bottomcontainer>
                    <Fristimage>
                        <Themeimage src={fristtheme}  alt="img"/>
                    </Fristimage>
                    <Secondimage>
                        <Themeimage src={secondtheme}  alt="img"/>
                    </Secondimage>
                    <Thirdimage>
                        <Themeimage src={thirdtheme}  alt="img"/>
                    </Thirdimage>
                    <Forthimage>
                        <Themeimage src={forththeme}  alt="img"/>
                    </Forthimage>
                    <Colorlist>
                        <Green></Green>
                        <Violet></Violet>
                        <Skyblue></Skyblue>
                        <Blue></Blue>
                        <Yellow></Yellow>
                        <Orange></Orange>
                    </Colorlist>
                </Bottomcontainer>
            </Themewrapper>
        </Themecontainer>
    )
}
const Green=styled.div`
    width: 18px;
    height: 18px;
    background: green;
    border-radius: 51%;
    margin-bottom: 11px;
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
const Violet=styled.div`
    width: 18px;
    height: 18px;
    background: violet;
    border-radius: 51%;
    margin-bottom: 11px;
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
const Skyblue=styled.div`
    width: 18px;
    height: 18px;
    background: skyblue;
    border-radius: 51%;
    margin-bottom: 11px;
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
const Blue=styled.div`
    width: 18px;
    height: 18px;
    background: blue;
    border-radius: 51%;
    margin-bottom: 11px;
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
const Yellow=styled.div`
    width: 18px;
    height: 18px;
    background: yellow;
    border-radius: 51%;
    margin-bottom: 11px;
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
    const Orange=styled.div`
    width: 18px;
    height: 18px;
    background: orange;
    border-radius: 51%;
    margin-bottom: 11px;
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
const Colorlist=styled.ul`
    position: absolute;
    top: 30%;
    right: 3%;
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
const Themecontainer=styled.section`
    padding: 8% 0px;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){
        padding: 4% 0px;
    }
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){
        padding: 9% 0px;
    }
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Themewrapper=styled.section`
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
const Topcontainer=styled.div`
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
const Toptitle=styled.small`
    display:block;
    font-size: 20px;
    color: rgb(133, 136, 139);
    font-weight: 700;
    margin-bottom: 2%;
    text-align: center;
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
const Tophead=styled.h3`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 2%;
    text-align: center;
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
const Topdiscription=styled.p`
        color: rgb(195, 195, 195);
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){
        font-size: 13px;
    }
    @media all and (max-width: 320px){}`
const Bottomcontainer=styled.div`
    position: relative;
    background: url(../asses*ts/home/theme-color/grid.png);
    `
const Themeimage=styled.img`
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
const Fristimage=styled.div`
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
const Thirdimage=styled.div`
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
const Forthimage=styled.div`
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
    @media all and (max-width: 320px){} `

