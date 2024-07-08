import { FastifyInstance } from "fastify";

const testRoutes = async(app:FastifyInstance)=>{

   app.get('/',()=>{
     return '<h1>Hello, World!</h1>';
   })
}

export default testRoutes;