/*
Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:

URL de exemplo: https://api.github.com/users/diego3g/repos

Basta alterar "diego3g" pelo nome do usuário.

<input type="text" name="user">
<button onclick="">Adicionar</button>

Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

<ul>
    <li>repo1</li>
    <li>repo2</li>
    <li>repo3</li>
    <li>repo4</li>
    <li>repo5</li>
</ul>
*/

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

function renderRepos(repos) {
    listElement.innerHTML = '';
    
    for (repo of repos) {
        var repoElement = document.createElement('li');
        var repoText = JSON.stringify(repo, null, 2);
        
        repoElement.innerHTML = repoText;
        listElement.appendChild(repoElement);
    }
}

listElement.setAttribute('style', 'white-space: pre-wrap');

function renderLoading() {
    listElement.innerHTML = '';
    let textElement = document.createTextNode('Loading...');
    let loadingElement = document.createElement('li');

    loadingElement.append(textElement);
    listElement.append(loadingElement);
}

function getUser() {
    return inputElement.value;
}

const listRepos = async () => {
    renderLoading();
    const user = await getUser(); 
    return axios.get(`https://api.github.com/users/${user}/repos`)
        .then(response => { renderRepos(response.data) })
        .catch(error => { listElement.innerHTML = error.message})
}

buttonElement.onclick = listRepos;