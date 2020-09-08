# music-weather-app
REST API indica musicas baseado no clima local


 - Endpoints da aplicação
     
      - /api/music/:<nome_da_cidade> - Retorna JSON com músicas de uma playlist baseada na categoria indicada, sendo referenciada através da temperatura em tempo real da cidade informada:

        Formato da resposta: 
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


 