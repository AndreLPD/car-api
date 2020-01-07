const mongoose = require('mongoose');
require('../models/cars');

const Car = mongoose.model("cars");

module.exports = {
    async store(req, res){

        const { model, description, color, year } = req.body;

        const car = await Car.create({ model, description, color, year });

        res.status(200).json({car});
    },

    async index(req, res){
        
        const {page = 1} = req.params;
        
        const car = await Car.paginate({active:true},{ page, limit:5 });

        res.status(200).json({car});
    },
    
    async show(req, res){

        const car = await Car.findById(req.params.id);

        return res.status(200).json(car);

    },

    async update(req, res){

        //id para atualizar, body para atualizar, retornar novo doc
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new:true });
        
        res.status(200).json(car);

    },

    async delete(req, res){

        const car = await Car.findByIdAndUpdate(req.params.id, {active:false}, { new:true });
        
        res.status(200).json(car);

    }
}