import { useLocation } from "react-router-dom"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
    
    const location = useLocation()
    
    const pathsWithFooter = [
        '/',
        '/productos',
        '/nosotros',
    ]

    return <>
        <Navbar />
        {children}
        { pathsWithFooter.includes(location.pathname) && <Footer /> }
    </>
}

export default Layout
