const glicontrol = require('../controller/glibliControllers')

const express = require('express') 

const router = express.Router()

// router. metodo http (rota, funcao)

router.get("/catalogo", glicontrol.getAll)
router.put("/change/:id", glicontrol.updateTodos)
router.patch("/update/:id", glicontrol.updateRunningTime)
router.delete("/delete/director/:director", glicontrol.deleteDiretor)
router.delete("/delete/id/:id", glicontrol.deleteId)

module.exports = router