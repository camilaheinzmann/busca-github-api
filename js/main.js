var inputElement = document.querySelector('#busca input');
var buttonElement = document.querySelector('#busca button');
var listElement = document.querySelector('#repos ul');

function msgErro() {
    listElement.innerHTML = "";

    var errorElement = document.createElement('li');
    var errorText = document.createTextNode("Usuário não encontrado!");

    errorElement.appendChild(errorText);
    listElement.appendChild(errorElement);
}

function msgCarregando() {
    listElement.innerHTML = "";

    var carregElement = document.createElement('li');
    var carregText = document.createTextNode("Carregando...");

    carregElement.appendChild(carregText);
    listElement.appendChild(carregElement);
}

var listaRepos = function (repos) {
    listElement.innerHTML = "";

    for (repo in repos) {
        var repoElement = document.createElement('li');

        var linkRepo = document.createElement('a');
        linkRepo.setAttribute('href', repos[repo].html_url);
        linkRepo.setAttribute('target', '_blank');

        var repoText = document.createTextNode(repos[repo].name);

        linkRepo.appendChild(repoText);
        repoElement.appendChild(linkRepo);
        listElement.appendChild(repoElement);
    }
}

function buscaGit() {
    var user = inputElement.value;
    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            msgCarregando();
            var repos = response.data;
            listaRepos(repos);
        })
        .catch(function (error) {
            msgErro();
        });
}