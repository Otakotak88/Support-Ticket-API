import fs from "node:fs/promises"

const DATABASE_PATH = new URL ("db.json", import.meta.url)

export class Database{
    #database = {}

    constructor(){
        fs.readFile(DATABASE_PATH, "utf-8")
        .then(data => this.#database = JSON.parse(data))
        .catch(() => this.#persist())
    }

    #persist(){
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
    }

    insert(table, data){
        if(Array.isArray(this.#database[table])){
            this.#database[table].push(data)
        } else{
            this.#database[table] = [data]
        }

        this.#persist()
    }

    select(table, filters){
        let data = this.#database[table] ?? []

        if(filters){
            data = data.filter((ticket) => {
                return Object.entries(filters).some(([key, value]) => {
                    return ticket[key].toLowerCase().includes(value.toLowerCase())
                })
            })
        }

        return data
    }
    
    update(table, id, data){
        const rowIndex = this.#database[table].findIndex((ticket) => {
            return ticket.id === id
        })

        if(rowIndex >= 0){
            this.#database[table][rowIndex] = {
                ...this.#database[table][rowIndex],
                ...data
            }            
        } else{
            return `Não foi possível encontrar o produto com id ${id}`
        }

        this.#persist()

        return this.#database[table][rowIndex]
    }

    delete( table, id ){
        const rowIndex = this.#database[table].findIndex((ticket) => {
            return ticket.id === id
        })

        if(rowIndex >= 0){
            this.#database[table].splice( rowIndex, 1)
        } else {
            return `Não foi possível encontrar o produto com id ${id}`
        }

        this.#persist()

        return null
    }
}