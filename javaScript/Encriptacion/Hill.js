/**
 * @author SoftBean
 * 
 */
function evaluarNombre(){
    var letras = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    var mensajeEncriptado = [];
    var name1 = document.getElementById("nombreUrs").value; 
    var name = name1.toLowerCase();
    
    
    for(var i=0; i<25; i++){
        //document.write("<br>"+name.charAt(i)+"<br>");

        for(var e=0; e<letras.length; e++){
            //document.write(e);
            //document.write(letras[e]);

            if(name.charAt(i)==letras[e]){
                //document.write("Son iguales las letras en la posicion "+i+" "+e+"<br>");
                mensajeEncriptado.push(e);

            }
        }   
    }
    
    if(mensajeEncriptado.length<16){
        var diferencia = 16 - mensajeEncriptado.length;

        for(var lim=0; lim<diferencia; lim++){
            mensajeEncriptado.push(0);
        }
    }
    return mensajeEncriptado;//regresa una lista 

}


function PrimerMatriz(){
    
   var matriz = new Array(4);

   for(var i=0; i<matriz.length ; i++){
    matriz[i] = new Array(4);
   }

   var lista = evaluarNombre();
   var columna = 0;
   var fila = 0;

   for(var i=0; i<lista.length; i++){
        
        if(i<=3){
            matriz[columna][fila]=lista[i];
            //document.write("i: "+i+" f: "+fila+" "+columna+"<br>");
            
            fila+=1;
            //document.write("<br> El elemento: "+lista[i]+" Esta en la fila: "+fila+" En la columna: "+columna+"<br>");

            if(fila == 4){
                columna+=1;
                fila=0;
                /*document.write("i: "+i+" fila: "+fila);
                document.write("<br>La columna ahora vale: "+columna+"<br>");*/
                
            }
        }//Primer columna
        if(i>=4 && i<=7){
            matriz[columna][fila]=lista[i];
            //document.write("i: "+i+" f: "+fila+" "+columna+"<br>");

            fila+=1;
            //document.write("<br> El elemento: "+lista[i]+" Esta en la fila: "+fila+" En la columna: "+columna+"<br>");

            if(fila == 4){
                columna+=1;
                fila=0;
                //document.write("i: "+i+" fila: "+fila);
                //document.write("<br>La columna ahora vale: "+columna+"<br>");
                
            }
        }//Segunda columna

        if(i>=8 && i<=11){
            matriz[columna][fila]=lista[i];
            //document.write("i: "+i+" f: "+fila+" "+columna+"<br>");

            fila+=1;
            //document.write("<br> El elemento: "+lista[i]+" Esta en la fila: "+fila+" En la columna: "+columna+"<br>");

            if(fila == 4){
                columna+=1;
                fila=0;
                //document.write("i: "+i+" fila: "+fila);
                //document.write("<br>La columna ahora vale: "+columna+"<br>");
            }
        }//Tercer columna

        if(i>=12 && i<=15){
            matriz[columna][fila]=lista[i];
            //document.write("i: "+i+" f: "+fila+" "+columna+"<br>");

            fila+=1;
            //document.write("<br> El elemento: "+lista[i]+" Esta en la fila: "+fila+" En la columna: "+columna+"<br>");

            if(fila == 16){
                columna+=1;
                fila=0;
                //document.write("i: "+i+" fila: "+fila);
                //document.write("<br>La columna ahora vale: "+columna);

            }
        }//Cuarta columna
    }
    return matriz;
}

function MuestraMa() {
    MatrizNormal = PrimerMatriz();

    for(var c=0; c<MatrizNormal.length; c++){
        for(var f=0; f<MatrizNormal[c].length; f++){
            document.write("\n"+MatrizNormal[c][f]+"");
        }
    document.write("<br>");
    }
    
}

function activador(){
    MuestraMa();
}