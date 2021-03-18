# busca-github-api
Busca de repositórios pelo nome de usuário consumindo a API do Github | Exercício JS Rocketseat


<img src="https://i.imgur.com/DdFvgv0.gif" alt="demonstração da aplicação" />

------------

Exercícios 2 e 3 propostos no [Curso de Javascript da Rocketseat](https://rocketseat.com.br/starter/curso-gratuito-javascript "Curso de Javascript da Rocketseat"), **módulo 4**.
*Obs: foram inseridos os links para os repositórios.*

#### 2º exercício
Crie uma tela com um `<input> ` que deve receber o nome de um usuário no Github. Após digitar o nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:

URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.

```javascript
<input type="text" name="user">
<button onclick="">Adicionar</button>
```

Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

```javascript
<ul>
  <li>repo1</li>
  <li>repo2</li>
  <li>repo3</li>
  <li>repo4</li>
  <li>repo5</li>
</ul>
```

#### 3º exercício
A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar da lista apenas enquanto a requisição estiver acontecendo:

```javascript 
<li>Carregando...</li>
```

Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.

*Dica: Quando o usuário não existe, a requisição irá cair no `.catch` com código de erro 404.*
