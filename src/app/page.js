
'use client';
import styles from "./page.module.css";
import { useState } from 'react';

export default function Home() {
  const [ numeroAleatorio, setNumeroAleatorio ] = useState(0);

  function gerarNumeroAleatorio() {
    const novoNumero = Math.floor(Math.random() * (100 - 1) + 1);
    setNumeroAleatorio(novoNumero);
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Número Aleatório</h1>
        <h2>{numeroAleatorio}</h2>
        <p>Click no botão abaixo para gerar um número aleatório</p>
        <button onClick={gerarNumeroAleatorio}>Gerar Número</button>
      </div>
    </main>
  );
}
