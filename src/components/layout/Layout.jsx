import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./NavBar/NavBar"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const Layout = () => {
  const { pathname } = useLocation();
  console.log(pathname)
  return (
    <>
      <NavBar />
      {pathname === '/' ? <Header /> : null}
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout