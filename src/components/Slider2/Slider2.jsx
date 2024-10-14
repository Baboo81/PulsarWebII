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
import LivreKrusi1 from './Santé/EmaK/LivreKrusi1.png';
import LivreGrosjean1 from './Santé/NellyG/LivreGrosjean1.png';
import LivreGrosjean2 from './Santé/NellyG/LivreGrosjean2.png';
import LivreGrosjean3 from './Santé/NellyG/LivreGrosjean3.png';
import LivreGrosjean4 from './Santé/NellyG/LivreGrosjean4.png';
import LivreCrevecoeur1 from './Santé/JeanJacquesC/LivreCrevecoeur1.png';
import LivreCrevecoeur2 from './Santé/JeanJacquesC/LivreCrevecoeur2.png';
import LivreMarieSophie1 from './Santé/MarieSophieL/LivreMarieSophie1.png';
import LivreMarieSophie2 from './Santé/MarieSophieL/LivreMarieSophie2.png';
import LivreCasasnovas1 from './Santé/ThierryC/LivreCasasnovas1.png';
import LivreLaïbi1 from './Actualité/SalimL/LivreLaïbi1.png';
import LivreLaïbi2 from './Actualité/SalimL/LivreLaïbi2.png';
import LivreLaïbi3 from './Actualité/SalimL/LivreLaïbi3.png';
import LivreLaïbi4 from './Actualité/SalimL/LivreLaïbi4.png';
import LivreMichel1 from './Actualité/JeanDominiqueM/LivreMichel1.png';
import LivreMichel2 from './Actualité/JeanDominiqueM/LivreMichel2.png';
import LivreBarnerias1 from './Actualité/PierreB/LivreBarnerias1.png';



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
        //Santé:
        //Krusi.E
        {
            id: 24,
            img: `${LivreKrusi1}`,
            title:"Faux départ, se réapproprier la naissance",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        //Grosjean.N
        {
            id: 25,
            img: `${LivreGrosjean1}`,
            title:"Les bienfaits de l'alimentation vivante",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        {
            id: 26,
            img: `${LivreGrosjean2}`,
            title:"Le grand livre de l'aromathérapie",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        {
            id: 27,
            img: `${LivreGrosjean3}`,
            title:"Le grand livre de l'alimentation vivante",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        {
            id: 28,
            img: `${LivreGrosjean4}`,
            title:"Bien se préparer à l'hiver",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        //Crèvecoeur.J-J
        {
            id: 29,
            img: `${LivreCrevecoeur1}`,
            title:"Relations & jeux de pouvoir",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        {
            id: 30,
            img: `${LivreCrevecoeur2}`,
            title:"Prenez soin de vous, n'attendez pas que les autres le fassent",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        //Marie-Sophie.L
        {
            id: 31,
            img: `${LivreMarieSophie1}`,
            title:"L'instant cru",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        {
            id: 32,
            img: `${LivreMarieSophie2}`,
            title:"L'alimentation crue, une réponse aux dérives alimentaires",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        //Thierry.C
        {
            id: 33,
            img: `${LivreCasasnovas1}`,
            title:"La révolution du jeûne sec",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        //Actualité:
        //Salim.L
        {
            id: 34,
            img: `${LivreLaïbi1}`,
            title:"La fin du monde moderne",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        {
            id: 35,
            img: `${LivreLaïbi2}`,
            title:"La faillite du monde moderne",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        {
            id: 36,
            img: `${LivreLaïbi3}`,
            title:"Vitamine C liposomale et cancer",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        {
            id: 37,
            img: `${LivreLaïbi4}`,
            title:"Climate terror",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        //Jean-Dominique.M
        {
            id: 38,
            img: `${LivreMichel1}`,
            title:"La fabrication du désastre",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        {
            id: 39,
            img: `${LivreMichel2}`,
            title:"Covid: anatomie d'une crise sanitaire",
            txt: `Lorem, ipsum dolor sit amet`,
        },
        //Pierre.B
        {
            id: 40,
            img: `${LivreBarnerias1}`,
            title:"La casse du siècle",
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