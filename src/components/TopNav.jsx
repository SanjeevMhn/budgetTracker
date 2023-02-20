import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const TopNav = () => {

    return (
        <nav className='top-nav bg-blue-400 sticky top-0 h-[45px] w-full px-3 flex items-center justify-between'>
            <a href="#" className="brand-link flex p-2 text-xl items-center text-white">
                <span className="icon-container leading-none">
                    <FontAwesomeIcon icon={faWallet} />
                </span>
                <span className="label-text pl-3">
                    Budget Tracker
                </span>
            </a>
            <div className="search-query w-[30%] relative">
                <input type="text" name="search" id="" className="search-texty w-full rounded-full pl-3 pr-[30px] py-1 text-black text-sm" placeholder="Search Query" />
                <span className="icon-container absolute right-[10px]">
                    <FontAwesomeIcon icon={ faMagnifyingGlass } className="text-[12px]"/>
                </span>
            </div>
            <ul className="nav-list text-white flex item-center w-[5%] justify-between">
                <li className="list-item">
                    <a href="#" className="nav-link">
                        <FontAwesomeIcon icon={faBell} />
                    </a>
                </li>
                <li className="list-item">
                    <a href="#" className="nav-link">
                        <FontAwesomeIcon icon={faGear} />
                    </a>
                </li>
            </ul>
        </nav>
    )

}

export default TopNav;