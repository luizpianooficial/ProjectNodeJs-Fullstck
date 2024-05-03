import Fastify from "fastify";
import cors from '@fastify/cors'
import { Routes } from "./routes";
import { error } from "console";


const app = Fastify({ logger: true })
app.setErrorHandler((error, request, replay) =>{
    replay.code(400).send({message: error.message})
})

const start = async () => {

    await app.register(cors)
    await app.register(Routes)

    try{    
        await app.listen({port: 3333})
        console.log("servidor rodando")
    }catch(err){
        process.exit(1)
    }
}

start()