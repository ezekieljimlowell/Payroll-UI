import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import adminStyles from "./AdminDashboard.module.css";
import { FaCubes, FaDollarSign, FaUser } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LineElement,
    BarElement,
    LinearScale,
    PointElement,
    Tooltip,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LineElement,
    LinearScale,
    PointElement,
    Tooltip,
    BarElement
);

export default function AdminDashboard() {
    const [revenue] = useState({
        labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        datasets: [
            {
                label: "Revenue",
                data: [50000, 70000, 80000, 90000, 100000, 120000, 200000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)'
                ]
            }
        ]
    });
    const [sales] = useState({
        labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        datasets: [
            {
                label: "Fabmerce",
                data: [100, 120, 140, 150, 135, 150, 200],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: "Timaja",
                data: [20, 50, 40, 50, 60, 65, 80],
                backgroundColor: [
                    "blue",
                ],
                borderColor: 'blue',
            }
        ]
    });


    console.log(revenue, sales);

    return (
        <div style={{ marginLeft: "230px", marginTop: "60px" }}>
            <div style={{ padding: "30px" }}>
                <div style={{ marginBottom: "30px" }}>
                    <h3 className={adminStyles.pageTitle}>Welcome Admin!</h3>
                    <div style={{ color: "#6c757d" }}>Dashboard</div>
                </div>

                {/*Status cards*/}
                <div className={adminStyles.cardList}>
                    <div className={adminStyles.statusInfo}>
                        <Card className={adminStyles.cardBody}>
                            <span className={adminStyles.circle}>
                                <FaCubes className={adminStyles.icons} />
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
                                <FaDollarSign className={adminStyles.icons} />
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
                                <IoDiamondOutline className={adminStyles.icons} />
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
                                <FaUser className={adminStyles.icons} />
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
                            <Bar
                                data={revenue}
                            />
                        </Card>
                    </div>
                    <div className={adminStyles.graph}>
                        <Card className={adminStyles.cardBody}>
                            <h3 className={adminStyles.cardTitle}>Sales Overview</h3>
                            <div style={{height: "357px"}}>
                                <Line
                                    data={sales}
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}