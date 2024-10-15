import "react-responsive-carousel/lib/styles/carousel.min.css"
import style from './slider2.module.css';
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
import LivreFouché1 from './Souveraineté/FouchéL/LivreFouché1.png';
import LivreFouché2 from './Souveraineté/FouchéL/LivreFouché2.png';
import LivreFouché3 from './Souveraineté/FouchéL/LivreFouché3.png';


const Slider2 = () => {
    
    const data = [
        //Géopolitique
        //Aberkane.I
        {
            id: 1, 
            img: `${LivreAberkane1}`,
            theme: "Neuroscience",
            parution: `2018`,
        },
        {
            id: 2, 
            img: `${LivreAberkane2}`,
            theme: "Écologie",
            parution: `2019`,
        },
        {
            id: 3, 
            img: `${LivreAberkane3}`,
            theme: "Intelligence Artificielle",
            parution: `2023`,
        },
        //Hillard.P
        {
            id: 4, 
            img: `${LivreHillard1}`,
            theme: "Géopolitique",
            parution: `2020`,
        },
        {
            id: 5, 
            img: `${LivreHillard2}`,
            theme: "Géopolitique",
            parution: `2019`,
        },
        {
            id: 6, 
            img: `${LivreHillard3}`,
            theme: "Géopolitique",
            parution: `2022`,
        },
        {
            id: 7, 
            img: `${LivreHillard4}`,
            theme: "Géopolitique",
            parution: `2023`,
        },
        {
            id: 8, 
            img: `${LivreHillard5}`,
            theme: "Géopolitique",
            parution: `2021`,
        },
        {
            id: 9, 
            img: `${LivreHillard6}`,
            theme: "Géopolitique",
            parution: `2020`,
        },
        {
            id: 10, 
            img: `${LivreHillard7}`,
            theme: "Géopolitique",
            parution: `2010`,
        },
        //Meyssan.T
        {
            id: 11, 
            img: `${LivreMeyssan1}`,
            theme: "Géopolitique",
            parution: `2017`,
        },
        {
            id: 12, 
            img: `${LivreMeyssan2}`,
            theme: "Géopolitique",
            parution: `2007`,
        },
        {
            id: 13, 
            img: `${LivreMeyssan3}`,
            theme: "Géopolitique",
            parution: `2002`,
        },
        {
            id: 14, 
            img: `${LivreMeyssan4}`,
            theme: "Géopolitique",
            parution: `2002`,
        },
        //Hindi.Y
        {
            id: 15,
            img: `${LivreHindi1}`,
            theme:"Géopolitique & religions",
            parution: `2021`,
        },
        {
            id: 16,
            img: `${LivreHindi2}`,
            theme:"Géopolitique & religions",
            parution: `2016`,
        },
        {
            id: 17,
            img: `${LivreHindi3}`,
            theme:"Géopolitique & religions",
            parution: `2020`,
        },
        {
            id: 18,
            img: `${LivreHindi4}`,
            theme:"Géopolitique & religions",
            parution: `2017`,
        },
        //Économie:
        //Chaillot.P
        {
            id: 19,
            img: `${LivreChaillot1}`,
            theme:"Économie",
            parution: `2023`,
        },
        //Jovanovic.P
        {
            id: 20,
            img: `${LivreJovanovic1}`,
            theme:"Économie, géopolitique & religion",
            parution: `2014`,
        },
        {
            id: 21,
            img: `${LivreJovanovic2}`,
            theme:"Économie, géopolitique & religion",
            parution: `2009`,
        },
        {
            id: 22,
            img: `${LivreJovanovic3}`,
            theme:"Économie, géopolitique & religion",
            parution: `2024`,
        },
        {
            id: 23,
            img: `${LivreJovanovic4}`,
            theme:"Enquête sur les anges",
            parution: `2001`,
        },
        //Santé:
        //Krusi.E
        {
            id: 24,
            img: `${LivreKrusi1}`,
            theme:"La naissance",
            parution: `2022`,
        },
        //Grosjean.N
        {
            id: 25,
            img: `${LivreGrosjean1}`,
            theme:"Alimention crue",
            parution: `2019`,
        },
        {
            id: 26,
            img: `${LivreGrosjean2}`,
            theme:"Aromathérapie",
            parution: `2021`,
        },
        {
            id: 27,
            img: `${LivreGrosjean3}`,
            theme:"Alimention crue",
            parution: `2023`,
        },
        {
            id: 28,
            img: `${LivreGrosjean4}`,
            theme:"Santé",
            parution: `2018`,
        },
        //Crèvecoeur.J-J
        {
            id: 29,
            img: `${LivreCrevecoeur1}`,
            theme:"Communication",
            parution: `2000`,
        },
        {
            id: 30,
            img: `${LivreCrevecoeur2}`,
            theme:"Santé",
            parution: `2016`,
        },
        //Marie-Sophie.L
        {
            id: 31,
            img: `${LivreMarieSophie1}`,
            theme:"L'alimention crue",
            parution: `2015`,
        },
        {
            id: 32,
            img: `${LivreMarieSophie2}`,
            theme:"L'alimentation crue",
            parution: `2018`,
        },
        //Thierry.C
        {
            id: 33,
            img: `${LivreCasasnovas1}`,
            theme:"Santé",
            parution: `2025`,
        },
        //Actualité:
        //Salim.L
        {
            id: 34,
            img: `${LivreLaïbi1}`,
            theme:"Analyse du monde occidental",
            parution: `2022`,
        },
        {
            id: 35,
            img: `${LivreLaïbi2}`,
            theme:"Analyse du monde occidental",
            parution: `2012`,
        },
        {
            id: 36,
            img: `${LivreLaïbi3}`,
            theme:"Santé",
            parution: `2014`,
        },
        {
            id: 37,
            img: `${LivreLaïbi4}`,
            theme:"Analyse du monde occidental",
            parution: `2024`,
        },
        //Jean-Dominique.M
        {
            id: 38,
            img: `${LivreMichel1}`,
            theme:"Analyse de la crise du Covid 19",
            parution: `2024`,
        },
        {
            id: 39,
            img: `${LivreMichel2}`,
            theme:"Analyse de la crise du Covid 19",
            parution: `2020`,
        },
        //Pierre.B
        {
            id: 40,
            img: `${LivreBarnerias1}`,
            theme:"Analyse de la crise du Covid 19",
            parution: `2024`,
        },
        //Souveraineté:
        //Louis.F
        {
            id: 41,
            img: `${LivreFouché1}`,
            theme:"Philosophie, souveraineté",
            parution: `2023`,
        },
        {
            id: 42,
            img: `${LivreFouché2}`,
            theme:"Souveraineté",
            parution: `2021`,
        },
        {
            id: 43,
            img: `${LivreFouché3}`,
            theme:"Analyse du système de santé & souveraineté",
            parution: `2022`,
        },
        //Juan.B


    ]
    return (
      
            <div className="container">
                <div className="row">
                    <div className="col-md-12 justify-content-center">
                        <div className="">
                            <Carousel
                                thumbWidth={120}
                                showStatus={false}
                            >
                                {data.map (slide => 
                               
                                     <div key={slide.id} >
                                        <img src={slide.img} alt="" />
                                        <div className={style.overlay}>
                                            <h2 className={style.overlay_title}>{slide.theme}</h2>
                                            <p className={style.overlay_text}>{slide.parution}</p>
                                        </div>
                                    </div>
                                   
                                )}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            

    )
}

export default Slider2