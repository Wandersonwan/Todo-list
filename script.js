const btn = document.querySelector(".btn");
const inputTesk = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-task")

let minhaListaDeItens = []


function adicionandoItens (){
    minhaListaDeItens.push({
        tarefa: inputTesk.value,
        concluida: false
    })

    inputTesk.value = ""
    mostrarTarefas()
}
function mostrarTarefas() {

    let novaLi = ""
    minhaListaDeItens.forEach((item, posicao) =>{
        novaLi = novaLi + `<li class="task ${item.concluida && "done"}">
                <img src="./Image/checked.png" alt="Imagem checked" onclick="concluirTarefa(${posicao})" >
                <p>${item.tarefa}</p>
                <img src="./Image/trash.png" alt="Imagem trash" onclick="deletarItem(${posicao})">
            </li>`
    })
    
    listaCompleta.innerHTML = novaLi

    localStorage.setItem('Lista',JSON.stringify(minhaListaDeItens) )

    
}
function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    mostrarTarefas()
}
function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao,1);
    mostrarTarefas()
    
}




btn.addEventListener("click",adicionandoItens);