'use client'

import { useState } from "react";

/* function Texto1() {
  return <p>Um paragrafo de texto! e isso é um novo teste</p>;
}

export default function Home() {

  const [hide, setHide] = useState(false);
  const aula = 2;

  return (

    <div>
      <h1>Olá turma,</h1>
      <p>Essa é a nossa {aula}ª aula de React.</p>
      <hr />
      <button onClick={() => setHide(!hide)}>{hide ? "Show" : "Hide"}</button>
      <hr />

      {!hide && (
        <>
          <Texto1>
          </Texto1>
        </>
      )}
    </div>
  );
} */

function App() {
  const [numero, setNumero] = useState(null);

  const gerarNumeroAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    setNumero(numeroAleatorio);
  };

  return (
    <div>
      <button onClick={gerarNumeroAleatorio}>Gerar Número Aleatório</button>
      {numero !== null && <p>Número gerado: {numero}</p>}
    </div>
  );
}

export default App;