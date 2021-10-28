import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import listToTreeConverter from "../utils/ListToTreeConverter";
import { sidebardata } from "../utils/sidebardata";
//converting flat json data to tree view data for sidebar view generation
const sidebarData = listToTreeConverter(sidebardata);
//console.log(sidebarData);

const Sidebar = () => {
    const [navData, setNavData] = useState([]);
    useEffect(() => {
        setNavData(sidebarData); //useEffect is used to set the the data to current ccomponent
    },
        []);

    return (
        <div className="kt-sideleft">
            <ul className="nav kt-sideleft-menu">

                {navData.map((tab) => (
                    <li className="nav-item" key={tab.id}>
                        <Link to={tab.url} className="nav-link with-sub" >
                            {/* <i className= {tab.icon}></i> */}
                            {tab.name}
                        </Link>
                        {
                        <ul className="nav nav-sub-sub kt-sideleft-menu">
                            {tab.childMenus &&
                            tab.childMenus.map((child) => (
                                child.subChildMenus ?
                                <li className="nav-item" key={child.id}>
                                    <Link to={child.url} className="nav-link with-sub child-with-subchild">
                                        <i className={child.icon}></i>
                                        {child.name}
                                    </Link>
                                    <ul className="nav-sub">
                                        {child.subChildMenus &&
                                            child.subChildMenus.map((subChild) => (
                                                <li className="nav-item" key={subChild.id}>
                                                    <Link to={subChild.url} className="nav-link " >
                                                    <i className={subChild.icon}></i>
                                                        {subChild.name}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </li> :
                                <li className="nav-item" key={child.id}>
                                    <Link to={child.url} className="nav-link " >
                                    <i className={child.icon}></i>
                                        {child.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;