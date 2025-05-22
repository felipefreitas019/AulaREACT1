export default function Exercicio4({tipo, base, altura})


{
   let Q = Number(base) * Number(altura);
   let R = Number(base) * Number(altura);
   let T = (Number(base) * Number(altura)) / 2;

   if(tipo == "triangulo"){
    return(
        <h1> a area do triangulo é : {T}</h1>
    ) 
    }else if ( tipo == "quadrado"){
        return(
         <h1> a area do quadrado é : {Q} </h1>
        )
   }else if ( tipo == "retangulo"){
    return(
        <h1> a area do retangulo é : {R}</h1>
    )


    
}}