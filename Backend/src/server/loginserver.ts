import { FastifyRequest, FastifyReply } from "fastify";
import prismaCliente from "../prisma";

async function login(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = request.body as { email: string, password: string };

    // Verifique se o usuário existe no banco de dados
    const user = await prismaCliente.custome.findFirst({ where: { email } });

    if (!user || user.password !== password) {
        reply.status(401).send({ message: "Credenciais inválidas" });
        return;
    }

    // Se as credenciais estiverem corretas, gerar e enviar token JWT
    const token = generateToken(user.id); // Implemente esta função
    reply.send({ token });
}

// Gere um token JWT (exemplo)
function generateToken(userId: string) {
    // Implemente a lógica para gerar um token JWT com base no userId
}

// Exporte a rota de login
export { login };
