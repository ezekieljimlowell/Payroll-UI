import React, { useState } from "react";
import Styles from './SideBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from "@fortawesome/fontawesome-free-solid";
import { Settings } from "@mui/icons-material";
import { Scrollbars } from 'react-custom-scrollbars';

export const SideBar = () => {
    const [showDashBoardContent, setShowDashBoardContent] = useState(false);

    const handleDashBoard = () => {
        setShowDashBoardContent(!showDashBoardContent);
        if(showDashBoardContent) {
            const anchorTag = document
        }
    }

    return (
        <div className={Styles.sideBarContainer}>
            <Scrollbars>
            <div className={Styles.sideBar}>
                <ul className={Styles.sideNavigation}>
                    <li className={Styles.menuTitle}><span>Main</span></li>
                    <li className={Styles.subMenu}>
                        <a href="#" onClick={() => handleDashBoard()}>
                            <div>Dashboard</div>
                            <span className={Styles.arrow}></span>
                        </a>
                    </li>
                    <li className={Styles.subMenu}>
                        <a href="#">
                            <FontAwesomeIcon icon={faCube} className={Styles.cube}></FontAwesomeIcon>
                            <span className={Styles.sideBarText}>Apps</span>
                            <span className={Styles.arrow}></span>
                        </a>
                    </li>
                    <li className={Styles.subMenu}>
                        <a href="#">
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
                            <Settings className={Styles.settingsIcon}/>
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