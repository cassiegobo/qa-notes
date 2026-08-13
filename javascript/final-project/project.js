console.log("PARSING CORRETO IHA");

function set() {
    let partes = document.getElementsByName('propriedades');

    for (let x = 0; x < partes.length; x++) {
        let cssProperties= partes[x].getAttribute('id');
        let cssValues= partes[x].value;
        let div = document.getElementById('modify');
        
        div.style[cssProperties]=cssValues;
    }
}

document.getElementById('set').addEventListener('click',set);
