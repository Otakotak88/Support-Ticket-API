export function deleteTicket({ request, response, database}){
    const { id } = request.params

    const serverRes = database.delete( "tickets", id )

    if(!serverRes){
        return response.end(`Ticket com id ${id} deletado`)
    } else{
        return response.end(serverRes)
    }
}