const gliFilmesJson = require("../models/ghiblifilms.json")
const express = require("express")
const app = express() //executar o express

app.use(express.json()) // fazendo o body parser

// Endpointer retornara todos os filmes
const getAll = (request, response) => {
  response.status(200).json([
    {
      "filmes": gliFilmesJson
    }
  ])
}

// alterar os dados do filme exceto o id vou usar o put para alterar 
const updateTodos = (request, response) => {

  const idRequest = request.params.id
  let glifilmeRequest = request.body

  let indexEncontrado = gliFilmesJson.findIndex(filme => filme.id == idRequest)

  /*slice é um metodo de array serve para substituir o item a partir do dado que ele encontra -  O número 1 e a quantidade de lista que desejamos alterar */
  gliFilmesJson.splice(indexEncontrado, 1, glifilmeRequest)

  response.status(200).json([
      {
          "message": "Os dados do seu filme foram atualizados, exceto o id",
          gliFilmesJson
      }
  ])
}

// para alterar o Running-Time
const updateRunningTime = (request, response) => {

  const idRequest = request.params.id
  let novoDuracao = request.body.running_time

  filmeFiltrado = gliFilmesJson.find(filme => filme.id == idRequest)
  filmeFiltrado.running_time = novoDuracao

  response.status(200).json([{

      "message": "O score do seu filme foi atualizado",
      filmeFiltrado

  }])
}

//Deletar o diretor
const deleteDiretor = (request, response)=>{
  
  const idRequest = request.params.director.toLowerCase()

  const indiceId = gliFilmesJson.findIndex(filme => filme.director.toLowerCase() == idRequest)
//findIndex e um metodo de array 
  
  filmesJson.splice(indiceId, 1)//

  response.status(200).json([
      {
          "message": "Diretor foi deletado com sucesso",
          "deletado": idRequest,
          gliFilmesJson
      }
  ])
}

// deleta o id
const deleteId = (request, response)=>{
  
  const idRequest = request.params.id.toLowerCase()

  const indiceId = gliFilmesJson.findIndex(filme => filme.director.toLowerCase() == idRequest)

  
  filmesJson.splice(indiceId, 1)

  response.status(200).json([
      {
          "message": "O id do filme foi deletadissimo",
          "deletado": idRequest,
          gliFilmesJson
      }
  ])
}

module.exports = {
  getAll,
  updateTodos,
 updateRunningTime,
 deleteDiretor,
 deleteId
 
}