import { updateStatus } from "../controllers/tickets/updateStatus.js"
import { create } from "../controllers/tickets/create.js"
import { index } from "../controllers/tickets/index.js"
import { update } from "../controllers/tickets/update.js"
import { deleteTicket } from "../controllers/tickets/delete.js"

export const tickets = [
    {
        method: "GET",
        path: "/tickets",
        controller: index
    },
    {
        method: "POST",
        path: "/tickets",
        controller: create
    },
    {
        method: "PUT",
        path: "/tickets/:id",
        controller: update
    },
    {
        method: "PATCH",
        path: "/tickets/:id/close",
        controller: updateStatus
    },
    {
        method: "DELETE",
        path: "/tickets/:id",
        controller: deleteTicket
    }
]