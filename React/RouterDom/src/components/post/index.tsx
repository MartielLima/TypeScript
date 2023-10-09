import { useParams } from "react-router-dom"

export const Post = () => {
    const params = useParams()
    console.log(params)

    const {id} = params

    return (
        <h1>Post {id}</h1>
    )
}