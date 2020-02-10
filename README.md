Weather Now
==============
### Tela principal
![how the app looks like][app-screen-1]
### Quadro de previsão do tempo
![how the app looks like][app-screen-2]

Visão geral
--------

Weather Now é um SPA que possui funcionalidades relacionadas a listagem e organização, por ordem proximidade em relação a geolocalização client, das cidades brasileiras e demonstração de informações meteorológicas a seu respeito. Trata-se de uma interface gráfica para os dados vindos da [OpenWeather API][1]

Tecnologias
------------

- Typescript
- React

Funcionalidades
--------

- Listagem das cidades brasileiras
- Organização da lista de cidades por ordem de proximidade do client (necessário aceitar o rastreio de sua localidade no navegador)
- Pesquisar cidades
- Visualização de dados meteorológicas sobre a cidade pesquisada

Como executar localmente (produção ou desenvolvimento)
---------------------------

### Desenvolvimento

É necessário ter Node instalado em sua máquina e também é preciso ter uma chave válida da OpenWeather API, para isso, [efetue seu cadastro][2]. No terminal, execute os seguintes comandos e substitua $YOUR_KEY, no penultimo comando, pela sua chave da API

    git clone https://github.com/reedlex98/age-interview-coded-test.git
    cd age-interview-coded-teste
    npm install
    echo "REACT_APP_GOOGLE_API_KEY=$YOUR_KEY" > .env
    npm start

### Produção

Apenas substitua o último comando por ```npm run build``` e o código será processado para produção, a saída estará na pasta build/

Live version
------

Você precisará ter um navegador moderno com o javascript ativo. A aplicação está hospedada no Netlify, para acessá-la siga esse link: [Weather Now][3]

[app-screen-1]: ./src/assets/app_1.jpg
[app-screen-2]: ./src/assets/app_2.jpg
[1]: https://openweathermap.org/api
[2]: https://home.openweathermap.org/users/sign_up
[3]: https://gifted-murdock-e02993.netlify.com/
