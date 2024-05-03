import prismaCliente from "../prisma";


class ListClientsServer{
    async execute(){

        const Clients = await prismaCliente.custome.findMany()
        return Clients

    }
}

export {ListClientsServer}