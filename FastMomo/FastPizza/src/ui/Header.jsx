import {Link} from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'

function Header() {
    return (
        <header>
            <Link to="/"><h1>Fast Momo Company</h1></Link>
            <SearchOrder/>
        </header>
    )
}
export default Header
