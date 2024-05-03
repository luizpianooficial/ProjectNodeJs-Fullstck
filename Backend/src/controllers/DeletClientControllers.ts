import { FastifyRequest, FastifyReply } from "fastify";
import {DeletClient} from '../server/DeletClientServer'


class DeletClientControllers{

    async handle(request:FastifyRequest, replay: FastifyReply){

        const {id} = request.query as {id: string}
        const ClientServer = new DeletClient()
        const Client = await ClientServer.execute({id})
        replay.send(Client)

    }

}

export {DeletClientControllers}