  import React from 'react';
  import './index.css';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

class HargaBuah extends React.Component {
  render() {
    return (
    
    <table className= "tugas11">
        <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
        </tr>

        {dataHargaBuah.map(el => {
            return (
                <tr>
                    <td>{el.nama}</td>
                    <td>{el.harga}</td>
                    <td>{el.berat / 1000} kg </td>
                </tr>
            )
        })}
    </table>)
  }
}

export default HargaBuah;