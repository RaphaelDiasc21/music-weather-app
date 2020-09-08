# music-weather-app
REST API indica musicas baseado no clima local


 - Endpoints da aplicação
     
      - /api/music/:<nome_da_cidade> - Retorna JSON com músicas de uma playlist baseada na categoria indicada se, sendo referenciada através da temperatura em tempo real da cidade informada:

        Formato da resposta:  
          Se a cidade informada for válida:
           Status 200
            { 
                "playlist":{
                    "genero":"genero indicado baseado na temperatura da cidade",
                    "musicas":{
                        [
                            nome das musicas
                        ]
                    }
                }
            }

          Caso a cidade informada não for uma cidade válida:
           status 404
            {
                "message":"Nome de cidade invalido !
            }

      - /api/statistics - Retorna JSON com o histórico estatistico das cidades que foram informadas
              Formato da resposta: 
                [{
                    "id":id do registro,
                    "city":"Nome da cidade",
                    "temperature:"Temperatura da cidade",
                    "sensation":"Sensação térmica",
                    "max":"Temperatura máxima",
                    "min":"Temperatura mínima",
                    "humidity":"Umidade relativa",
                    "date":"Data consultada",
                    "hour":"Hora consultada"
                }]


  - Técnologias utilizadas
     - Backend: Nodejs/Express
       Banco de dados: Sqlite
       Container: Docker

      - Bibliotecas: 
             - Sequelize: ORM para banco de dados sql - utilizado para integração com o sqlite
             - axios: Request client - Utilizado para as requisições http
             - Express: Biblioteca para auxilio no desenvolvimento de aplicações com nodejs
             - body parser: Parser de contéudo

  - Arquitetura
       - Foi pensado em um modelo voltado a serviços, onde os mesmos realizam as tarefas de regra de negócio da API
       tendos os "utils" em seu auxilio, para realização de tarefas mais pontuais como, requisição para as API's externas  - SpotifyAPI e OpenWeatherAPI - preparação de informações, serialização e conversões de dados
        - Os controllers recebem as requições através das rotas, onde que por sua vez realizam o trabalho junto aos services e retornam uma responsta ao usuário

  - Observações:
        - Reconheço que a escolha por utilizar o banco de dados sqlite, não é uma das melhores,
        a princípio utilizei um banco de dados NoSql Mongo, como um container junto a minha aplicação sendo orquestrado pelo docker compose, porém não obtive exito na tentativa de fazer o deploy na Heroku, por isso como solução de contorno implementei o SQLITE com o sequelize

        - A aplicação está dockerizada, para subir a mesma local: docker-compose run --build
 