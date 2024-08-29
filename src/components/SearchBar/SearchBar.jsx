import style from './searchBar.module.css';
import { useState } from "react";

const SearchBar = () => {

    const dataArray = [
        "Géopolitique",
        "Économie",
        "Santé",
        "Actualité",
        "Souveraineté",
        "Livres",
    ];

    const dataObjects = [
        { theme: "Géopolitique", author: { firstName: "Idriss", lastName: "Aberkane"}},
        { theme: "Géopolitique", author: { firstName: "Thyerry", lastName: "Meyssan"}},
        { theme: "Géopolitique", author: { firstName: "Pierre", lastName: "Hillard"}},
        { theme: "Économie", author: { firstName: "Pierre", lastName: "Chaillot"}},
        { theme: "Économie", author: { firstName: "Pierre", lastName: "Jovanovic"}},
        { theme: "Santé", author: { firstName: "Ema", lastName: "Krusi"}},
        { theme: "Santé", author: { firstName: "Nelly", lastName: "Grosjean"}},
        { theme: "Santé", author: { firstName: "Jean-Jacques", lastName: "Crèvecoeur"}},
        { theme: "Santé", author: { firstName: "MarieSophie", lastName: "L"}}, 
        { theme: "Santé", author: { firstName: "Thierry", lastName: "Casasnovas"}},
        { theme: "Actualité", author: { firstName: "Alexandre", lastName: "Penasse"}},
        { theme: "Actualité", author: { firstName: "Salim", lastName: "Laïbi"}},
        { theme: "Actualité", author: { firstName: "Jean-Dominique", lastName: "Michel"}},
        { theme: "Actualité", author: { firstName: "Pierre", lastName: "Barnerias"}},
        { theme: "Souveraineté", author: { firstName: "Louis", lastName: "Fouché"}},
        { theme: "Livres", details: {dataArray} },
    ];

    const [data, setData] = useState(dataArray);
    const [data2, setData2] = useState(dataObjects);

    

    return (
      <>
        <div>
            <h1>Data Array</h1>
            {data.map((item, index) => <p key= {index}> {item} </p>)}
        </div>
        <div>
            <h1>Data Objects</h1>
            {data.map((item, index) => <p key= {index}>{item.theme} |  {item.author.firstName} | {item.author.lastName} </p>)}
        </div>
      </>
    )

}

export default SearchBar