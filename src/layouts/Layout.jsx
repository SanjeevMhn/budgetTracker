import Reat from 'react';
import Sidenav from '../components/Sidenav';
import TopNav from '../components/TopNav';
import { Outlet } from 'react-router-dom';
import "../App.css";

const Layout = () => {

    return (
        <div className='layout-wrapper relative'>
            <TopNav />
            <Sidenav />
            <main className='min-h-[calc(100vh-45px)] ml-[220px] p-[20px]'>
                <Outlet />
            </main>
        </div>
    )

}

export default Layout;