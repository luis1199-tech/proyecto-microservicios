const { Router } = require('express');
const Proyecto = require('../models/Proyecto');
const Cliente = require('../models/Cliente');
const TipoProyecto = require('../models/TipoProyecto');
const Universidad = require('../models/Universidad');
const Etapa = require('../models/Etapa');

const router = Router();

router.get('/', async function(req, res) {
    try {
        const proyectos = await Proyecto.find().populate([
            {
                path: 'cliente', select: 'nombre email'
            },
            {
                path: 'etapa', select: 'nombre'
            },
            {
                path: 'tipoProyecto', select: 'nombre'
            },
            {
                path: 'universidad', select: 'nombre direccion telefono'
            }
        ]);
        res.send(proyectos);
    } catch(error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar proyectos');
    }
});

router.get('/:proyectoId', async function(req, res) {
    try {
        const proyecto = await Proyecto.findById(req.params.proyectoId);
        if (!inventario) {
            return res.status(404).send('Proyecto no existe');
        }
        res.send(proyecto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar proyectos');
    }
});

module.exports = router;