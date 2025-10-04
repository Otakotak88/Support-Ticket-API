export function updateStatus({ request, response, database }){
    const { id } = request.params
    const { solution } = request.body

    const updatedTicket = database.update("tickets", id, { 
        status: "closed", 
        updated_at: new Date(), 
        solution 
    })

    return response.end(JSON.stringify(updatedTicket))
}