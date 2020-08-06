import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import HargaBuah from './tugas11';
import Timer from './tugas12/timer';
import Lists from './tugas14/lists';

function App() {
  return (
    <div className="App">
    {/* Tugas 11 */}
      {/*<h1>Tabel harga Buah</h1>*/}
      {/*<HargaBuah />*/}

    {/* Tugas 12 */}
      <Timer start= {100} />

    {/* Tugas 13 & Tugas 14 */}
      <Lists />  
    </div>
  );
}

export default App;
