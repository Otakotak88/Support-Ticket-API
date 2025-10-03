export function update({ request, response, database }){
    const ticketID = request.params.id

    const { equipment, description } = request.body

    const updatedTicket = database.update("tickets", ticketID,{ 
        equipment, 
        description, 
        updated_at: new Date()
    })

    return response.end(JSON.stringify(updatedTicket))
}