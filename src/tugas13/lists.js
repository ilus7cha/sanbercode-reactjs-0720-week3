import React, {Component} from 'react';
import './lists.css';

class Lists extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataBuah: [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
              ],
            inputNama: "",
            inputHarga: "",
            inputBerat: "",
            indexOfForm: -1
        }
    }

    handleNama = (event) =>{
        this.setState({
            inputNama: event.target.value
        });
    }

    handleHarga = (event) =>{
        this.setState({
            inputHarga: event.target.value
        });
    }

    handleBerat = (event) =>{
        this.setState({
            inputBerat: event.target.value
        });
    }

    handleEdit = (event) =>{
        let index = event.target.value
        let buah = this.state.dataBuah[index]
        this.setState({
            inputNama: buah.nama,
            inputHarga: buah.harga,
            inputBerat: buah.berat,
            indexOfForm: index})
    }

    handleDelete = (event) =>{
        let index = event.target.value
        let buah = this.state.dataBuah
        let editBuah = buah[this.state.indexOfForm]
        buah.splice(index, 1)

        if(editBuah !== undefined){
            var newIndex = buah.findIndex((el) =>el === editBuah)
            this.setState({
                dataBuah: buah,
                indexOfForm: newIndex
            })
        }else{
            this.setState({
                dataBuah: buah
        })    
    }

}

    handleSubmit = (event) =>{
        event.preventDefault()

        let nama = this.state.inputNama
        let index = this.state.indexOfForm

        if(nama.replace(/\s/g,'') !== "" && this.state.inputHarga !== "" && this.state.inputBerat !== ""){
            let buah = this.state.dataBuah

        if(index === -1){
            buah = [...buah,
                {nama: this.state.inputNama,
                harga: this.state.inputHarga,
                berat: this.state.inputBerat}]
        }else{
            let buah = this.state.dataBuah[index]
            buah.nama = this.state.inputNama
            buah.harga = this.state.inputHarga
            buah.berat = this.state.inputBerat
        }
        this.setState({
            dataBuah: buah,
            inputNama: "",
            inputHarga: "",
            inputBerat: "",
            indexOfForm: -1
        })
    }
}
        render(){
            return(
                <>
            <h1>Tabel Harga Buah</h1>
            <table className= "tugas13">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
        <tbody>
        {this.state.dataBuah.map((el, index) => {
            return (
                <tr key={index}>
                    <td>{el.nama}</td>
                    <td>{el.harga}</td>
                    <td>{el.berat / 1000} kg </td>
                    <td>
                        <button className="edit" onClick={this.handleEdit} value={index}>Edit</button>
                        &nbsp;
                        <button className="delete" onClick={this.handleDelete} value={index}>Delete</button>
                      </td>
                </tr>
            )
        })
    }
        </tbody>
    </table>
            {/* Form */}
            <h2>Form Data Buah</h2>
            <form onSubmit= {this.handleSubmit}>
            <div className="form-name">
                <label>Masukkan nama buah: </label>
                <input type="text" value={this.state.inputNama} onChange={this.handleNama} />
            </div>

            <div className="form-price">
                <label>Masukkan harga buah: </label>
                <input type="text" value={this.state.inputHarga} onChange={this.handleHarga} />
            </div>

            <div className="form-height">
                <label>Masukkan berat buah: </label>
                <input type="text" value={this.state.inputBerat} onChange={this.handleBerat} placeholder="(gram)"/>
            </div>
            <button className="form-submit">Submit</button>
            </form>
        </>
        )}
    }

export default Lists