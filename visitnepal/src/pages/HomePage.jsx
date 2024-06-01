import { Link } from "react-router-dom"
import PageNav from "../components/PageNav"

function HomePage() {
    return (
        <div>
            <PageNav/>
            <h1>Visit Nepal</h1>
            <Link to ="/app">AppLayout</Link>
        </div>
    )
}

export default HomePage
