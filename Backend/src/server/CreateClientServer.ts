import prismaCliente from "../prisma";


interface CreateClientPros {
    name: string;
    email: string;
    dataNacimento: string;
}

class CreateClienteServer {
    static async execute({ name, email, dataNacimento }: CreateClientPros) {

        if (!name || !email || !dataNacimento) {
            throw new Error("PREENCHA TODOS OS CAMPOS");
        }

        const Client = await prismaCliente.custome.create({

            data: {
                name,
                email,
                dataNacimento: new Date(dataNacimento).toISOString(), 
            }

        });

        return Client;
    }
}

export { CreateClienteServer };
