import prismaCliente from "../prisma";

interface CreateClientPros {
    name: string;
    email: string;
    nascimento: string;
    password: string;
}

class CreateClienteServer {
    static async execute({ name, email, nascimento, password }: CreateClientPros) {

        if (!name || !email || !nascimento || !password) {
            throw new Error("PREENCHA TODOS OS CAMPOS");
        }

        const Client = await prismaCliente.custome.create({
            data: {
                name,
                email,
                nascimento,
                password
            }
        });

        return Client;
    }
}

export { CreateClienteServer };
