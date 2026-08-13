var cores = [ "var(--pink)", "var(--purple)", "var(--blue)", "var(--white)","var(--light-pink)", "var(--light-pink)","var(--light-purple)","var(--light-blue)", "var(--white)",  "var(--pink)"];
            var x = 0; // <- contador
            function criarListra() { 
                                        var diva = document.createElement("div"); // criar uma div 
                                        document.body.appendChild(diva); // colocar a div no body
                                        diva.style.cssText="width:300px;height:30px;background-color:" + cores[x % cores.length] + ";"; // definir tamanho e cor 
                                        x++; // troca de cor
            }
           document.getElementById("modify").addEventListener("click", criarListra); 
