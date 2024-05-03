import { FastifyRequest, FastifyReply } from "fastify";
import {CreateClienteServer} from '../server/CreateClientServer'


class CreateClienteController{

    async handle(request:FastifyRequest, replay:FastifyReply){

        const {name, email, dataNacimento} = request.body as {name: string, email:string, dataNacimento: string}
        const ClientServer = new CreateClienteController()
        const Client = await CreateClienteServer.execute({name, email, dataNacimento})

        replay.send(Client)

    }

}   

export {CreateClienteController}