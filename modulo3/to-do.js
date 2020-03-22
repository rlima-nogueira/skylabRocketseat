
//querySelector faz a busca dos elementos que quero, basta referenciar a id da div e o elemento que quero buscar//
var listElement = document.querySelector('#app ul'); 
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


//Criamos um array pra poder salvar todos os to-do na lista
var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat'
];

//essa função vai percorrer o array que criamos acima// 
function renderTodo(){
    //esse for serve para percorrer especificamente arrays 'for ... of'//

    listElement.innerHTML=''; //tudo que estiver dentro do ul, vai ser removido//

    for (todo of todos){ 
        //cria um elemento de list: 'li'//
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        //adiciona o que foi escrito na variavel e depois atribui para lista// 
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodo();

function addTodo(){
    //variavel recebe o valor que foi digitado no input//
    var todoText = inputElement.value;
    //função do array para adicionar um novo item ao final dele// 
    todos.push(todoText); 
    inputElement.value = ''; 
    renderTodo();
}

buttonElement.onclick = addTodo;

