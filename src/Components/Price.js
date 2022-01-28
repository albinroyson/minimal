import React from 'react';
import styled from 'styled-components'
import tick from '../assests/check.svg'
import figma from '../assests/home/ic_figma.svg'
import  js from '../assests/home/ic_js.svg'
import  react from '../assests/home/ic_react.svg';
import  ts from '../assests/home/ic_ts.svg';
import arrow from '../assests/rightarrow.svg'

export default function Price() {
  return (
    <Pricecontainer id="price">
        <Pricewrapper>
            <Pricetop>
                <Pricetitle>
                    PRICING PLANS
                </Pricetitle>
                <Pricehead>
                    The right plan for your business
                </Pricehead>
                <Pricediscription>
                    Choose the perfect plan for your needs.always flexible to grow 
                </Pricediscription>
            </Pricetop>
            <Pricemiddle>
                <Pricelist>
                    <Priceitem>
                        <ListTitle>
                            LICENCE
                        </ListTitle>
                        <Listhead>
                            Standard
                        </Listhead>
                        <Listicons>
                            <Listicon>
                                <Icon src={js} alt=""></Icon>
                            </Listicon>
                        </Listicons>
                        <Featurelist>
                            <Featureitems>
                                <Featureitem>
                                    <Tick src={tick} alt=" tick" /> 
                                    <Feature>typeScript version</Feature>
                                </Featureitem>
                                <Featureitem>
                                    <Tick src={tick} alt=" tick" /> 
                                    <Feature>One end produts</Feature>
                                </Featureitem>
                                <Featureitem>
                                    <Tick src={tick} alt=" " />
                                    <Feature>12 months updates</Feature>
                                </Featureitem>
                                 <Featureitem>
                                    <Tick src={tick} alt=" " />
                                    <Feature>6 months of support</Feature>
                                </Featureitem>
                                <hr />
                                <Featureitem > 
                                    <Untick  src={tick} alt=" " />
                                    <Feature className="untick">typeScript version</Feature>
                                </Featureitem>
                                <Featureitem >
                                    <Untick  src={tick} alt=" " />
                                    <Feature className="untick">javaSript version</Feature>
                                </Featureitem>
                                <Featureitem >
                                    <Untick  src={tick} alt=" " />
                                    <Feature className="untick"> typeScript version</Feature>
                                </Featureitem>
                                <Featureitem >
                                    <Untick src={tick} alt=" " />
                                    <Feature className="untick">Design Resources</Feature>
                                </Featureitem>
                                <Featureitem >
                                    <Untick  src={tick} alt=" " />
                                    <Feature className="untick">Commercial Applictiaons</Feature>
                                </Featureitem>
                            </Featureitems>
                        </Featurelist>
                        <Morelink>
                            <Link>Learn more</Link>
                            <Arrow src={arrow}></Arrow>
                        </Morelink>
                        <Pricebutton className='plan'>Choose Plan</Pricebutton>
                    </Priceitem>
                    <Priceitem>
                        <ListTitle>
                            LICENCE
                        </ListTitle>
                        <Listhead>
                            Standard
                        </Listhead>
                        <Listicons>
                            <Listicon>
                                <Icon src={js} alt=""></Icon>
                            </Listicon>
                            <Listicon>
                                <Icon src={figma} alt=""></Icon>
                            </Listicon>
                            <Listicon>
                                <Icon src={react} alt=""></Icon>
                            </Listicon>
                            <Listicon>
                                <Icon src={ts} alt=""></Icon>
                            </Listicon>
                        </Listicons>
                    <Featurelist>
                        <Featureitems>
                            <Featureitem>
                                <Tick src={tick} alt=" " /> 
                                <Feature>typeScript version</Feature>
                            </Featureitem>
                            <Featureitem>
                                <Tick src={tick} alt=" " /> 
                                <Feature>One end produts</Feature>
                            </Featureitem>
                            <Featureitem>
                                <Tick src={tick} alt=" " />
                                <Feature>12 months updates</Feature>
                            </Featureitem>
                            <Featureitem>
                                <Tick src={tick} alt=" " />
                                <Feature>6 months of support</Feature>
                            </Featureitem>
                            <hr />
                            <Featureitem> 
                                <Tick src={tick} alt=" " />
                                <Feature>typeScript version</Feature>
                            </Featureitem>
                            <Featureitem>
                                <Tick src={tick} alt=" " />
                                <Feature>javaSript version</Feature>
                            </Featureitem>
                            <Featureitem>
                                <Tick src={tick} alt=" " />
                                <Feature>typeScript version</Feature>
                            </Featureitem>
                            <Featureitem>
                                <Tick src={tick} alt=" " />
                                <Feature>Design Resources</Feature>
                            </Featureitem>
                            <Featureitem>
                                <Untick  src={tick} alt=" " />
                                <Feature className="untick">Commercial Applictiaons</Feature>
                            </Featureitem>
                        </Featureitems>
                    </Featurelist>
                    <Morelink>
                        <Link>Learn more</Link>
                        <Arrow src={arrow}></Arrow>
                    </Morelink>
                    <Pricebutton className='plan'>Choose Plan</Pricebutton>
                    </Priceitem>
                    <Priceitem>
                        <ListTitle>
                            LICENCE
                        </ListTitle>
                        <Listhead>
                            Standard
                        </Listhead>
                        <Listicons>
                            <Listicon>
                                <Icon src={js} alt=""></Icon>
                            </Listicon>
                            <Listicon>
                                <Icon src={figma} alt=""></Icon>
                            </Listicon>
                            <Listicon>
                                <Icon src={react} alt=""></Icon>
                            </Listicon>
                            <Listicon>
                                <Icon src={ts} alt=""></Icon>
                            </Listicon>
                        </Listicons>
                    <Featurelist>
                        <Featureitems>
                            <Featureitem>
                                <Tick src={tick} alt=" " />
                                <Feature>typeScript version</Feature>
                            </Featureitem>
                            <Featureitem>
                                <Tick src={tick} alt=" " />
                                <Feature>One end produts</Feature>
                            </Featureitem>
                            <Featureitem>
                                <Tick src={tick} alt=" " />
                                <Feature>12 months updates</Feature>
                            </Featureitem>
                            <Featureitem>
                                <Tick src={tick} alt=" " />
                                <Feature>6 months of support</Feature>
                            </Featureitem>
                            <hr />
                            <Featureitem> 
                                <Tick src={tick} alt=" " />
                                <Feature>typeScript version</Feature>
                            </Featureitem>
                            <Featureitem>
                                <Tick src={tick} alt=" " />
                                <Feature>javaSript version</Feature>
                            </Featureitem>
                            <Featureitem>
                                <Tick src={tick} alt=" " />
                                <Feature>typeScript version</Feature>
                            </Featureitem>
                            <Featureitem>
                                <Tick src={tick} alt=" " />
                                <Feature>Design Resources</Feature>
                            </Featureitem>
                            <Featureitem>
                                <Tick src={tick} alt=" " />
                                <Feature>Commercial Applictiaons</Feature>
                            </Featureitem>
                        </Featureitems>
                    </Featurelist>
                    <Morelink>
                        <Link>Learn more</Link>
                        <Arrow src={arrow} />
                    </Morelink>
                    <Pricebutton className='plan'>Choose Plan</Pricebutton>
                    </Priceitem>
                </Pricelist>
            </Pricemiddle>
            <Pricebottom>
                <Qstnhead>
                    Still have Questions?
                </Qstnhead>
                <Qstndiscription>
                    Please discribe your case to recevie the most accurate advice
                </Qstndiscription>
                <Qstnbutton className='contact'>
                    Contact us 
                </Qstnbutton>
            </Pricebottom>
          </Pricewrapper>
      </Pricecontainer>
  );
}
const Pricecontainer=styled.div`
    margin-top:70%;
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
const Pricewrapper=styled.div`
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
const Pricetop=styled.div`
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
const Pricetitle=styled.span`
    font-size: 20px;
    color: rgb(133, 136, 139);
    font-weight: 700;
    margin-bottom: 2%;
    text-align: center;
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
const Pricehead=styled.h3`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 2%;
    text-align: center;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
        font-size: 30px;
    }
    @media all and (max-width: 540px){

    font-size: 28px;

    }
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Pricediscription=styled.p`
    color: rgb(195, 195, 195);
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 8%;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){
        margin: 26px auto;
    }
    @media all and (max-width: 640px){
        width: 93%;
    }
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){
        font-size: 16px;
    }
    @media all and (max-width: 320px){}`
const Pricemiddle=styled.div``
const Pricelist=styled.ul`
    display:flex;
    justify-content:space-between;
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
    @media all and (max-width: 320px){}
   `

const Priceitem=styled.li`
        width: 30%;
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px, rgb(0 0 0 / 19%) 0px 6px 20px 0px;
    padding: 5% 3%;
    border-radius: 20px;
    &:hover{
        transform: scale(1.1);
    }
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){
        width: 46%;
        &:last-child{
            margin-top:30px;
        }
    }
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
        width: 80%;
        margin: 20px auto;
}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){
        padding: 5% 7%;
       
    }
    @media all and (max-width: 360px){
        width: 100%;
    }
    @media all and (max-width: 320px){}
