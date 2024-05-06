import { FastifyRequest, FastifyReply } from "fastify";
import { DeletClient } from '../server/DeletClientServer';

class DeletClientControllers {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as { id: string }; // Definindo o tipo do parâmetro id
        const ClientServer = new DeletClient();
        const result = await ClientServer.execute({ id });
        reply.send(result);
    }
}

export { DeletClientControllers };