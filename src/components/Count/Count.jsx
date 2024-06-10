import style from './count.module.css';
import { useState } from 'react';

const Count = () => {

    //Hook useState:
    const [count, setCount] = useState(0)
    

    const increment = () => {
        setCount(count + 1)
    }
    
    return
            <> 
                <div className="count">
                    <p>Compteur : {count}</p>
                    <buttton onClick={increment}>Increment</buttton>
                </div>
            </>


}

export default Count