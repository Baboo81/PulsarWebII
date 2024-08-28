import style from './searchBar.module.css';
import { useState } from "react";

const SearchBar = () => {

    const dataObjects = [
        { theme: "geopolitique", author: "Idriss Aberkane"},
        { theme: "geopolitique", author: "Thyerry Meyssan"},
        { theme: "geopolitique", author: "Pierre Hillard"},
        { theme: "economie", author: "Pierre Chaillot", "Pierre Jovanovic"},
    ];

    const [value, setValue] = useState("");

    function handleChange (event) {
        setValue(event.target.value)
    }

    return (
        <div className={style.searchBar}>
            <div className={style.inputSearch}>
                <input type="text" value={value} onChange={handleChange} />
                <button>
                    <span className="material-symbols-outlined">
                        Search
                    </span>
                </button>
            </div>
            <ul>
                {value && 
                    data.filter((element) => element.includes(value))
                        .map((element, index) => <li onClick={() => setValue(element)} key={index}> {element} </li>)
                }
            </ul>
        </div>
    )

}

export default SearchBar