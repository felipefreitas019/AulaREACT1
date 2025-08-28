import {Link} from "react-router-dom";
import { useState } from "react";

export default function Exemplo1()
{
const[nome, setNome] = useState ("Felipe");
const[idade, setIdade] = useState (18);
const[resultado, setresultado] = useState ();
    return(
        <div>
         <h1> Exemplo 1</h1>
     
         <div className="container">
              
          <form>
           <p> Digete o nome do aluno <hr />
               <input type= "text" valeu={nome} onChange={(e) => setNome(e.target.value)} />

           </p> 

           <p> Digite a idade <br />
             <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />

           </p>    

           <p>
               <input type="button" value="Exemplo 1" />
               <input type="button" value="Limpar" />
           </p>
              
            <p>
               <b>REsultados</b> 
                Nome: {nome} <br />
                Idade: {idade} <br />
                </p>  
              
         </form>   
             
             
         </div>     
        
        </div>
    )
}