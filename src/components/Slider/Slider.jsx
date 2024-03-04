import style from './slider.module.css';
import { motion } from "framer-motion";
import CarouselSlider from 'react-carousel-slider';


let data = [
  {
    desc: "1",
    imgSrc: "https://i.imgur.com/d5aiXJP.jpg"
  },
  {
    desc: "2",
    imgSrc: "https://i.imgur.com/pgCzueK.jpg"
  },
  {
    desc: "3",
    imgSrc: "https://i.imgur.com/7nbAJ0C.jpg"
  },
  {
    desc: "4",
    imgSrc: "https://i.imgur.com/L75otV6.jpg"
  },
  {
    desc: "5",
    imgSrc: "https://i.imgur.com/qkPMr9D.jpg"
  }
];

let sliderBoxStyle = {
  height: "550px",
  background: "transparent"
};

let itemsStyle = {
  // ,height: "100%", padding: "0px"
  // , padding: "15px"
  // , background: "#FFCA28"
  // , borderRadius: "4px"
  // , margin: "0px 0px", padding: "0px"
};

let textBoxStyle = {
  // textAlign: "left"
  // ,width:"50%"
  // , background: "transparent"
  // , fontSize: "36px"
  // , fontWeight: 300
};

let buttonSetting = {
  // placeOn: "middle-inside"
  // ,hoverEvent: true,
  // , style: {
  //   left: {
  //     margin: "0px 0px 0px 10px"
  //   },
  //   right: {
  //     margin: "0px 10px 0px 0px"
  //   }
  // }
};

let manner = {
  // autoSliding: {interval: "4s"}
  //, duration: "0.3s"
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