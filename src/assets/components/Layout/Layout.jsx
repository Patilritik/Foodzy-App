import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Outlet} from 'react-router-dom'
import Item_Detail from '../Item_Detail/Item_Detail'
import Cart from '../Cart/Cart'

function Layout() {
    return (
        <div>
            <Header />
            {/* <Cart/> */}
            <Outlet/>
            {/* <Item_Detail/> */}
            <Footer />
        </div>
    )
}

export default Layout