//PROGRAMA DONDE INGRESAS 3 NUMEROS Y COLOCAS EL MAYOR Y EL MENOR
//EN CASO DE HABER 2 NUMEROS IGUALES DICE CUALES SON.
let numA=prompt("Ingresa el numero A: ");
let numB=prompt("Ingresa el numero B: ");
let numC=prompt("Ingresa el numero C: ");

if(numA>numB){
  if(numA>numC){
    if(numB==numC){
      console.log("Numero B es igual a numero C")
    }else{
      if(numB>numC){
        console.log("El mayor es A= "+numA);
        console.log("El menor es C= "+numC);
    }else{
        console.log("El mayor es A= "+numA);
        console.log("El menor es B= "+numB);
    }
    }
    
  }
}

if(numB>numA){
  if(numB>numC){
    //NUMEROS IGUALES
    if(numA==numC){
      console.log("Numero A es igual a numero C")
    }else{
      if(numA>numC){
        console.log("El mayor es B= "+numB);
        console.log("El menor es C= "+numC);
    }else{
        console.log("El mayor es B= "+numB);
        console.log("El menor es A= "+numA);
    }
  }
    }
}

if(numC>numA){
  if(numC>numB){
    //NUMEROS IGUALES
    if(numA==numB){
      console.log("Numero A es igual a numero B")
    }else{
       if(numA>numB){
        console.log("El mayor es C= "+numC);
        console.log("El menor es B= "+numB);
    }else{
        console.log("El mayor es C= "+numC);
        console.log("El menor es A= "+numA);
    }
    }
   
  }
}