import React, { useState } from "react";
import Styles from './Header.module.css';
import SearchIcon from "@mui/material/Icon";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { MenuItem, Select } from "@mui/material";
import US_flag from '../Images/US_flag.png';
import French_flag from '../Images/France.png';
import German_flag from '../Images/German_flag.png';
import Spain_flag from '../Images/Spain_flag.png';
import { SideBar } from "./SideBar/SideBar";

export const Header = () => {
    const [language, setLanguage] = useState(10);
    const [showSideBar, setShowSideBar] = useState(true);

    const handleLanguage = (e) => {
        setLanguage(e.target.value);
    }

    const handleSideBar = () => {
        setShowSideBar(!showSideBar);
    }

    return (
        <div>
            <div className={Styles.navBackground}>
                <div className={Styles.dashboardIconContainer}>
                    <a href="#" className={Styles.dashboardLogo}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODFDRjZDNEIzNDNGMTFFOUE3RUJBMDBFNkE3RUYyMEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODFDRjZDNEMzNDNGMTFFOUE3RUJBMDBFNkE3RUYyMEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MUNGNkM0OTM0M0YxMUU5QTdFQkEwMEU2QTdFRjIwRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MUNGNkM0QTM0M0YxMUU5QTdFQkEwMEU2QTdFRjIwRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjjyJ2oAAA45SURBVHja7F0PbFVX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" width="40" height="40" alt=""></img>
                    </a>
                </div>
                <a className={Styles.menuLogo} onClick={() => handleSideBar()}>
                    <span className={Styles.menuIcon}>
                        <span></span>
                        <span style={{ width: "15px" }}></span>
                        <span></span>
                    </span>
                </a>
                <div className={Styles.companyName}>
                    <h3>Apton Works</h3>
                </div>
                <ul className={`${Styles.rightSideElements} ${Styles.personalDetails}`}>
                    <li className={Styles.inputContainer}>
                        <div className={Styles.searchBox}>
                            <a href="#" className={Styles.responsiveSearchIcon}>
                                <i className={`${Styles.fa} ${Styles.searchIcon}`}></i>
                            </a>
                            <form>
                                <input className={Styles.searchInput} type="text" placeholder="Search here"></input>
                                <button className={Styles.btn}>
                                    <SearchIcon className={`${Styles.fa} ${Styles.searchIcon}`} />
                                </button>
                            </form>
                        </div>
                    </li>
                    <li className={Styles.languageContainer}>
                        <a className={Styles.navLink}>
                            <Select
                                value={language}
                                onChange={handleLanguage}
                                style={{ border: "none" }}
                                className={Styles.selectLanguage}
                            >
                                <MenuItem value={10}>
                                    <img className={Styles.flagImage} src={US_flag} height="15" width="20" alt="US flag"></img>
                                    English
                                </MenuItem>
                                <MenuItem value={20}>
                                    <img className={Styles.flagImage} src={French_flag} height="15" width="20" alt="France flag"></img>
                                    French
                                </MenuItem>
                                <MenuItem value={30}>
                                    <img className={Styles.flagImage} src={German_flag} height="15" width="20" alt="German flag"></img>
                                    German
                                </MenuItem>
                                <MenuItem value={40}>
                                    <img className={Styles.flagImage} src={Spain_flag} height="15" width="20" alt="Spain flag"></img>
                                    Spain
                                </MenuItem>
                            </Select>
                        </a>
                    </li>
                    <li className={Styles.notificationContainer}>
                        <a className={Styles.navLink}>
                            <NotificationsNoneOutlinedIcon className={Styles.bellIcon} />
                            <span className={Styles.notificationNumberBell}>2</span>
                        </a>
                    </li>
                    <li className={Styles.chatContainer}>
                        <a className={Styles.navLink}>
                            <i className={`fa fa-comment-o`}></i>
                            <span className={Styles.notificationNumberChat}>4</span>
                        </a>
                    </li>
                    <li className={Styles.profileContainer}>
                        <a className={Styles.navLink}>
                            <img src="https://smarthr-react.dreamguystech.com/orange/beddc55afb58f96516b9a7df5056319e.jpg" className={Styles.profilePhoto} alt=""></img>
                            {/* <Select className={Styles.profileDropdown} defaultValue="">
                                <MenuItem value={10}>My Profile</MenuItem>
                                <MenuItem value={20}>Settings</MenuItem>
                                <MenuItem value={30}>Logout</MenuItem>
                            </Select> */}
                        </a>
                    </li>
                </ul>
            </div>
            {showSideBar && <SideBar />}
        </div>
    )
}