import http from "node:http"
import { jsonBodyHandler } from "./middlewares/JsonBodyHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

async function listener(request, response){
    await jsonBodyHandler(request, response)
    routeHandler(request, response)
}


http.createServer(listener).listen(3333)