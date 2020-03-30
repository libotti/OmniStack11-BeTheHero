const connection = require('../database/connection');

module.exports ={
    // async index(request, response) {
    //     const ong_id = request.headers.authorization;
    //     const incidents = await connection('incidents')
    //         .where('ong_id', ong_id)
    //         .select('*');
    //     return response.json(incidents);
    // },

    async create(request, response) {
        const { id } = request.body;

        //console.log(request.body, '->', id);

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();
            
        //console.log(ong);

        if (!ong) {
             return response.status(400).json({ error: 'No ONG found with this ID'});
        }

        return response.json(ong)

    }

}