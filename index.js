// solicitar o nome do usuario, 3 notas, calculas a média
//informar o nome do usuario, a media e se a media for maior que 6
// dar os parabens, se nao pedir para repetir de ano

let NomedoUsuario =prompt("digite seu nome!!!");

let n1 = Number= prompt ('digite sua nota!');
n1= eval (n1) ;

let n2 = Number= prompt ('digite sua segunda nota!');
n2= eval (n2) ; 

let n3 = Number= prompt ('digite sua terceira nota!')
n3= eval (n3) ; 

media = (n1 + n2 + n3)/3

if ( media >= 6 ) {
    document.write  ("Aprovado");

} else 

    if ( media =  5 ) {
        document.write  ("Reprovado");
        
        } else 
        document.write  ("Recuperação");

