const { Router } = require("express");
const UsuarioController = require("../controllers/UsuarioContoller");

const router = Router();

router.get("/usuarios", UsuarioController.listarUsuarios);
router.get("/usuarios/:id", UsuarioController.buscarPorIdUsuario);
router.post("/usuarios", UsuarioController.adicionarUsuario);

module.exports = router;
