import React from 'react';
import styled from 'styled-components';
import imageone from '../assests/home/screen_light_1.png'
import imagetwo from '../assests/home/screen_light_2.png'
import imagethree from '../assests/home/screen_light_3.png'
export default function Elementsection() {
  return (
        <Elementcontainer>
            <Sectionwrapper>
                <Leftcontainer>
                    <Elementtitle>
                            INTERFACE STARTER KIT
                    </Elementtitle>
                    <Elementhead>
                            Huge pack of elements
                    </Elementhead>
                        <Elementdiscription>
                                We collected most popular elements.Menu,slider,
                                buttons,inputs etc are all here.just dive <br />
                                in
                        </Elementdiscription>
                        <Elementbutton>View All Components</Elementbutton>
                </Leftcontainer>
                <Rightcontainer>
                    <Imagelist>
                        <Imageitem className='one'>
                                <Elementimage src={imageone}/>
                        </Imageitem>
                        <Imageitem className='two'>
                                <Elementimage src={imagetwo}/>
                        </Imageitem>
                        <Imageitem className='three'>
                                <Elementimage src={imagethree}/>
                        </Imageitem>
                    </Imagelist>
                    
                </Rightcontainer>
            </Sectionwrapper>
        </Elementcontainer>
    )
}
const Elementcontainer=styled.div`
        padding: 15% 0px 30%;
    background: linear-gradient(rgb(255, 255, 255), rgb(224, 227, 232));
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
        padding: 18% 0px 18%;
    }
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Sectionwrapper=styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1280px;
    display:flex;
    justify-content:space-between;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){
        flex-wrap: wrap-reverse;
    }
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Leftcontainer=styled.div`
        width: 35%;
        @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){
        width: 47%;
    }
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){
        width: 80%;
    }
    @media all and (max-width: 640px){
        width: 100%;
    }
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){
        margin-top: 96px;
    }
    @media all and (max-width: 320px){}`
const Rightcontainer=styled.div`
        width: 55%;
        &:hover{
        transform: scale(1.1);
    }
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){
        width: 76%;
    }
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){
        width: 80%;
        padding-bottom: 78%;
        margin: 0 auto;
    }
    @media all and (max-width: 640px){
        width: 100%;
    }
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){
        width: 100%;
    }
    @media all and (max-width: 320px){}`
const Elementtitle=styled.span`
    font-size: 20px;
    color: rgb(133, 136, 139);
    font-weight: 700;
    margin-bottom: 2%;
    display:block;
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
const Elementhead=styled.h3`
    font-size: 44px;
    font-weight: 800;
    margin-top: 18px;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
        font-size: 35px;
    }
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Elementdiscription=styled.p`  
    color: rgb(195, 195, 195);
    font-size: 18px;
    font-weight: 700;
    margin-top: 8%;
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
const Elementbutton=styled.button`
    margin-top:8%;   
    border: 1px solid #999;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 5px;
    font-weight: 700;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){
        padding: 16px 20px;
    }
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
`
const Elementimage=styled.img``
const Imagelist=styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){    
    }
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Imageitem=styled.li`
    width: 43%;
    box-shadow: rgb(0 0 0 / 20%) -20px -10px 20px 20px inset, rgb(0 0 0 / 19%) -5px -3px 20px 11px;
    transform: skewY(10deg);
    position: absolute;
    border-radius: 15px;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        width: 30%;
    }
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){
        width: 50%;
    }
    @media all and (max-width: 320px){}`