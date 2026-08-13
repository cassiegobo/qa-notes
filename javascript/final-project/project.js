console.log("PARSING CORRETO IHA");
let partes = document.getElementsByName('propriedades');
let div = document.getElementById('modify');
function set() {
    for (let x = 0; x < partes.length; x++) {
        let cssProperties= partes[x].getAttribute('id');
        let cssValues= partes[x].value;
        
        
        div.style[cssProperties]=cssValues;
    }
}

document.getElementById('set').addEventListener('click',set);
