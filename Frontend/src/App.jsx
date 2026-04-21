import "./App.css"
import "./App.scss"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"

export default function HomePage() {

  return (

    <div>
      {/* <Navbar />   stays across all pages */}
      <Outlet />   {/* page content renders here */}
    </div>
  );
}