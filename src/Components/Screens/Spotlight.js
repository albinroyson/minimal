import React from 'react'
import styled from 'styled-components'
import figma from '../../assests/home/ic_figma.svg'
import  js from '../../assests/home/ic_js.svg'
import material from '../../assests/home/ic_material.svg';
import  react from '../../assests/home/ic_react.svg';
import  sketch from '../../assests/home/ic_sketch.svg';
import  ts from '../../assests/home/ic_ts.svg';
import dimond from '../../assests/home/ic_sketch_small.svg'



export default function Spotlight() {
    return (
        <Spotlightcontainer id='spotlight'>
            <Spotlightwrapper>
                <Leftcontainer>
                    <Titlecontainer>
                        <Title>Start a <br /> new project<br /> with<Color className='colorchange'>Minimal</Color></Title>
                        <Discription>The starting point for your next project based on easy-to-customize
                            Material-UI &copy; helps you bulid apps faster and better.
                        </Discription>
                    </Titlecontainer>
                    <Previewcontainer>
                        <Iconprevcontainer>
                            <Iconpreview src={dimond}></Iconpreview>    
                        </Iconprevcontainer>
                        <Linkpreview>Preview in Sketch Cloud</Linkpreview>
                    </Previewcontainer>
                    <Livebutton className='live'>
                        <Iconbutton src=""></Iconbutton>
                        <Buttonname>Live Preview</Buttonname>
                    </Livebutton>
                    <Iconlists>
                        <Iconitem>
                            <IconImage src={figma}></IconImage>
                        </Iconitem>
                        <Iconitem>
                            <IconImage src={js}></IconImage>
                        </Iconitem>
                        <Iconitem>
                            <IconImage src={material}></IconImage>
                        </Iconitem>
                        <Iconitem>
                            <IconImage src={react}></IconImage>
                        </Iconitem>
                        <Iconitem>
                            <IconImage src={sketch}></IconImage>
                        </Iconitem>
                        <Iconitem>
                            <IconImage src={ts}></IconImage>
                        </Iconitem> 
                    </Iconlists>  
                </Leftcontainer>
                <Rightcontainer>
                    <Rightimage src={require('../../assests/home/hero.png')} />
                </Rightcontainer>

            </Spotlightwrapper>
        </Spotlightcontainer>
    )
}
const Spotlightcontainer= styled.section`
    padding: 5% 0px;
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
const Spotlightwrapper=styled.section`
    width: 90%;
    margin: 0 auto;
    max-width: 1280px;
    display:flex;
    justify-content:space-between;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){
        flex-wrap: wrap-reverse;
    }
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Titlecontainer=styled.div`
    width:100%;
    margin-top:7%;
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
const Title= styled.h3`
    font-size: 60px;
    color:#fff;
    font-weight:900;
    margin-bottom: 22px;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
        font-size: 50px;
    }
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){
        font-size: 43px;
    }
    @media all and (max-width: 320px){}`
const Discription= styled.p`
    color: rgb(195, 195, 195);
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8%;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
        font-size: 17px;
    }
    @media all and (max-width: 540px){
        font-size: 15px;
    }
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Previewcontainer= styled.div`
    display:flex;
    align-items:center;
    margin: 50px 0;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){
        margin: 26px 0;
    }
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Iconlists= styled.ul`
    display:flex;
    margin-top: 5%;
    width:60%;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){
        width: 100%;}
    @media all and (max-width: 980px){
        width: 60%;
    }
    @media all and (max-width: 768px){
    width: 83%;
    }
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){
        width: 96%;
    }
    @media all and (max-width: 480px){
        flex-wrap: wrap;
    }
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){} `
const Color=styled.span`
    color:#53ac56;
    font-weight:900;
    margin-left:10px;
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
const Iconitem= styled.li`
    width:15%;
    margin-right:10px;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){
        margin-right: 20px;
    }
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){
        width: 21%;
        margin: 10px 10px;
    }
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const IconImage= styled.img`
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
const Iconpreview=styled.img`
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
const Linkpreview=styled.a`
    display:block;
    margin-left:20px;
    color:#fff;
    text-decoration:underline;
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
const Livebutton=styled.button`
    background: rgb(78, 172, 86);
    padding: 15px 25px;
    border-radius: 15px;
    margin-bottom: 8%;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 35%;
    box-shadow: rgb(78 172 86 / 25%) 0px 27px 34px 0px;
   display: block;
   @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){
    width: 42%;
    }
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){
        width: 55%;
    }
    @media all and (max-width: 360px){
        width: 65%;
    }
    @media all and (max-width: 320px){}`
const Iconbutton =styled.img``
const Buttonname=styled.span`
    display:block;
    font-size: 17px;
    font-weight: 800;
    color:#fff;
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
const Iconprevcontainer=styled.div`
    width:4%;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){
        width: 7%;
    }
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){
        width: 10%;
    }
    @media all and (max-width: 320px){}`
const Leftcontainer=styled.div`
    width: 47%;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){
        width: 90%;
    }
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Rightcontainer=styled.div`
    width: 47%;
    opacity: 0.2;
    margin-top:70px;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){
        width: 80%;
        margin: 0 auto;
    }
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){
        width: 100%;
    }
    @media all and (max-width: 320px){}`
const Rightimage=styled.img``

