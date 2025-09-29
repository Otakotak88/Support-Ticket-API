import { create } from "../controllers/tickets/create.js"
import { list } from "../controllers/tickets/list.js"

export const tickets = [
    {
        method: "GET",
        path: "/tickets",
        controller: list
    },
    {
        method: "POST",
        path: "/tickets",
        controller: create
    },
]