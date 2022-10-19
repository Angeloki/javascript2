import {Link, Outlet} from "react-router-dom"

function Layout() {
  return (
    <div>
        <ul>
            <li><link to="/">Home</link></li>
            <li><link to= "/about">About</link></li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Layout