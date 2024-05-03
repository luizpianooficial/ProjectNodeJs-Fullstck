import prismaCliente from "../prisma"


interface DeletClientProps{
    id: string
}


class DeletClient{

    async execute({id}:DeletClientProps){

        if(!id){
            throw new Error("Solicitação invalida")
        }

        const findClients = await prismaCliente.custome.findFirst({
            where:{
                id:id
            }
        })

        if(!findClients){
            throw new Error("Cliente não existe")
        }

        await prismaCliente.custome.delete({
            where:{
                id:findClients.id
            }
        })

        return {message:"Cliente deletado com sucesso "}
        
    }
}

export {DeletClient}