import style from './slider.module.css';
import { motion } from "framer-motion";
import CarouselSlider from 'react-carousel-slider';
import Livre1 from './Geopolitique/IdrissA/Livre1.png';
import Livre2 from './Geopolitique/IdrissA/Livre2.png';
import Livre3 from './Geopolitique/IdrissA/Livre3.png';



let data = [
  {
    desc: "1",
    imgSrc: "./Geopolitique/IdrissA/Livre1.png"
  },
  {
    desc: "2",
    imgSrc: "./Geopolitique/IdrissA/Livre2.png"
  },
  {
    desc: "3",
    imgSrc: "./Geopolitique/IdrissA/Livre3.png"
  },
  {
    desc: "4",
    imgSrc: "./Geopolitique/IdrissA/Livre1.png"
  },
  {
    desc: "5",
    imgSrc: "./Geopolitique/IdrissA/Livre1.png"
  }
];

let sliderBoxStyle = {
  height: "550px",
  background: "transparent",
  border: "solid 5px #bbdefb" 
};

let itemsStyle = {
     height: "100%", padding: "0px"
   , padding: "15px"
   , background: "#050000"
   , borderRadius: "4px"
   , margin: "0px 0px", padding: "0px"
};

let textBoxStyle = {
    textAlign: "left"
    ,width:"50%"
    , background: "transparent"
    , fontSize: "36px"
    , fontWeight: 300
};

let buttonSetting = {
   placeOn: "middle-inside"
   ,hoverEvent: true,
    style: {
              left: {
              margin: "0px 0px 0px 10px"
              },
              right: {
              margin: "0px 10px 0px 0px"
              }
            }
};

let manner = {
   autoSliding: {interval: "4s"}
  , duration: "0.3s"
};

const Slider = () => { 
  

  return (
    <CarouselSlider
      slideItems={data}
      manner={manner}
      buttonSetting={buttonSetting}
      sliderBoxStyle={sliderBoxStyle}
      itemsStyle={itemsStyle}
      textBoxStyle={textBoxStyle}
  />


  )

   

 }

export default Slider