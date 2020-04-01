function borrar(){
    contexto.clearRect(0, 0,window.innerWidth,window.innerHeight);  
 }
 function Mujer(){
     let peso = document.getElementById('Peso').value;
     let estatura = document.getElementById('Estatura').value;

     let imc = (peso/(estatura*estatura));
     document.getElementById('imc').innerHTML=imc;
     if(imc<20){
        document.write("bajo peso");
     }
     if(imc>20 && imc<23.9){
        document.write("normal");
     }
     if(imc>24 && imc<28.9){
        document.write("obesidad leve");
     }
     if(imc>29 && imc<37){
        document.write("obesidad severa");
     }
     if(imc>37){
        document.write("obesidad muy severa");
     }
 }
 function Hombre(){
    let peso = document.getElementById('Peso').value;
    let estatura = document.getElementById('Estatura').value;

    let imc = (peso/(estatura*estatura));
    document.getElementById('imc').innerHTML=imc;
    if(imc<20){
        
    }
    if(imc>20 && imc<24.9){
    document.write("bajo peso");
    }
    if(imc>25 && imc<29.9){
        document.write("normal");
    }
    if(imc>30 && imc<40){
        document.write("obesidad leve");
    }
    if(imc>40){
        document.write("obesidad severa");
    }
}
