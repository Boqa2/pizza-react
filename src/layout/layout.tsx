import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import { Catigoties } from "../components/UI/Categories";
import Sidebar from "../components/UI/Sidebar";
import { useState } from "react";



const Layout = () => {
    const [efects, setEfects] = useState(false);
    return ( 
        <main className="min-h-screen relative overflow-hidden">
            <Sidebar efects={efects} setEfects={()=>setEfects(false)} />
            <Header setEfects={()=>setEfects(true)} img="/img/logo.png" />
            <Catigoties />
            <Outlet />
            <Toaster/>
            <Footer />
        </main>
     );
}
 
export default Layout;