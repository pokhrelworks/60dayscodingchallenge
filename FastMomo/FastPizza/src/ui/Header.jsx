import {Link} from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

function Header() {
    return (
        <header className='bg-yellow-500 uppercase px-4 py-3 border-b-2 border-stone-200' >
            <Link to="/" className='tracking-widest'><h1>Fast Momo Company</h1></Link>
            <SearchOrder/>
            <Username/>
        </header>
    )
}
export default Header
