import { Card } from "@mui/material";
import React from "react";
import empStyles from "./EmployeeDashboard.module.css";
import { HourglassIcon, BuildingOIcon } from "react-line-awesome";
import { FaCalendarAlt, FaSuitcase, FaUserPlus } from "react-icons/fa";

export default function EmployeeDashboard() {
    return (
        <div style={{ marginLeft: "230px", marginTop: "60px" }}>
            <div style={{ padding: "30px" }}>
                <div className={empStyles.empHeader}>
                    <img src="https://smarthr-react.dreamguystech.com/orange/fa88689eba04e38282d26c8b1a25c274.jpg" alt="employee image"></img>
                    <div className={empStyles.welcomeContainer}>
                        <h3 className={empStyles.welcomeText}>Welcome, John Doe</h3>
                        <p>Monday, 20 May 2019</p>
                    </div>
                </div>

                <div className={empStyles.mainParent}>
                    {/*Today*/}
                    <div className={empStyles.container}>
                        <div>
                            <h1>TODAY</h1>
                            <Card className={`${empStyles.Cards} ${empStyles.firstCard}`}>
                                <div className={empStyles.leftSideContent}>
                                    <div className={empStyles.icons}>
                                        <HourglassIcon />
                                    </div>
                                    <div className={empStyles.firstCardContent}>
                                        <span>Richard Miles is off sick today</span>
                                    </div>
                                </div>
                                <div className={empStyles.imageContainer}>
                                    <img src="https://smarthr-react.dreamguystech.com/orange/14a0679566439f5a0f044226d6203081.jpg" alt="Richard"></img>
                                </div>
                            </Card>
                            <Card className={`${empStyles.Cards}`}>
                                <div className={empStyles.leftSideContent}>
                                    <div className={empStyles.icons}>
                                        <FaSuitcase />
                                    </div>
                                    <div className={empStyles.firstCardContent}>
                                        <span>You are away today</span>
                                    </div>
                                </div>
                                <div className={empStyles.imageContainer}>
                                    <img src="	https://smarthr-react.dreamguystech.com/orange/fa88689eba04e38282d26c8b1a25c274.jpg" alt="John doe"></img>
                                </div>
                            </Card>
                            <Card className={`${empStyles.Cards}`}>
                                <div className={empStyles.leftSideContent}>
                                    <div className={empStyles.icons}>
                                        <BuildingOIcon />
                                    </div>
                                    <div className={empStyles.firstCardContent}>
                                        <span>You are working from home today</span>
                                    </div>
                                </div>
                                <div className={empStyles.imageContainer}>
                                    <img src="	https://smarthr-react.dreamguystech.com/orange/fa88689eba04e38282d26c8b1a25c274.jpg" alt="John doe"></img>
                                </div>
                            </Card>
                        </div>

                        <div>
                            <h1>TOMORROW</h1>
                            <Card className={`${empStyles.Cards}`}>
                                <div className={empStyles.leftSideContent}>
                                    <div className={empStyles.icons}>
                                        <FaSuitcase />
                                    </div>
                                    <div className={empStyles.firstCardContent}>
                                        <span>2 people will be away tomorrow</span>
                                    </div>
                                </div>
                                <div className={empStyles.imageContainer}>
                                    <img src="	https://smarthr-react.dreamguystech.com/orange/fa88689eba04e38282d26c8b1a25c274.jpg" alt="John doe"></img>
                                </div>
                            </Card>
                        </div>

                        <div>
                            <h1>NEXT SEVEN DAYS</h1>
                            <Card className={`${empStyles.Cards}`}>
                                <div className={empStyles.leftSideContent}>
                                    <div className={empStyles.icons}>
                                        <FaSuitcase />
                                    </div>
                                    <div className={empStyles.firstCardContent}>
                                        <span>
                                            2 people are going to be away
                                        </span>
                                    </div>
                                </div>
                                <div className={empStyles.imageContainer}>
                                    <img src="	https://smarthr-react.dreamguystech.com/orange/fa88689eba04e38282d26c8b1a25c274.jpg" alt="John doe"></img>
                                </div>
                            </Card>
                            <Card className={`${empStyles.Cards}`}>
                                <div className={empStyles.leftSideContent}>
                                    <div className={empStyles.icons}>
                                        <FaUserPlus />
                                    </div>
                                    <div className={empStyles.firstCardContent}>
                                        <span>
                                            Your first day is going to be on Thursday
                                        </span>
                                    </div>
                                </div>
                                <div className={empStyles.imageContainer}>
                                    <img src="	https://smarthr-react.dreamguystech.com/orange/fa88689eba04e38282d26c8b1a25c274.jpg" alt="John doe"></img>
                                </div>
                            </Card>
                            <Card className={`${empStyles.Cards}`}>
                                <div className={empStyles.leftSideContent}>
                                    <div className={empStyles.icons}>
                                        <FaCalendarAlt />
                                    </div>
                                    <div className={empStyles.firstCardContent}>
                                        <span>It's Spring Bank Holiday on Monday</span>
                                    </div>
                                </div>
                                <div className={empStyles.imageContainer}>
                                    <img src="	https://smarthr-react.dreamguystech.com/orange/fa88689eba04e38282d26c8b1a25c274.jpg" alt="John doe"></img>
                                </div>
                            </Card>
                        </div>
                    </div>

                    <div className={empStyles.sideContent}>
                        <div className={empStyles.taskStatus}>
                            <h5>PROJECTS</h5>
                            <Card className={`${empStyles.removeBoxShadow} ${empStyles.makePadding}`}>
                                <div className={empStyles.firstRow}>
                                    <div className={empStyles.taskContainer} style={{borderRight: "1px inset"}}>
                                        <h4>71</h4>
                                        <div>TOTAL TASKS</div>
                                    </div>
                                    <div className={empStyles.taskContainer}>
                                        <h4>14</h4>
                                        <div>PENDING TASKS</div>
                                    </div>
                                </div>
                                <div className={empStyles.secondRow}>
                                    <h4>2</h4>
                                    <div>TOTAL PROJECTS</div>
                                </div>
                            </Card>
                        </div>
                        <div>
                            <h5>YOUR LEAVE</h5>
                            <Card className={`${empStyles.removeBoxShadow} ${empStyles.makePadding}`}>
                                <div className={empStyles.firstRow}>
                                    <div className={empStyles.taskContainer} style={{borderRight: "1px inset"}}>
                                        <h4>4.5</h4>
                                        <div>LEAVE TAKEN</div>
                                    </div>
                                    <div className={empStyles.taskContainer}>
                                        <h4>12</h4>
                                        <div>REMAINING</div>
                                    </div>
                                </div>
                                <div className={empStyles.secondRow}>
                                    <button>Apply Leave</button>
                                </div>
                            </Card>
                        </div>
                        <div>
                            <h5>YOUR TIME OFF ALLOWANCE</h5>
                            <Card className={`${empStyles.removeBoxShadow} ${empStyles.makePadding}`}>
                                <div className={empStyles.firstRow}>
                                    <div className={empStyles.taskContainer} style={{borderRight: "1px inset"}}>
                                        <h4>5.0 Hours</h4>
                                        <div>APPROVED</div>
                                    </div>
                                    <div className={empStyles.taskContainer}>
                                        <h4>15 Hours</h4>
                                        <div>REMAINING</div>
                                    </div>
                                </div>
                                <div className={empStyles.secondRow}>
                                    <button>Apply Time Off</button>
                                </div>
                            </Card>
                        </div>
                        <div>
                            <h5>UPCOMING HOLIDAY</h5>
                            <Card className={`${empStyles.removeBoxShadow} ${empStyles.makePadding}`}><h4 className={empStyles.holidays}>Mon 20 May 2019 - Ramzan</h4></Card>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}