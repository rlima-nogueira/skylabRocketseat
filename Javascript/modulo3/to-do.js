
//querySelector faz a busca dos elementos que quero, basta referenciar a id da div e o elemento que quero buscar//
var listElement = document.querySelector('#app ul'); 
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


//acessa os itens pelo json e se nao tiver nada salvo, ele retorna o valor padrao
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//essa função vai percorrer o array que criamos acima// 
function renderTodo(){
    //tudo que estiver dentro do ul, vai ser removido//
    listElement.innerHTML=''; 
    
    //esse for serve para percorrer especificamente arrays 'for ... of'//
    for (todo of todos){ 
        //cria um elemento de list: 'li'//
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        //cria link//
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#'); //identifica o link como o href//

        var posicao = todos.indexOf(todo);//encontra a posicao do item//
        linkElement.setAttribute('onclick', 'deleteTodo('+ posicao +')');

        var linkText = document.createTextNode('Clique aqui para excluir o item');//cria o texto do link
        linkElement.appendChild(linkText);

        //adiciona o que foi escrito na variavel e depois atribui para lista// 
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
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
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(posicao){
    //splice remove uma quantidade de itens do array, baseado na posição que vamos passar//
    //ou seja, a partir da posição que eu passar, ele remove o proximo item//
    todos.splice(posicao, 1);

    //chama a função render para atualizar a lista novamente apos excluir//
    renderTodo();
    saveToStorage();
}

//usando o armazenamento local//
//usando JSON porque esse amarzenamento só salva string//
function saveToStorage(){
    
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
