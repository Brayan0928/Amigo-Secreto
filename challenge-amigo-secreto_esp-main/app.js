let amigos = [];

function agregarAmigo() {
    const input = document.querySelector("input");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        input.value = "";
        return;
    }

    amigos.push(nombre);
    mostrarAmigos();
    input.value = ""; 
}

function mostrarAmigos() {
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];

    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSecreto}</strong>`;
}