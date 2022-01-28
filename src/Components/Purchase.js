import React from 'react';
import styled from 'styled-components'
import rocket from '../assests/home/rocket.png'

export default function Purchase() {
  return (
        <Purchasecontainer id="purchase">
            <Purchasewrapper className='purchasecolor'>
                <Leftcontainer>
                    <Rocket src={rocket} alt="rocket" />
                </Leftcontainer>
                <Rightcontainer>
                    <Tittle>
                        Get started  with minimal Kit today 
                    </Tittle>
                    <Purchasebutton >
                            Purchase Now
                    </Purchasebutton>
                </Rightcontainer>
            </Purchasewrapper>
        </Purchasecontainer>
    )
}
const Purchasecontainer=styled.div`
    padding-top:10%;
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
const Purchasewrapper=styled.div`
    background: linear-gradient(to right, rgb(78, 172, 86), rgb(56, 130, 86));
    border-radius: 25px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 5%;
    width: 90%;
    margin: 0 auto;
    max-width: 1280px;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){
        flex-wrap: wrap;
    }
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Leftcontainer=styled.div`
    width:40%;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){
        width:80%;
        margin: 0 auto;
    }
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Rocket=styled.img``
const Rightcontainer=styled.div`
    width: 47%;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){
        width: 80%;
    }
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Tittle=styled.h3`
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 10%;
    color: rgb(255, 255, 255);
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){
        font-size: 34px;
    }
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){
        font-size: 25px;
    }
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Purchasebutton=styled.button`
    background: #fff;
    padding: 16px 36px;
    font-size: 15px;
    border-radius: 7px;
    font-weight: 700;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){
        padding: 12px 22px;
    }
    @media all and (max-width: 360px){
        width: 80%;
    }
    @media all and (max-width: 320px){}`
    