export const fetchUrl = async(url:string) => {
    try {
        const response = await fetch(url,{cache:'no-cache'})
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}