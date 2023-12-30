const database = require('../database');

exports.getUserByCellphone = async (req, res) => {
    const { cellphone } = req.query;

    if (!cellphone) return res.status(400).json({
        status: 'failed',
        message: 'please provide a cellphone'
    })

    const userQuery = `SELECT id_usuario, nome, email, cel, data_nasc 
                       FROM usuario 
                       WHERE ativo=1 and cel='${cellphone}' 
                       LIMIT 1`;

    const userResult = await database.query(userQuery, { type: database.QueryTypes.SELECT });

    if (!userResult.length) return res.json(userResult);

    let user = userResult[0];

    const userTeamsQuery = `SELECT b.id_time, b.nome , b.sigla
                            FROM usuario_time a 
                            INNER JOIN time b ON a.id_time = b.id_time 
                            WHERE b.ativo=1 and a.status='admin' and a.id_usuario = '${user.id_usuario}'`;

    const userTeamsResult = await database.query(userTeamsQuery, { type: database.QueryTypes.SELECT });

    user.times = userTeamsResult;

    return res.json(user);
}