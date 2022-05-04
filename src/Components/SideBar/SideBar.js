import React, { useState } from "react";
import Styles from './SideBar.module.css';
import { Scrollbars } from 'react-custom-scrollbars';
import PaymentsIcon from '@mui/icons-material/Payments';

import { ShareAltIcon, InfoIcon, FileTextIcon, UserSecretIcon } from "react-line-awesome";
import { CubeIcon, UserIcon, TachometerIcon, FilesOIcon } from "react-line-awesome";
import { UsersIcon, RocketIcon, TicketIcon, MoneyCheckIcon } from "react-line-awesome";
import { PieChartIcon, GraduationCapIcon, CrosshairsIcon, EditIcon } from "react-line-awesome";
import { BullhornIcon, ExternalLinkSquareIcon, TimesCircleIcon, ObjectUngroupIcon } from "react-line-awesome";
import { BriefcaseIcon, QuestionIcon, BellIcon, UserPlusIcon } from "react-line-awesome";
import { CogIcon, KeyIcon, ExclamationTriangleIcon, HandOUpIcon } from "react-line-awesome";
import { ColumnsIcon, PuzzlePieceIcon, ObjectGroupIcon, TableIcon } from "react-line-awesome";
import { BsFilePdf } from 'react-icons/bs';

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
                                <TachometerIcon />
                                <span className={Styles.dashBoardText}>Dashboard</span>
                                {showDownArrow.dashBoard ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        {showDownArrow.dashBoard && <div className={Styles.childMenu}>
                            <Link to="/">Admin Dashboard</Link>
                            <Link to="employeedashboard">Employee Dashboard</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ apps: !showDownArrow.apps })}>
                                <CubeIcon />
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
                            <a href="#" onClick={() => setDownArrow({ employees: !showDownArrow.employees })}>
                                <UserIcon />
                                <span className={Styles.sideBarText}>Employees</span>
                                {showDownArrow.employees ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        {showDownArrow.employees && <div className={Styles.childMenu}>
                            <Link to="allemployees">All Employees</Link>
                            <Link to="holidays">Holidays</Link>
                            <Link to="leavesAdmin">Leaves (Admin)</Link>
                            <Link to="leavesEmployee">Leaves (Employee)</Link>
                            <Link to="leaveSettings">Leave Settings</Link>
                            <Link to="attendanceAdmin">Attendance (Admin)</Link>
                            <Link to="attendanceEmployee">Attendance (Employee)</Link>
                            <Link to="departments">Departments</Link>
                            <Link to="designations">Designations</Link>
                            <Link to="timesheet">Timesheet</Link>
                            <Link to="shiftAndSchedule">Shift & Schedule</Link>
                            <Link to="overtime">Overtime</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <UsersIcon />
                                <span className={Styles.sideBarText}>Clients</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ projects: !showDownArrow.projects })}>
                                <RocketIcon />
                                <span className={Styles.sideBarText}>Projects</span>
                                {showDownArrow.projects ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        {showDownArrow.projects && <div className={Styles.childMenu}>
                            <Link to="projects">Projects</Link>
                            <Link to="tasks">Tasks</Link>
                            <Link to="taskBoard">Task Board</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <UserSecretIcon />
                                <span className={Styles.sideBarText}>Leads</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <TicketIcon />
                                <span className={Styles.sideBarText}>Tickets</span>
                            </a>
                        </li>
                        <li className={Styles.menuTitle}><span>HR</span></li>
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ sales: !showDownArrow.sales })}>
                                <FilesOIcon />
                                <span className={Styles.sideBarText}>Sales</span>
                                {showDownArrow.sales ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        {showDownArrow.sales && <div className={Styles.childMenu}>
                            <Link to="estimates">Estimates</Link>
                            <Link to="invoices">Invoices</Link>
                            <Link to="payments">Payments</Link>
                            <Link to="expenses">Expenses</Link>
                            <Link to="providentFund">Provident Fund</Link>
                            <Link to="taxes">Taxes</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ accounting: !showDownArrow.accounting })}>
                                <FilesOIcon />
                                <span className={Styles.sideBarText}>Accounting</span>
                                {showDownArrow.accounting ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        {showDownArrow.accounting && <div className={Styles.childMenu}>
                            <Link to="categories">Categories</Link>
                            <Link to="budgets">Budgets</Link>
                            <Link to="budgetExpenses">Budget Expenses</Link>
                            <Link to="budgetRevenues">Budget Revenues</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ payroll: !showDownArrow.payroll })}>
                                <PaymentsIcon style={{fontSize: "18px"}}/>
                                <span className={Styles.sideBarText}>Payroll</span>
                                {showDownArrow.payroll ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        {showDownArrow.payroll && <div className={Styles.childMenu}>
                            <Link to="employeeSalary">Employee Salary</Link>
                            <Link to="payslip">Payslip</Link>
                            <Link to="payrollItems">Payroll Items</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <BsFilePdf className={Styles.iconDisplay} />
                                <span className={Styles.sideBarText}>Policies</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ reports: !showDownArrow.reports })}>
                                <PieChartIcon />
                                <span className={Styles.sideBarText}>Reports</span>
                                {showDownArrow.reports ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        {showDownArrow.reports && <div className={Styles.childMenu}>
                                <Link to="expenseReport">Expense Report</Link>
                                <Link to="invoiceReport">Invoice Report</Link>
                                <Link to="paymentsReport">Payments Report</Link>
                                <Link to="projectReport">Project Report</Link>
                                <Link to="taskReport">Task Report</Link>
                                <Link to="userReport">User Report</Link>
                                <Link to="employeeReport">Employee Report</Link>
                                <Link to="payslipReport">Payslip Report</Link>
                                <Link to="attendanceReport">Attendance Report</Link>
                                <Link to="leaveReport">Leave Report</Link>
                                <Link to="dailyReport">Daily Report</Link>
                            </div>}
                        <li className={Styles.menuTitle}><span>Performance</span></li>
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ performance: !showDownArrow.performance })}>
                                <GraduationCapIcon />
                                <span className={Styles.sideBarText}>Performance</span>
                                {showDownArrow.performance ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        {showDownArrow.performance && <div className={Styles.childMenu}>
                                <Link to="performanceIndicator">Performance Indicator</Link>
                                <Link to="performanceReview">Performance Review</Link>
                                <Link to="performanceAppraisal">Performance Appraisal</Link>
                            </div>}
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ goals: !showDownArrow.goals })}>
                                <CrosshairsIcon />
                                <span className={Styles.sideBarText}>Goals</span>
                                {showDownArrow.goals ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        {showDownArrow.goals && <div className={Styles.childMenu}>
                                <Link to="goalList">Goal List</Link>
                                <Link to="goalType">Goal Type</Link>
                            </div>}
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ training: !showDownArrow.training })}>
                                <EditIcon />
                                <span className={Styles.sideBarText}>Training</span>
                                {showDownArrow.training ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        {showDownArrow.training && <div className={Styles.childMenu}>
                                <Link to="trainingList">Training List</Link>
                                <Link to="trainers">Trainers</Link>
                                <Link to="trainingType">Training Type</Link>
                            </div>}
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <BullhornIcon />
                                <span className={Styles.sideBarText}>Promotion</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <ExternalLinkSquareIcon />
                                <span className={Styles.sideBarText}>Resignation</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <TimesCircleIcon />
                                <span className={Styles.sideBarText}>Termination</span>
                            </a>
                        </li>
                        <li className={Styles.menuTitle}><span>Administration</span></li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <ObjectUngroupIcon />
                                <span className={Styles.sideBarText}>Assets</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ jobs: !showDownArrow.jobs })}>
                                <BriefcaseIcon />
                                <span className={Styles.sideBarText}>Jobs</span>
                                {showDownArrow.jobs ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        {showDownArrow.jobs && <div className={Styles.childMenu}>
                                <Link to="userDashboard">User Dashboard</Link>
                                <Link to="jobsDashboard">Jobs Dashboard</Link>
                                <Link to="manageJobs">Manage Jobs</Link>
                                <Link to="manageResumes">Manage Resumes</Link>
                                <Link to="shortlistCandidates">Shortlist Candidates</Link>
                                <Link to="interviewQuestions">Interview Questions</Link>
                                <Link to="offerApprovals">Offer Approvals</Link>
                                <Link to="experienceLevel">Experience Level</Link>
                                <Link to="candidatesList">Candidates List</Link>
                                <Link to="scheduleTiming">Schedule Timing</Link>
                                <Link to="aptitudeResults">Aptitude Results</Link>
                            </div>}
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <QuestionIcon />
                                <span className={Styles.sideBarText}>Knowledgebase</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <BellIcon />
                                <span className={Styles.sideBarText}>Activities</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <UserPlusIcon />
                                <span className={Styles.sideBarText}>Users</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#" className={Styles.menuLink}>
                                <CogIcon />
                                <span className={Styles.sideBarText}>Settings</span>
                            </a>
                        </li>
                        <li className={Styles.menuTitle}><span>Pages</span></li>
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ profile: !showDownArrow.profile })}>
                                <UserIcon />
                                <span className={Styles.sideBarText}>Profile</span>
                                {showDownArrow.profile ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ authentication: !showDownArrow.authentication })}>
                                <KeyIcon />
                                <span className={Styles.sideBarText}>Authentication</span>
                                {showDownArrow.authentication ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ errorPages: !showDownArrow.errorPages })}>
                                <ExclamationTriangleIcon />
                                <span className={Styles.sideBarText}>Error Pages</span>
                                {showDownArrow.errorPages ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ subscriptions: !showDownArrow.subscriptions })}>
                                <HandOUpIcon />
                                <span className={Styles.sideBarText}>Subscriptions</span>
                                {showDownArrow.subscriptions ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ pages: !showDownArrow.pages })}>
                                <ColumnsIcon />
                                <span className={Styles.sideBarText}>Pages</span>
                                {showDownArrow.pages ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>

                        <li className={Styles.menuTitle}><span>UI Interface</span></li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <PuzzlePieceIcon />
                                <span className={Styles.sideBarText}>Components</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ forms: !showDownArrow.forms })}>
                                <ObjectGroupIcon />
                                <span className={Styles.sideBarText}>Forms</span>
                                {showDownArrow.forms ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ tables: !showDownArrow.tables })}>
                                <TableIcon />
                                <span className={Styles.sideBarText}>Tables</span>
                                {showDownArrow.tables ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>

                        <li className={Styles.menuTitle}><span>Extras</span></li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <FileTextIcon />
                                <span className={Styles.sideBarText}>Documentation</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#">
                                <InfoIcon />
                                <span className={Styles.sideBarText}>Change Log</span>
                            </a>
                        </li>
                        <li className={Styles.subMenu}>
                            <a href="#" onClick={() => setDownArrow({ multiLevel: !showDownArrow.multiLevel })}>
                                <ShareAltIcon />
                                <span className={Styles.sideBarText}>Multi Level</span>
                                {showDownArrow.multiLevel ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </a>
                        </li>
                    </ul>
                </div>
            </Scrollbars>
        </div>
    )
}