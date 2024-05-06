import { FastifyRequest, FastifyReply } from "fastify";
import { CreateClienteServer } from "../server/CreateClientServer";


class CreateClienteController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, email, nascimento, password } = request.body as { name: string, email: string, nascimento: string, password: string };
        try {
            const Client = await CreateClienteServer.execute({ name, email, nascimento, password });
            reply.send(Client);
        } catch (error: any) {
            console.error('Error creating client:', error);
            reply.status(500).send('Error creating client: ' + error.message);
        }
    }
}

export { CreateClienteController };
