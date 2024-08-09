import "react-responsive-carousel/lib/styles/carousel.min.css"
import style from './slider.module.css';
import { Carousel } from 'react-responsive-carousel';
import Livre1 from './Livre1.png';

const Slider2 = () => {
    
    const data = [
        {
            id: 1, 
            img: `${Livre1}`,
            title: "Title slider 1",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        {
            id: 2, 
            img: `${Livre1}`,
            title: "Title slider 2",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
        {
            id: 3, 
            img: `${Livre1}`,
            title: "Title slider 3",
            txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum possimus nisi veritatis doloremque aut laboriosam reiciendis, iure ullam cumque est saepe minima sit quisquam voluptatem perspiciatis. Perspiciatis repellat maiores soluta, corrupti atque enim veritatis? Iste iusto reprehenderit nemo similique perferendis. Unde harum reiciendis dolor, neque ipsum facilis officiis aspernatur.`,
        },
    ]
    return (

        <Carousel>
            {data.map (slide => 
                <div key={slide.id}>
                    <img src={slide.img} alt="" />
                </div>
            )}
        </Carousel>

    )
}

export default Slider2