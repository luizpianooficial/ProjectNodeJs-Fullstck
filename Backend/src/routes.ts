import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateClienteController } from "./controllers/CreateClientControllers";
import { ListClientsControllers } from "./controllers/ListClientsControllers";
import { DeletClientControllers} from "./controllers/DeletClientControllers";
import { login } from "./server/loginserver";


export async function Routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true };
    });

    fastify.post("/cadastroCliente", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateClienteController().handle(request, reply);
    });
    

    fastify.get("/Clients", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListClientsControllers().handle(request, reply);
    });

    fastify.delete("/Deleteclients/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeletClientControllers().handle(request, reply);
    });

    fastify.post("/login", async (request: FastifyRequest, reply: FastifyReply) => {
        return login(request, reply);
    });
}