import React from 'react';
import axios from 'axios';
import {useFruitContext} from "./FruitContext";

const FruitList = () =>{
    const{list: dataBuah, setFruit, setList} = useFruitContext()
       const handleDelete = (event) =>{
        let idBuah = parseInt(event.target.value)
        let newDataBuah = dataBuah.filter(el=> el.id !== idBuah)

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res=>{
            console.log(res)
            if(res.data === "success")
        setList(newDataBuah)
           
        })
        
    }
    const handleEdit = (fruit) => {
        setFruit(fruit)
    }
    return(
        <>       
        <h1>Tabel Harga Buah</h1>
            <table className= "tugas14">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
            <tbody>
        {dataBuah !== null && dataBuah.map((el, index) => {
            return (
                <tr key={index}>
                    <td>{el.name}</td>
                    <td>{el.price}</td>
                    <td>{el.weight}</td>
                    <td>
                        <button className="edit" onClick={() =>handleEdit(el)}>Edit</button>
                        &nbsp;
                        <button className="delete" onClick={handleDelete} value={el.id}>Delete</button>
                      </td>
                </tr>
            )
        })
    }
        </tbody>
    </table>
        </>
    )
}

export default FruitList

