import style from './cards.module.css';
import { motion } from "framer-motion";

const Cards = (title, imgUrl, body) => { 


    return (
        <div className='card-container'>
          <div className='image-container'>
            <img src={imgUrl} alt="" />
          </div>
          <div className='card-title'>
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <p>{body}</p>
          </div>
          <div className="btn">
            <button>
                <a>
                    View more
                </a>
            </button>
          </div>
        </div>
    )

 }

export default Cards