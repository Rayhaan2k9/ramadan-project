import { Firestore, collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import { Language } from './components/Language';
import { db } from './firebase';


function App() {

  return (
    <div className="App">
      <header className="App-header">

      <Language />
      </header>
    </div>
  );
}

export default App;
