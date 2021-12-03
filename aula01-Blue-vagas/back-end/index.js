//SERVER (API)
//Importar o express para utilizar as suas funções
const express = require('express');

// inicializar o express no arquivo js, para que ele possa assumir as funções do Servidor.
const app = express();

const blueVagas = [
    {
        id: 1,
        empresa: "Blue",
        salario: 3000,
        oportunidade: "Front-End Jr",
        tipo: 'estágio'
    },
    {
        id: 2,
        empresa: "Google",
        salario: 10000,
        oportunidade: "Front-End Jr",
        tipo: 'CLT'
    },
    {
        id: 3,
        empresa: "Facebook",
        salario: 20000,
        oportunidade: "Full Stack Sr",
        tipo: 'PJ'
    },
    {
        id: 4,
        empresa: "Amazon",
        salario: 15000,
        oportunidade: "Full Stack Pl",
        tipo: 'CLT'
    }
]

//CORS = Permite a troca de recursos entre origens diferentes
app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next()

});


//JSON - Javascript Object Notation
 //falo p express trabalhar com middleware de json para trabalharmos com o formato JSON
 app.use(express.json()); 

 //API - Forma de comunicação entre sistemas e contém endereços (endpoints)
 //REST = GET/POST/PUT/DELETE
 //Criar um endpoint para retornar uma mensagem para o cliente
 app.get("/", (req, res) => {
    //REQ = (REQUEST = REQUISIÇÃO - Vem do cliente)
    //RES = (RESPONSE = RESPOSTA - Volta para o cliente)
    res.send('Olá Bluemers');
 });

// [GET] /vagas - Retornar a lista de vagas
app.get('/vagas',  (req, res) => {
 res.send(blueVagas)

});

// endpoint [GET] /vagas/[id] = retornar para o cliente uma única vaga pelo ID

app.get('/vagas/:id', (req, res) => {
    //acessar o id via requesição 
    const idParam = req.params.id
    //buscar item na lista de acordo com o seu Id
    //Procurar na lista uma vaga que contenha o Id igual o recebido por parametro
    const vagaEncontrada = blueVagas.find(vaga=>vaga.id == idParam);
    //envio para o frontend a vaga que encontrei
    res.send(vagaEncontrada);

});

 //Definir a porta que o meu backend vai executar
 const port = 3000;
 //Inicializa o servidor na seguinte porta
 app.listen(port, () =>{
     console.log(`App rodando na porta ${port}`);

 });