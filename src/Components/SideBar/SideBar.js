import React, { useState } from "react";
import Styles from './SideBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from "@fortawesome/fontawesome-free-solid";
import { ExpandLess, ExpandMore, Settings } from "@mui/icons-material";
import { Scrollbars } from 'react-custom-scrollbars';

import { AiOutlineDashboard } from 'react-icons/ai';
import { BiCube } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai'

import { Link } from "react-router-dom";

export const SideBar = () => {
    const [showDownArrow, setDownArrow] = useState({
        dashBoard: false,
        apps: false,
        employees: false,
        projects: false,
        sales: false,
        accounting: false,
        payroll: false,
        reports: false,
        performance: false,
        goals: false,
        training: false,
        jobs: false,
        profile: false,
        authentication: false,
        errorPages: false,
        subscriptions: false,
        pages: false,
        forms: false,
        tables: false,
        tables: false,
        multiLevel: false
    })

    const handleDashboard = () => {
        setDownArrow({
            dashBoard: !showDownArrow.dashBoard
        })
    }

    return (
        <div className={Styles.sideBarContainer}>
            <Scrollbars>
                <div className={Styles.sideBar}>
                    <ul className={Styles.sideNavigation}>
                        <li className={Styles.menuTitle}><span>Main</span></li>
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={handleDashboard}>
                                <AiOutlineDashboard className={Styles.iconDisplay}/>
                                <span className={Styles.dashBoardText}>Dashboard</span>
                                {showDownArrow.dashBoard ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        {showDownArrow.dashBoard && <div className={Styles.childMenu}>
                                <Link to="/">Admin Dashboard</Link>
                                <Link to="employeedashboard">Employee Dashboard</Link>
                            </div>}
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({apps: !showDownArrow.apps})}>
                                <BiCube className={Styles.iconDisplay}/>
                                <span className={Styles.sideBarText}>Apps</span>
                                {showDownArrow.apps ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        {showDownArrow.apps && <div className={Styles.childMenu}>
                                <Link to="chat">Chat</Link>
                                <Link to="calls">Calls</Link>
                                <Link to="calender">Calendar</Link>
                                <Link to="contacts">Contacts</Link>
                                <Link to="email">Email</Link>
                                <Link to="filemanager">File Manager</Link>
                            </div>}
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <AiOutlineUser className={Styles.iconDisplay}/>
                                <span className={Styles.sideBarText}>Employees</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Clients</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Projects</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Leads</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Tickets</span>
                            </a>
                        </li>
                        <li className={Styles.menuTitle}><span>HR</span></li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Sales</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Accounting</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Payroll</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Policies</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Reports</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.menuTitle}><span>Performance</span></li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Performance</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Goals</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Training</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Promotion</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Resignation</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Termination</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.menuTitle}><span>Administration</span></li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Assets</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Jobs</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Knowledgebase</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Activities</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Users</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#" className={Styles.menuLink}>
                                <Settings className={Styles.settingsIcon} />
                                <span className={Styles.sideBarText}>Settings</span>
                            </a>
                        </li>
                        <li className={Styles.menuTitle}><span>Pages</span></li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Profile</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Authentication</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Error Pages</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Subscriptions</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Pages</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>

                        <li className={Styles.menuTitle}><span>UI Interface</span></li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Components</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Forms</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Tables</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>

                        <li className={Styles.menuTitle}><span>Extras</span></li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Documentation</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Change Log</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <span className={Styles.sideBarText}>Multi Level</span>
                                <span className={Styles.arrow}></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </Scrollbars>
        </div>
    )
}