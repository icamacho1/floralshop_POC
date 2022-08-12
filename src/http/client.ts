export class HttpClient {
    targetUrl: string

    constructor() {
        this.targetUrl = 'https://dulces-petalos.herokuapp.com'
    }

    async get(path: string) {
        const response =  await fetch(`${this.targetUrl}${path}`, {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        return await response.json()
    }
}