import { Card } from "@mui/material";
import React from "react";
import adminStyles from "./AdminDashboard.module.css";
import { FaCubes, FaDollarSign, FaUser } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { Chart } from 'react-charts';

export default function AdminDashboard() {

    const data = React.useMemo(
        () => [
          {
            label: 'Series 1',
            data: [[2012, "1 million"], [2013, "2 million"], [2014, "3 million"], [2015, "4 million"], [2016, "5 million"]]
          },
          {
            label: 'Series 2',
            data: [[2017, "7 million"], [2018, "6 million"], [2019, "5 million"], [2020, "6 million"], [2021, "6 million"]]
          }
        ],
        []
      )
     
      const axes = React.useMemo(
        () => [
          { primary: true, type: 'ordinal', position: 'bottom' },
          { type: 'ordinal', position: 'left' }
        ],
        []
      )

    return (
        <div style={{ marginLeft: "230px", marginTop: "60px" }}>
            <div style={{ padding: "30px" }}>
                <div style={{marginBottom: "30px"}}>
                    <h3 className={adminStyles.pageTitle}>Welcome Admin!</h3>
                    <div style={{ color: "#6c757d" }}>Dashboard</div>
                </div>

                {/*Status cards*/}
                <div className={adminStyles.cardList}>
                    <div className={adminStyles.statusInfo}>
                        <Card className={adminStyles.cardBody}>
                            <span className={adminStyles.circle}>
                                <FaCubes className={adminStyles.icons}/>
                            </span>
                            <div className={adminStyles.statusDetails}>
                                <h1 className={adminStyles.numbers}>112</h1>
                                <span>Projects</span>
                            </div>
                        </Card>
                    </div>
                    <div className={adminStyles.statusInfo}>
                        <Card className={adminStyles.cardBody}>
                            <span className={adminStyles.circle}>
                                <FaDollarSign className={adminStyles.icons}/>
                            </span>
                            <div className={adminStyles.statusDetails}>
                                <h1 className={adminStyles.numbers}>44</h1>
                                <span>Clients</span>
                            </div>
                        </Card>
                    </div>
                    <div className={adminStyles.statusInfo}>
                        <Card className={adminStyles.cardBody}>
                            <span className={adminStyles.circle}>
                                <IoDiamondOutline className={adminStyles.icons}/>
                            </span>
                            <div className={adminStyles.statusDetails}>
                                <h1 className={adminStyles.numbers}>37</h1>
                                <span>Tasks</span>
                            </div>
                        </Card>
                    </div>
                    <div className={adminStyles.statusInfo}>
                        <Card className={adminStyles.cardBody}>
                            <span className={adminStyles.circle}>
                                <FaUser className={adminStyles.icons}/>
                            </span>
                            <div className={adminStyles.statusDetails}>
                                <h1 className={adminStyles.numbers}>218</h1>
                                <span>Employees</span>
                            </div>
                        </Card>
                    </div>
                </div>

                {/*Graphs*/}
                <div className={adminStyles.statusGraph}>
                    <div className={`${adminStyles.graph} ${adminStyles.makePadding}`}>
                        <Card className={`${adminStyles.cardBody} ${adminStyles.makeDimensions}`}>
                            <h3 className={adminStyles.cardTitle}>Total Revenue</h3>
                            <Chart data={data} axes={axes}/>
                        </Card>
                    </div>
                    <div className={adminStyles.graph}>
                        <Card className={adminStyles.cardBody}>
                            <h3 className={adminStyles.cardTitle}>Sales Overview</h3>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}