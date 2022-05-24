import { getConnection } from "./../database/database";




const getStocks = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT s.nombre, stockActual FROM productosucursal p JOIN sucursal s ON(s.id=p.idSucursal)");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const method={
    getStocks
};