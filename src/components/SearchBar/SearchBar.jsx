import style from './searchBar.module.css';
import { useState } from "react";

const SearchBar = () => {

    const dataArray = [
        "Géopolitique",
        "Économie",
        "Souveraineté",
        "Santé",
        "Actualité",
        "Livres",
    ];

    const dataObjects = [
        { theme: "Géopolitique", author: "Idriss Aberkane"},
        { theme: "Géopolitique", author: "Thyerry Meyssan"},
        { theme: "Géopolitique", author: "Pierre Hillard"},
        { theme: "Économie", author: "Pierre Chaillot", "Pierre Jovanovic"},
    ];

    const [data, setData] = useState(dataArray);
    const [data2, setData2] = useState(dataObjects);

    function handleChange (event) {
        setValue(event.target.value)
    }

    return (
      <>
      </>
    )

}

export default SearchBar