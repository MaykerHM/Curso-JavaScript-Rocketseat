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

function getUser() {
    return inputElement.value;
}

const getUserRepos = async () => {
    const user = await getUser(); 
    return axios.get(`https://api.github.com/users/${user}/repos`).then((response) => {
        return response.data
    })
}

listElement.setAttribute('style', 'white-space: pre-wrap');

const showRepos = async () => {
    listElement.innerHTML = '';
    
    const repos = await getUserRepos();
    
    for (repo of repos) {
        var repoElement = document.createElement('li');
        var repoText = JSON.stringify(repo, null, 2);
        
        // repoElement.setAttribute('style', 'white-space: pre-wrap');      Same effect.
        repoElement.innerHTML = repoText;
        listElement.appendChild(repoElement);
    }
}
buttonElement.onclick = showRepos;