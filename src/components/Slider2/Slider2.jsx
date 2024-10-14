import "react-responsive-carousel/lib/styles/carousel.min.css"
import style from './slider.module.css';
import { Carousel } from 'react-responsive-carousel';
import LivreAberkane1 from './Geopolitique/IdrissA/LivreAberkane1.png';
import LivreAberkane2 from './Geopolitique/IdrissA/LivreAberkane2.png';
import LivreAberkane3 from './Geopolitique/IdrissA/LivreAberkane3.png';
import LivreHillard1 from './Geopolitique/PierreH/LivreHillard1.png';
import LivreHillard2 from './Geopolitique/PierreH/LivreHillard2.png';
import LivreHillard3 from './Geopolitique/PierreH/LivreHillard3.png';
import LivreHillard4 from './Geopolitique/PierreH/LivreHillard4.png';
import LivreHillard5 from './Geopolitique/PierreH/LivreHillard5.png';
import LivreHillard6 from './Geopolitique/PierreH/LivreHillard6.png';
import LivreHillard7 from './Geopolitique/PierreH/LivreHillard7.png';
import LivreMeyssan1 from './Geopolitique/Thierry.M/LivreMeyssan1.png';
import LivreMeyssan2 from './Geopolitique/Thierry.M/LivreMeyssan2.png';
import LivreMeyssan3 from './Geopolitique/Thierry.M/LivreMeyssan3.png';
import LivreMeyssan4 from './Geopolitique/Thierry.M/LivreMeyssan4.png';
import LivreHindi1 from './Geopolitique/YoussefH/LivreHindi1.png';
import LivreHindi2 from './Geopolitique/YoussefH/LivreHindi2.png';
import LivreHindi3 from './Geopolitique/YoussefH/LivreHindi3.png';
import LivreHindi4 from './Geopolitique/YoussefH/LivreHindi4.png';
import LivreChaillot1 from './Economie/PierreC/LivreChaillot1.png';
import LivreJovanovic1 from './Economie/PierreJ/LivreJovanovic1.png';
import LivreJovanovic2 from './Economie/PierreJ/LivreJovanovic2.png';
import LivreJovanovic3 from './Economie/PierreJ/LivreJovanovic3.png';
import LivreJovanovic4 from './Economie/PierreJ/LivreJovanovic4.png';

const Slider2 = () => {
    
    const data = [
        //Géopolitique
        //Aberkane.I
        {
            id: 1, 
            img: `${LivreAberkane1}`,
            title: "Title slider 1",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        {
            id: 2, 
            img: `${LivreAberkane2}`,
            title: "Title slider 2",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        {
            id: 3, 
            img: `${LivreAberkane3}`,
            title: "Title slider 3",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        //Hillard.P
        {
            id: 4, 
            img: `${LivreHillard1}`,
            title: "Title slider 1",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        {
            id: 5, 
            img: `${LivreHillard2}`,
            title: "Title slider 1",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        {
            id: 6, 
            img: `${LivreHillard3}`,
            title: "Title slider 1",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        {
            id: 7, 
            img: `${LivreHillard4}`,
            title: "Title slider 1",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        {
            id: 8, 
            img: `${LivreHillard5}`,
            title: "Title slider 1",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        {
            id: 9, 
            img: `${LivreHillard6}`,
            title: "Title slider 1",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        {
            id: 10, 
            img: `${LivreHillard7}`,
            title: "Title slider 1",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        //Meyssan.T
        {
            id: 11, 
            img: `${LivreMeyssan1}`,
            title: "Title slider 1",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        {
            id: 12, 
            img: `${LivreMeyssan2}`,
            title: "Title slider 1",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        {
            id: 13, 
            img: `${LivreMeyssan3}`,
            title: "Title slider 1",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        {
            id: 14, 
            img: `${LivreMeyssan4}`,
            title: "Title slider 1",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        //Hindi.Y
        {
            id: 15,
            img: `${LivreHindi1}`,
            title:"Covidisme et méssianisme",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        {
            id: 16,
            img: `${LivreHindi2}`,
            title:"Les mythes fondateurs du choc des civilastions",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        {
            id: 17,
            img: `${LivreHindi3}`,
            title:"Occident et Islam",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        {
            id: 18,
            img: `${LivreHindi4}`,
            title:"La mystique de la laïcité",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        //Économie:
        //Chaillot.P
        {
            id: 19,
            img: `${LivreChaillot1}`,
            title:"Covid 19, ce que révèlent les chiffres officiels",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        //Jovanovic.P
        {
            id: 20,
            img: `${LivreJovanovic1}`,
            title:"666",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        {
            id: 21,
            img: `${LivreJovanovic2}`,
            title:"777",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        {
            id: 22,
            img: `${LivreJovanovic3}`,
            title:"888",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        {
            id: 23,
            img: `${LivreJovanovic4}`,
            title:"Enquête sur les Anges gardiens",
            txt: `Lorem, ipsum dolor sit amet`,
        },

    ]
    return (

        <Carousel
            thumbWidth={120}
            showStatus={false}
        >
            {data.map (slide => 
                <div key={slide.id} >
                    <img src={slide.img} alt="" />
                    <div className={style.overlay}>
                        <h2 className={style.overlay_title}>{slide.title}</h2>
                        <p className={style.overlay_text}>{slide.txt}</p>
                    </div>
                </div>
            )}
        </Carousel>

    )
}

export default Slider2