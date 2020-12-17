# Challenge Delivery Much

## Descrição
Esse é o teste técnico realizado para o processo seletivo da [Delivery Much](https://www.deliverymuch.com.br/).

## Explicação arquitetural
* Optei pelo máximo de desacomplamento possível, para isso utilizei programação modular (com isso posso modificar módulos e isso não vai interferir no funcionamento final da aplicação, contanto que eu não quebre o contrato das classes/interfaces implementadas).
* Dentro dos módulos, escolhi separar por controller, service, repository e um arquivo pras rotas.
  * Talvez soe repetitivo e algumas pessoas optariam por juntar controller e service, mas eu prefiro manter com a separação atual pois na service posso tratar de transformações nos objetos e executar as regras de negócio (por exemplo), enquanto na controller eu me preocupo apenas com a camada http.
  * Optei também por não juntar o arquivo de rotas com a controller pois assim acho que fica mais fácil desacopar, pois caso eu queira usar outro framework para servir http (como o [Fastify](https://www.fastify.io/) por exemplo), eu apenas preciso manter o contrato da função (parseando os tipos dos parâmetros passados para a função existente na controller).
* Optei por não usar nenhum banco de dados ou sistema de cache pois isso iria apenas aumentar a complexidade da aplicação desnecessariamente. Caso isso se faça necessário, graças a programação modular e a forma que o código foi escrito implementar um banco de dados será muito fácil :)

## Requisitos
É necessário ter o [docker](https://docs.docker.com/get-docker/) e o [docker-compose](https://docs.docker.com/compose/install/) instalados na sua máquina.

## Como rodar o projeto?
* Renomeie o arquivo `example.env` para `.env` e preenchendo as variáveis da forma necessária.
* Rode o comando `docker build . -t wricke/delivery_much_challenge` para gerar uma imagem do docker.
* Rode o comando `docker-compose up` para subir o container em tempo real.

## Como rodar os testes
Nessa aplicação, foram escritos testes apenas para as funções essencias da aplicação, ou seja, não foram escritos testes para a camada de "interface" (contato externo) da aplicação, apenas para testar o funcionamento do algoritmo de dijkstra.

Para rodar esses testes, siga as instruções:
### Se já tiver buildado a imagem do docker
* Rode o comando `npm run test` e verá o resultado dos testes realizados.

### Se ainda não tiver buildado a imagem do docker, rode o comando
* Rode o comando `npm install` para instalar as dependências do projeto.
* Rode o comando `npm run test` para ver o resultado dos testes.