`
const ListTitle=styled.span`
    display: block;
    color: silver;
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
const Listhead=styled.h3`
    font-size: 26px;
    margin-bottom: 26px;
    @media all and (max-width: 1400px){ }
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Listicons=styled.ul`
        display: flex;
    justify-content: space-between;
    margin-bottom: 10%;
    width: 60%;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
     @media all and (max-width: 768px){}
        @media all and (max-width: 640px){}
     @media all and (max-width: 540px){}
     @media all and (max-width: 480px){

        width: 98%;
     }
        @media all and (max-width: 360px){}
        @media all and (max-width: 320px){}`
const Listicon=styled.li`
        width: 22%;
        @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){
    width: 21%;
    margin-left: 10px;   
    }
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Icon=styled.img`
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
const Featurelist=styled.ul`
    text-align: center;
    margin-bottom: 39px;
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
const Featureitems=styled.li`
    align-items:center;
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
const Featureitem=styled.div`
    display:flex;
    margin:10px 0;
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
const Tick=styled.img`
    width: 6%;
    margin-right:10px; 
    filter: invert(1) sepia(1) saturate(15) hue-rotate(
    60deg );
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
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Untick=styled.img`
    width: 6%;
    margin-right:10px; 
    filter: invert(1) sepia(1) saturate(15) hue-rotate( 
181deg );
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
const Feature=styled.h3`
       font-size: 14px;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){
        font-size: 18px;
    }
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){
        font-size: 15px;
    }
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Morelink=styled.div`
    display:flex;
    width: 50%;
    margin-left:auto;
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
const Link=styled.a`
    display:block;
    text-decoration:underline;
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
const Arrow=styled.img`
    width:8%;
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
const Pricebutton=styled.button`
    padding: 16px 14px;
    width: 95%;
    border: 1px solid rgb(78,172,86);
    margin-top: 26px;
    margin: 11% auto;
    display: block;
    font-size: 21px;
    color: rgb(78,172,86);
    border-radius: 10px;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){
        padding: 10px 14px;
    }
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Pricebottom=styled.div`
    margin-top:10%;
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
const Qstnhead=styled.h3`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 2%;
    text-align: center;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){
    }
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){
        font-size: 29px;
    }
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Qstndiscription=styled.p`
    color: rgb(195, 195, 195);
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2%;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){
        width: 100%;
    }
    @media all and (max-width: 320px){}`
const Qstnbutton=styled.button`
    width: 20%;
    background: rgb(78, 172, 86);
    padding: 15px 25px;
    border-radius: 15px;
    color: rgb(255, 255, 255);
    font-weight: 700;
    text-align: center;
    margin: 0px auto;
    display: block;
    @media all and (max-width: 1400px){}
    @media all and (max-width: 1280px){}
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){
        width: 31%;
    }
    @media all and (max-width: 640px){}
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){
        width: 40%;
    }
    @media all and (max-width: 360px){
        width: 50%;
    }
    @media all and (max-width: 320px){}`