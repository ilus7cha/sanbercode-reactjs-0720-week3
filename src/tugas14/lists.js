import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './lists.css';

const Lists = () =>{
    const [dataBuah, setdataBuah] = useState(null)
    const [inputNama, setinputNama] = useState(null)
    const [inputHarga, setinputHarga] = useState("")
    const [inputBerat, setinputBerat] = useState("")
    const [selectedId, setSelectedId] = useState(0)
    const [statusForm, setStatusForm] = useState("create")

    useEffect( () => {
        if (dataBuah === null){
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then(res =>{
            setdataBuah(res.data)
        }, [dataBuah])
        }
    })
    
    const handleNama = (event) => {
        setinputNama(event.target.value)
    }

    const handleHarga = (event) => {
        setinputHarga(event.target.value)
    }

    const handleBerat = (event) => {
        setinputBerat(event.target.value)
    }

    const handleEdit = (event) =>{
        let idBuah = parseInt(event.target.value)
        let buah = dataBuah.find(x=> x.id === idBuah)
        console.log(dataBuah)

        console.log(buah)
        if(buah){
        setinputNama(buah.name)
        setinputHarga(buah.price)
        setinputBerat(buah.weight)
        setSelectedId(idBuah)
        setStatusForm("edit")            
        }

    }

    const handleDelete = (event) =>{
        let idBuah = parseInt(event.target.value)
        let newDataBuah = dataBuah.filter(el=> el.id !== idBuah)

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res=>{
            console.log(res)
            if(res.data === "success")
        setdataBuah(newDataBuah)
           
        })
        
    }

    const handleSubmit = (event) =>{
        event.preventDefault()

        let name = inputNama
        let price = inputHarga
        let weight = inputBerat

        if (name.replace(/\s/g, '')) {
            if(statusForm === "create"){
                axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight})
                .then(res =>{
                    console.log(res)
                    setdataBuah([...dataBuah, {id: res.data.id, name: name, price: price, weight: weight}])
                })
            }else if(statusForm === "edit"){
                let cariBuah = dataBuah.find(el => el.id === parseInt(selectedId))
                    console.log(cariBuah)
                let index = dataBuah.indexOf(cariBuah)
                        if (index < 0) return;
                        
                        dataBuah[index]["name"] = name;
                        dataBuah[index]["price"] = price;
                        dataBuah[index]["weight"] = weight;
                        setdataBuah(dataBuah)
                    
                    
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {name, price, weight})
                .then(res =>{
                    console.log("blabla", res)
                    dataBuah[index] = res.data
                    setdataBuah(dataBuah)
                    
                   

            })
        }

            setStatusForm("create")
            setSelectedId(0)
            setinputNama("")
            setinputHarga("")
            setinputBerat("")

        }
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
                        <button className="edit" onClick={handleEdit} value={el.id}>Edit</button>
                        &nbsp;
                        <button className="delete" onClick={handleDelete} value={el.id}>Delete</button>
                      </td>
                </tr>
            )
        })
    }
        </tbody>
    </table>
                {/* Form */}
            <h2>Form Data Buah</h2>
            <form onSubmit= {handleSubmit}>
            <div className="form-name">
                <label>Masukkan nama buah: </label>
                <input type="text" value={inputNama} onChange={handleNama} />
            </div>

            <div className="form-price">
                <label>Masukkan harga buah: </label>
                <input type="text" value={inputHarga} onChange={handleHarga} />
            </div>

            <div className="form-height">
                <label>Masukkan berat buah: </label>
                <input type="text" value={inputBerat} onChange={handleBerat} placeholder="(dalam gram)"/>
            </div>
            <button className="form-submit">Submit</button>
            </form>
        </>
    )
}

export default Lists