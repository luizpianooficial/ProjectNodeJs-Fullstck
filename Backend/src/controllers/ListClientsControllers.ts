import { FastifyRequest, FastifyReply } from "fastify";
import {ListClientsServer} from '../server/ListClientServer'


class ListClientsControllers{
    
    async handle(request:FastifyRequest, replay: FastifyReply){

        const ListClientServer = new ListClientsServer()
        const Clients = await ListClientServer.execute()

        replay.send(Clients)

    }

}

export {ListClientsControllers}