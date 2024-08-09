import style from './slider.module.css';
import { motion } from "framer-motion";
import CarouselSlider from 'react-carousel-slider';



let data = [
  {
    desc: "1",
    imgSrc: 'Livre1.png'
  },
  {
    desc: "2",
    imgSrc: "./public/img/livres/IdrissA/Livre2.png"
  },
  {
    desc: "3",
    imgSrc: "./public/img/livres/IdrissA/Livre3.png"
  },
  {
    desc: "4",
    imgSrc: "./public/img/livres/IdrissA/Livre2.png"
  },
  {
    desc: "5",
    imgSrc: ""
  }
];

let sliderBoxStyle = {
  height: "550px",
  background: "transparent"
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