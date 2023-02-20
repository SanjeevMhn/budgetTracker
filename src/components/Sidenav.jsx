import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Sidenav = () => {


    let active = {
        backgroundColor: "rgb(107,114,128)"
    }

    return (
        <nav className="main-nav text-white bg-gray-800 w-[220px] h-screen p-2 fixed left-0 top-[45px]">

            <ul className="nav-list text-sm">
                <li className="list-item">
                    <NavLink to={'profile'} style={({isActive})=> isActive ? active : undefined} className="list-link flex items-center p-2 rounded-lg hover:bg-gray-500 mb-2">
                        <span className="icon-container w-[35px] h-[35px] flex-[0_0_35px] bg-slate-200 rounded-full">
                        </span>
                        <span className="user-details pl-4 leading-none flex flex-col">
                            <span className="user-name font-medium text-xs">
                                Sanjeev Maharjan
                            </span>
                            <span className="user-email text-[10px]">
                                sanjeev@gmail.com
                            </span>
                        </span>
                    </NavLink>
                </li>
                <li className="list-item">
                    <NavLink to={'/'} style={({isActive})=> isActive ? active : undefined} className="list-link flex p-2 items-end rounded-lg hover:bg-gray-500 mb-2">
                        <span className="icon-container leading-none">
                            <FontAwesomeIcon icon={faHome} />
                        </span>
                        <span className="label-text pl-4 leading-none">
                            Dashboard
                        </span>
                    </NavLink>
                </li>
                <li className="list-item">
                    <NavLink to={'expenses'} style={({isActive}) => isActive ? active : undefined } className="list-link flex p-2 rounded-lg hover:bg-gray-500 mb-2">
                        <span className="icon-container leading-none">
                            <FontAwesomeIcon icon={faMoneyBill1Wave} />
                        </span>
                        <span className="label-text pl-4 leading-none">
                            Expenses
                        </span>
                    </NavLink>
                </li>

            </ul>
        </nav>
    )

}

export default Sidenav;