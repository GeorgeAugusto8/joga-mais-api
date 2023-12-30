var express = require('express');
var router = express.Router();
var model = require('../models/index');
var validator = require('validator');
var helpers = require('../helpers/util');
var AES = require('crypto-js/aes');
var Utf8 = require('crypto-js/enc-utf8');

const env = process.env.NODE_ENV || 'development';
const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')[env];
const Op = Sequelize.Op;

const usuarioController = require('../controllers/usuarioController');

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// /////////////////////////////////////
// MÉTODOS GET 
// /////////////////////////////////////

/* router.get('/', function (req, res, next) {
    res.render('index', { title: 'Joga+ API' });
});

router.get('/parametro', function (req, res, next) {
    model.parametro.findAll({})
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error: true, data: [], exception: error }));
});

router.get('/parametro/:param', function (req, res, next) {
    if (typeof req.params.param == 'undefined') {
        return res.status(400).json({ error: true, data: [], exception: "Invalid parameter" });;
    }
    const param = req.params.param;
    model.parametro.findAll({
        where: {
            parametro: param
        }
    })
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error: true, data: [], exception: error }));
});

router.get('/parametro/:param/:codigo', function (req, res, next) {
    if (typeof req.params.param == 'undefined') {
        return res.status(400).json({ error: true, data: [], exception: "Invalid parameter" });;
    }
    const param = req.params.param;
    const codigo = req.params.codigo;
    model.parametro.findAll({
        where: {
            parametro: param,
            codigo: codigo
        }
    })
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error: true, data: [], exception: error }));
});

router.get('/usuario/:id', function (req, res, next) {
    if (typeof req.params.id == 'undefined') {
        return res.status(400).json({ error: true, data: [], exception: "Invalid parameter" });;
    }
    const id = req.params.id;
    model.usuario.findAll({
        where: {
            id_usuario: id
        }
    })
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error: true, data: [], exception: error }));
});

router.get('/usuario/:email/:senha', function (req, res, next) {
    if (typeof req.params.email == 'undefined' || typeof req.params.senha == 'undefined') {
        return res.status(400).json({ error: true, data: [], exception: "Invalid parameter" });;
    }
    const email = req.params.email;
    const senha = req.params.senha;
    model.usuario.findAll({
        where: {
            email: email,
            senha: senha
        }
    })
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error: true, data: [], exception: error }));
});

router.get('/time', function (req, res, next) {
    let query = "SELECT b.*, a.id_usuario, a.status, a.posicao, a.numero_camisa, a.funcao, c.cep, c.latitude, c.longitude, c.logradouro, c.numero, c.complemento, c.bairro, c.cidade, c.UF, c.titulo, d.nome as nome_usuario, d.email, d.cel, d.ativo FROM `usuario_time` a INNER JOIN `time` b ON a.id_time = b.id_time INNER JOIN `endereco` c ON b.id_endereco = c.id_endereco INNER JOIN `usuario` d ON a.id_usuario = d.id_usuario";
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error: true, data: [], exception: error }));
});

router.get('/time/:idusuario', function (req, res, next) {
    if (typeof req.params.idusuario == 'undefined') {
        return res.status(400).json({ error: true, data: [], exception: "Invalid parameter" });;
    }
    const id = req.params.idusuario;
    let query = "SELECT b.*, a.status, a.posicao, a.numero_camisa, a.funcao, c.cep, c.latitude, c.longitude, c.logradouro, c.numero, c.complemento, c.bairro, c.cidade, c.UF, c.titulo FROM `usuario_time` a INNER JOIN `time` b ON a.id_time = b.id_time INNER JOIN `endereco` c ON b.id_endereco = c.id_endereco WHERE a.id_usuario = '{ID}'";
    query = query.replace('{ID}', id);
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error: true, data: [], exception: error }));
});

router.get('/programacao/:idtime', function (req, res, next) {
    if (typeof req.params.idtime == 'undefined') {
        return res.status(400).json({ error: true, data: [], exception: "Invalid parameter" });;
    }
    const id = req.params.idtime;
    model.programacao.findAll({
        where: {
            id_time: id
        }
    })
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error: true, data: [], exception: error }));
});

router.get('/endereco/:id', function (req, res, next) {
    if (typeof req.params.id == 'undefined') {
        return res.status(400).json({ error: true, data: [], exception: "Invalid parameter" });;
    }
    const id = req.params.id;
    model.endereco.findAll({
        where: {
            id_endereco: id
        }
    })
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error: true, data: [], exception: error }));
});

router.get('/jogo/:id', function (req, res, next) {
    if (typeof req.params.id == 'undefined') {
        return res.status(400).json({ error: true, data: [], exception: "Invalid parameter" });;
    }
    const id = req.params.id;
    model.jogo.findAll({
        where: {
            id_jogo: id
        }
    })
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error: true, data: [], exception: error }));
});

router.get('/jogo/time/:idtime', function (req, res, next) {
    if (typeof req.params.idtime == 'undefined') {
        return res.status(400).json({ error: true, data: [], exception: "Invalid parameter" });;
    }
    const id = req.params.idtime;
    model.jogo.findAll({
        where: {
            [Op.or]: [{ id_time_1: id }, { id_time_2: id }]
        }
    })
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error: true, data: [], exception: error }));
});

router.get('/avaliacao/:id', function (req, res, next) {
    if (typeof req.params.id == 'undefined') {
        return res.status(400).json({ error: true, data: [], exception: "Invalid parameter" });;
    }
    const id = req.params.id;
    model.avaliacao.findAll({
        where: {
            id_avaliacao: id
        }
    })
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error: true, data: [], exception: error }));
});

router.get('/avaliacao/jogo/:id', function (req, res, next) {
    if (typeof req.params.id == 'undefined') {
        return res.status(400).json({ error: true, data: [], exception: "Invalid parameter" });;
    }
    const id = req.params.id;
    model.avaliacao.findAll({
        where: {
            id_jogo: id
        }
    })
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error: true, data: [], exception: error }));
});

router.get('/avaliacao/time/:id', function (req, res, next) {
    if (typeof req.params.id == 'undefined') {
        return res.status(400).json({ error: true, data: [], exception: "Invalid parameter" });;
    }
    const id = req.params.id;
    model.avaliacao.findAll({
        where: {
            id_time_avaliado: id
        }
    })
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error: true, data: [], exception: error }));
}); */


// /////////////////////////////////////
// MÉTODOS DYNAMIC 
// /////////////////////////////////////
/* router.post('/dynamic/', function (req, res, next) {
    sequelize.query(req.body.query, { type: sequelize.QueryTypes.SELECT })
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error: true, data: [], exception: error }));
}); */



// /////////////////////////////////////
// DATAX METHODS
// /////////////////////////////////////
router.get('/userbycellphone', usuarioController.getUserByCellphone);


module.exports = router;
