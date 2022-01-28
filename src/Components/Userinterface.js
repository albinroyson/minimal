import React from 'react';
import styled from 'styled-components';
import clean1 from '../assests/home/clean-1.png'
import clean2 from '../assests/home/clean-2.png'
import clean3 from '../assests/home/clean-3.png'
import clean4 from '../assests/home/clean-4.png'
import clean5 from '../assests/home/clean-5.png'
import clean6 from '../assests/home/clean-6.png'
import clean7 from '../assests/home/clean-7.png'
import clean8 from '../assests/home/clean-8.png'
import clean9 from '../assests/home/clean-9.png'
import clean10 from '../assests/home/clean-10.png'
export default function Userinterface() {
  return (
        <Usercontainer>
            <Userwapper>
                <Usetop>
                    <Usertitle>
                        CLEAN & CLEAR
                    </Usertitle>
                    <Userhead>
                        Beautiful, modern and clean use interfaces
                    </Userhead>
                </Usetop>
                <Usebottom>
                    <Imagecontainer>
                        <Useimage src={clean1} />
                    </Imagecontainer>
                    <Imagecontainer>
                        <Useimage src={clean2}/>
                    </Imagecontainer>
                    <Imagecontainer>
                        <Useimage src={clean3}/>
                    </Imagecontainer>
                    <Imagecontainer>
                        <Useimage src={clean4}/>
                    </Imagecontainer>
                    <Imagecontainer>
                        <Useimage src={clean5}/>
                    </Imagecontainer>
                    <Imagecontainer>
                        <Useimage src={clean6}/>
                    </Imagecontainer>
                    <Imagecontainer>
                        <Useimage src={clean7}/>
                    </Imagecontainer>
                    <Imagecontainer>
                        <Useimage src={clean8}/>
                    </Imagecontainer>
                    <Imagecontainer>
                        <Useimage src={clean9}/>
                    </Imagecontainer>
                    <Imagecontainer>
                        <Useimage src={clean10}/>
                    </Imagecontainer>
                </Usebottom>  
            </Userwapper>
        </Usercontainer>
    );
}
const Usercontainer=styled.section`
    padding-top: 85px;`
const Userwapper=styled.section`
    width: 90%;
    margin: 0 auto;
    max-width: 1280px;
    position:relative;
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
const Usetop=styled.div`
    position:absolute;
    top: 12px;
    z-index:2;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){
    position: absolute;
    top: -107px;
    z-index: 2;
    }
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Usebottom=styled.div`
    position:relative;
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
const Imagecontainer=styled.div``
const Useimage=styled.img`
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
const Usertitle=styled.span`
    font-size: 20px;
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
const Userhead=styled.h3`
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 8%;
    width: 68%;;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){    
        font-size: 40px;}
    @media all and (max-width: 768px){
        width: 89%;
    }
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){
        width: 100%;
    }
    @media all and (max-width: 480px){
        font-size: 30px;
    }
    @media all and (max-width: 360px){
        font-size: 27px;
    }
    @media all and (max-width: 320px){}`