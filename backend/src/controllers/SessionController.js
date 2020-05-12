const connection = require('../database/connection');

module.exports = {

    async create (request, response){

        try {
            const { id } = request.body;

            const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

            if (!ong){
                return response.status(400).json( { erros: 'No Ong found with this ID'});

            }
            console.log(ong);
            return response.json(ong);

        } catch (error) {
            console.log(error);
        }
        
    }
}