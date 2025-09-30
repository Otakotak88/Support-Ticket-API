export function extractQueryParams(query){
    return query.slice(1).split("&").reduce((currentQuery, newQuery) => {
        const [ key, value] = newQuery.split("=")

        currentQuery[key] = value

        return currentQuery
    }, {})
}
