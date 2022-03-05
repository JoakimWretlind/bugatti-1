import Navbar from '../navbar/index'

const Layout = (props) => {
    return (
        <>
            <Navbar />
            <main>{props.children}</main>
        </>
    )
}

export default Layout