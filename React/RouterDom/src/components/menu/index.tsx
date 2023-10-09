import { Nav } from "./styled"
import { Link } from "react-router-dom"

export const Menu = () => {
    return (
        <Nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/posts">post</Link></li>
                <li><Link to="/posts/10">post 10</Link></li>
            </ul>
        </Nav>
    )
}