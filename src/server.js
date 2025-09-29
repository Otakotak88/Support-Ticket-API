import http from "node:http"
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

async function listener(request, response){
    await jsonBodyHandler(request, response)
    routeHandler(request, response)
}


http.createServer(listener).listen(3333)