export const fetchUrl = async(url:string) => {
    try {
        const response = await fetch(url,{cache:'default'})
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}