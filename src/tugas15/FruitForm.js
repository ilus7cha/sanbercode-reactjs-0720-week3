import React from 'react';
import axios from 'axios';
import {useFruitContext} from "./FruitContext";


const FruitForm = () =>{
    const {fruit, setFruit, list, setList} = useFruitContext();
    const handleNama = (event) => setFruit({...fruit, name: event.target.value})
    const handleHarga = (event) => setFruit({...fruit, price: parseInt (event.target.value)})
    const handleBerat = (event) => setFruit({...fruit, weight: parseInt (event.target.value)})
        const handleSubmit = (event) => {
                event.preventDefault()

                if (fruit.name.replace(/\s/g, '')) {
                    if(fruit.id){
                            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${fruit.id}`, fruit)
                            .then(res => {
                             console.info("respon api edit", res)
                             setList(
                                 list.map(el =>el.id === fruit.id ? fruit: el)
                             )
                            })
                    }else{
                        axios.post(`http://backendexample.sanbercloud.com/api/fruits`, fruit)
                            .then(res => {
                               console.info("respon api", res)
                               setList([
                                   ...list,
                                   fruit,
                               ])
                            })
                    }
                }
        }
    return(
        <>
                    <h2>Form Data Buah</h2>
            <form onSubmit= {handleSubmit}>
            <div className="form-name">
                <label>Masukkan nama buah: </label>
                <input type="text" value={fruit.name} onChange={handleNama} />
            </div>

            <div className="form-price">
                <label>Masukkan harga buah: </label>
                <input type="text" value={fruit.price} onChange={handleHarga} />
            </div>

            <div className="form-height">
                <label>Masukkan berat buah: </label>
                <input type="text" value={fruit.weight} onChange={handleBerat} placeholder="(dalam gram)"/>
            </div>
            <button className="form-submit">Submit</button>
            </form>
        </>
    )
}

export default FruitForm