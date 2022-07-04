const { Router } = require("express");
const EventoController = require("../controllers/EventoController");

const router = Router();

router.get("/eventos", EventoController.listarEventos);

module.exports = router;
