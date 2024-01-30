<h1>Duck RPG</h1>
<h2>💻 Descrição</h2>
Essa aplicação tem como objetivo fazer consultas de itens do sistema de RPG D&D 5º edição, e par isso é utilizada a <a href="https://www.dnd5eapi.co/">D&D 5e API</a>. A aplicação conta com as consulta dos principais itens do RPG como classes e magias. No futuro será implementado uma API propria para fazer consultas de sistemas proprios de evolução bem como possibilitar a interação e salvamento de dados proprios na aplicação.

<h3> 📋 Features </h3>
- Consulta de todas as magias do livro básico<br>
- Consulta de magias através da busca pelo nome<br>
- Filtrar as listas de magias pelo nível<br>
- Consulta das classes básicas do livro do jogador<br>
- Consulta tidos os equipamentos e itens mágicos básicos do livro do jogador<br>
- Consulta de equipamentos e itens mágicos através da busca pelo nome<br>

<h3> ⚙️ Tecnologias utilizadas </h3>
- React.js para front-end<br>
- Tailwind CSS<br>
- Nest.js para back-end<br>

<h3> 📝 Como rodar o projeto </h3>

```bash
# clonar repositório
git clone https://github.com/JoabUrbano/duckRpg.git

# entrar na pasta do projeto front end web
cd duck-rpg-back-end\

# instalar depedências do backend
npm i

cd ..

cd duck-rpg-web\

# instalar depedências do frontend
npm i
cd ..

# Antes de rodar o projeto verifique as variaveis de ambiente no diretorio duck-rpg-back-end conforme mostrado no exemplo

# rodar back-end
cd duck-rpg-back-end\
npm run start:dev

# rodar front-end
cd duck-rpg-web\
npm start dev
```

<h3 id="usage" > 📚 Bibliotecas e recursos utilizados </h3>
<h4>Front End</h4>
- react-router-dom<br>
- react-icons<br>
- spinners-react<br>
<br>

<h4>Back End</h4>
- Typeorm mysql2<br>
- Class Validator<br>
- Mapped Types<br>

<br>Autor<br>
<a href="https://github.com/JoabUrbano">Joab Urbano</a><br>