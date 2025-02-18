function Texto1() {
  return <p>Um paragrafo de texto! e isso é um novo teste</p>;
}

export default function Home() {

  const aula = 1;
  return (
    <div>
      <h1>Olá turma,</h1>
      <p>Essa é a nossa {aula}ª aula de React.</p>

      <Texto1></Texto1>
    </div>
  );
}

