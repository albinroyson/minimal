import React from 'react'
import styled from 'styled-components'
import Logo from '../../../src/assests/brand/logo_single.svg';
import ham from '../../assests/ham.svg'
import close from '../../assests/close.svg'                                 
export default function Header()  
{
    return (
        <>
            <Headercontainer id="header">
                <Wrapper>
                    <Logocontainer>
                        <Head><Fristlogoimage src={Logo}></Fristlogoimage></Head>
                            <Version>V.2.6.0</Version>
                    </Logocontainer>
                    <Navcontanier>
                            <Navlist>
                                <Navlistitem>
                                    <Link>Home</Link>
                                </Navlistitem>
                                <Navlistitem>
                                    <Link>Components</Link>
                                </Navlistitem>
                                <Navlistitem>
                                    <Link>Pages</Link>
                                </Navlistitem>
                                <Navlistitem>
                                    <Link>Documetation</Link>
                                </Navlistitem>
                                <Navlistitem>
                                    <Button className='purchasenow'>Purchase now</Button>
                                </Navlistitem>
                            </Navlist>
                            <Hamber img src={ham}  id="Ham" onClick={click}/>
                    </Navcontanier>
                </Wrapper>
            </Headercontainer>
            <Hambergercontainer id="act">
                <Hambergerwrapper>
                    <Heading>
                        <Name>Settings</Name>
                        <Close src={close} onClick={removed}/>
                    </Heading>
                    <Hamlist>
                        <Hamitems>
                            Home
                        </Hamitems>
                        <Hamitems>
                            Components
                        </Hamitems>
                        <Hamitems>
                            Pages
                        </Hamitems>
                        <Hamitems>
                            Documents
                        </Hamitems>
                    </Hamlist>
                </Hambergerwrapper>
            </Hambergercontainer>
        </>
    )
}
const Hambergercontainer=styled.div`
    width:20%;
    height: 100vh;
    background:#fff;
    position:fixed;
    right:-500px;
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
const Hambergerwrapper=styled.div`
    width:80%;
    margin:0 auto;
    padding:50% 0;`
    const Heading=styled.div`
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
    @media all and (max-width: 320px){}`
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
const Hamlist=styled.ul`
    padding:50% 0;
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
const Hamitems=styled.li`   
    margin:10% auto;
    text-align:center;
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
const Hamber=styled.img`
    width:10%;
    color:#fff; 
    display: none;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){
        display:block;
        margin-left: auto;
    }
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){
        width: 19%;
    }
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Headercontainer= styled.div`
    padding-top: 36px;
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
const Wrapper= styled.section`
    width:90%;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
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
const Version=styled.h1`
    margin-left:10px;
    font-size: 10px;
    color: #0e4da5;
    background: #1b324b;
    padding: 6px 10px;
    border-radius: 8px;
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
const Logocontainer= styled.div`
    display:flex;
    align-items: center;
    width: 40%;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){
        width: 72%;
    }
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){
        width: 100%;
    }
    @media all and (max-width: 320px){}`
const Head= styled.h1`
    width: 10%;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){
        width: 16%;
    }
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Fristlogoimage= styled.img``
const Navcontanier= styled.div`
    width:55%;
    margin-right:27px;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){
        width: 91%;
        margin-right: 0px;  
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Navlist= styled.ul`
    display:flex;
    align-items:center;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){
            display: none;
    }
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Navlistitem= styled.li`
    margin-right:40px;
    &:last-child{
        margin-right: 0;
        width: 80%;
    }
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
const Link= styled.a`
    display:block;
    font-size:15px;
    font-weight:600;
    color:#fff;
    &:hover{
        color:#53ac56 ;
    }
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
const Button=styled.button`
    display:block;
    width:70%;
    padding:10px;
    border:none;
    background:#53ac56;
    color:#fff;
    border-radius:10px;
    font-size:15px;
    font-weight:600;
    &:hover{
        background:#fff;
        color:#53ac56 ;
    }
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
function click(params) {
    let ham = document.getElementById("Ham")
    let act = document.getElementById("act")
    console.log("hiii");
    act.classList.toggle("hamactive")
}
function removed(params) {
    let ham = document.getElementById("Ham")
    let act = document.getElementById("act")
    console.log("hiii");
    act.classList.toggle("hamactive") 
}