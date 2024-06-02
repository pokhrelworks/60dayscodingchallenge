import { Link } from "react-router-dom"
import PageNav from "../components/PageNav"
import AppNav from "../components/AppNav"

function HomePage() {
    return (
        <div>
            <PageNav/>
            <AppNav/>
            <h1>Visit Nepal</h1>
            <Link to ="/app">AppLayout</Link>
        </div>
    )
}

export default HomePage
