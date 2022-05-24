import express from "express";
import morgan from "morgan";
//routes
import productoRoutes from "./routes/producto.routes"
import productosucursalRoutes from "./routes/productosucursal.routes"
//

const app=express();
//setings
app.set("port",4000);
//middlewares
app.use(morgan("dev"));
app.use(express.json());


//Routes
app.use("/api",productoRoutes,productosucursalRoutes);




export default app;
