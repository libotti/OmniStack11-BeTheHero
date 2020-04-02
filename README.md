

[![LinkedIn][linkedin-shield]][linkedin-url]




<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="hhttps://github.com/libotti/OmniStack11-BeTheHero">
    <img src="ARQUIVOS/03%20-%20ASSETS%20FRONTEND/assets/logo.svg" alt="Logo">
  </a>

  <h3 align="center">Projeto Be The Hero - Rocketseat</h3>

  <p align="center">
    <br />
    <a href="https://github.com/libotti/OmniStack11-BeTheHero"><strong>Explore a documentação »</strong></a>
    <br />
    <br />
    <a href="https://github.com/libotti/OmniStack11-BeTheHero/issues">Reporte um Bug</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Conteúdo

* [Sobre o Projeto](#sobre-o-projeto)
  * [Tecnologias utilizadas](#tecnologias-utilizadas)
  * [Instalação](#instalação)
* [Uso](#uso)
* [Contribuição](#contribuição)
* [License](#license)
* [Contato](#contato)


<!-- SOBRE O PROJETO -->
## Sobre o Projeto

![Be the Hero início][product-screenshot]

Esse projeto foi desenvolvido durante a semana OmniStack da RocketSeat, a fim de desenvolver uma aplicação completa para conectar ONGs e pessoas interessadas em ajudar em algum caso relatado pela Instituição.
O projeto deve prover um backend em NodeJS, Frontend em ReactJs e aplicação Mobile em React Native.

Na aplicação Cliente Web:

* Cadastro de ONGs
* Cadastro de casos (por ONG)
* Listagem de casos
* Exclusão de casos

Na aplicação Mobile Android - iOS

* Listar os casos
* Detalhar caso e ONG
* Entrar em contato com a ONG por WhatsApp ou E-mail

### Tecnologias utilizadas

* [Reactjs](https://pt-br.reactjs.org/)
* [Nodejs](https://nodejs.org/en/)
* [React Native](https://reactnative.dev/)
* [Knex](http://knexjs.org/)
* [SQLite](https://www.sqlite.org/index.html)
* [Expo](https://expo.io/)
* [Express](https://expressjs.com/pt-br/)




### Instalação

Para começar a utilizar este projeto é necessário clonar o repositório, executar o comando npm install ou yarn install para realizar download das dependências, PostgreSQL, configurar o arquivo .env de acordo com sua necessidade.

2. Clone o repo
```sh
git clone https://github.com/libotti/OmniStack11-BeTheHero.git
```
3. Instale pacotes NPM
```sh
npm install
```

<!-- USO -->
## Uso

Aplicação WEB

O logon é feito através de um id gerado pelo Backend usando a **biblioteca Crypto** após a chamada da API de criação de ONG e validação dos dados enviados com a **biblioteca Celebrate**.
<img src="images/inicio.png" alt="Logon" width="600" heigth="600">

Tela de perfil da ONG

É onde é feito a listagem, inserção e exclusão de **Casos** específicos da ONG logada

<img src="images/profile.png" alt="Profile" width="600" heigth="600">

Aplicação React Native 

<img src="images/iniciando-app.png" alt="Iniciando App" width="200" heigth="400"> <img src="images/home-app.png" alt="Home App" width="200" heigth="400">
<img src="images/detalhes-app.png" alt="Detalhes App" width="200" heigth="400">

<!-- CONTRIBUIÇÃO -->
## Contribuição

A contribuição é o que torna a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuiçao que você faz é **muito apreciado**!

1. Fork o Projeto
2. Crie uma Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas Mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra uma Pull Request

<!-- CONTATO -->
## Contato

Link do Projeto: [https://github.com/libotti/OmniStack11-BeTheHero](https://github.com/libotti/OmniStack11-BeTheHero)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/libotti
[product-screenshot]: ARQUIVOS/03-ASSETS-FRONTEND/assets/heroes.png
[product-screenshot-profile]: images/profile.png
[product-screenshot-iniciando-app]: images/home-app.png
[product-screenshot-profile-app]: images/home-app.png
[product-screenshot-detalhes-app]: images/detalhes-app.png
