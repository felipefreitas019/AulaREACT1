import Exercicio3 from "./Componentes/Exercicio3"
import Exercicio4 from "./Componentes/exercicio4"
import Exercicio5 from "./Componentes/exercicio5"
export default function App()
{
  return (

    <>
    <div>
    
      <h1>Exercícios </h1>
        <Exercicio3 valor={100} taxa={10} tempo={2}/>
    
   
    <hr />
    <h1> chamada exercicio 4</h1>
    
     < Exercicio4 tipo={"triangulo"} base={10} altura={5}/>
     < Exercicio4 tipo={"retangulo"} base={10} altura={5}/>
     < Exercicio4 tipo={"quadrado"} base={10} altura={10}/>
    
    </div>

    <hr />
    <h1> chmada exercicio 5</h1>
    
    <Exercicio5 quantidade={150}/>

    </>
  )
}

