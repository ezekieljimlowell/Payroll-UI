import React, { useState } from "react";
import Styles from './SideBar.module.css';
import { Scrollbars } from 'react-custom-scrollbars';
import PaymentsIcon from '@mui/icons-material/Payments';

import { ShareAltIcon, InfoIcon, FileTextIcon, UserSecretIcon } from "react-line-awesome";
import { CubeIcon, UserIcon, TachometerIcon, FilesOIcon } from "react-line-awesome";
import { UsersIcon, RocketIcon, TicketIcon } from "react-line-awesome";
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
        multiLevel: false,
        level1: false,
        level2: false,
        level3: false
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
                            <button onClick={handleDashboard}>
                                <TachometerIcon />
                                <span className={Styles.dashBoardText}>Dashboard</span>
                                {showDownArrow.dashBoard ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
                        </li>
                        {showDownArrow.dashBoard && <div className={Styles.childMenu}>
                            <Link to="/">Admin Dashboard</Link>
                            <Link to="employeedashboard">Employee Dashboard</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ apps: !showDownArrow.apps })}>
                                <CubeIcon />
                                <span className={Styles.sideBarText}>Apps</span>
                                {showDownArrow.apps ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
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
                            <button onClick={() => setDownArrow({ employees: !showDownArrow.employees })}>
                                <UserIcon />
                                <span className={Styles.sideBarText}>Employees</span>
                                {showDownArrow.employees ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
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
                            <Link to="clients">
                                <UsersIcon />
                                <span className={Styles.sideBarText}>Clients</span>
                            </Link>
                        </li>
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ projects: !showDownArrow.projects })}>
                                <RocketIcon />
                                <span className={Styles.sideBarText}>Projects</span>
                                {showDownArrow.projects ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
                        </li>
                        {showDownArrow.projects && <div className={Styles.childMenu}>
                            <Link to="projects">Projects</Link>
                            <Link to="tasks">Tasks</Link>
                            <Link to="taskBoard">Task Board</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <Link to="leads">
                                <UserSecretIcon />
                                <span className={Styles.sideBarText}>Leads</span>
                            </Link>
                        </li>
                        <li className={Styles.subMenu}>
                            <Link to="tickets">
                                <TicketIcon />
                                <span className={Styles.sideBarText}>Tickets</span>
                            </Link>
                        </li>
                        <li className={Styles.menuTitle}><span>HR</span></li>
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ sales: !showDownArrow.sales })}>
                                <FilesOIcon />
                                <span className={Styles.sideBarText}>Sales</span>
                                {showDownArrow.sales ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
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
                            <button onClick={() => setDownArrow({ accounting: !showDownArrow.accounting })}>
                                <FilesOIcon />
                                <span className={Styles.sideBarText}>Accounting</span>
                                {showDownArrow.accounting ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
                        </li>
                        {showDownArrow.accounting && <div className={Styles.childMenu}>
                            <Link to="categories">Categories</Link>
                            <Link to="budgets">Budgets</Link>
                            <Link to="budgetExpenses">Budget Expenses</Link>
                            <Link to="budgetRevenues">Budget Revenues</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ payroll: !showDownArrow.payroll })}>
                                <PaymentsIcon style={{ fontSize: "18px" }} />
                                <span className={Styles.sideBarText}>Payroll</span>
                                {showDownArrow.payroll ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
                        </li>
                        {showDownArrow.payroll && <div className={Styles.childMenu}>
                            <Link to="employeeSalary">Employee Salary</Link>
                            <Link to="payslip">Payslip</Link>
                            <Link to="payrollItems">Payroll Items</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <Link to="policies">
                                <BsFilePdf className={Styles.iconDisplay} />
                                <span className={Styles.sideBarText}>Policies</span>
                            </Link>
                        </li>
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ reports: !showDownArrow.reports })}>
                                <PieChartIcon />
                                <span className={Styles.sideBarText}>Reports</span>
                                {showDownArrow.reports ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
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
                            <button onClick={() => setDownArrow({ performance: !showDownArrow.performance })}>
                                <GraduationCapIcon />
                                <span className={Styles.sideBarText}>Performance</span>
                                {showDownArrow.performance ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
                        </li>
                        {showDownArrow.performance && <div className={Styles.childMenu}>
                            <Link to="performanceIndicator">Performance Indicator</Link>
                            <Link to="performanceReview">Performance Review</Link>
                            <Link to="performanceAppraisal">Performance Appraisal</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ goals: !showDownArrow.goals })}>
                                <CrosshairsIcon />
                                <span className={Styles.sideBarText}>Goals</span>
                                {showDownArrow.goals ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
                        </li>
                        {showDownArrow.goals && <div className={Styles.childMenu}>
                            <Link to="goalList">Goal List</Link>
                            <Link to="goalType">Goal Type</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ training: !showDownArrow.training })}>
                                <EditIcon />
                                <span className={Styles.sideBarText}>Training</span>
                                {showDownArrow.training ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
                        </li>
                        {showDownArrow.training && <div className={Styles.childMenu}>
                            <Link to="trainingList">Training List</Link>
                            <Link to="trainers">Trainers</Link>
                            <Link to="trainingType">Training Type</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <Link to="promotion">
                                <BullhornIcon />
                                <span className={Styles.sideBarText}>Promotion</span>
                            </Link>
                        </li>
                        <li className={Styles.subMenu}>
                            <Link to="resignation">
                                <ExternalLinkSquareIcon />
                                <span className={Styles.sideBarText}>Resignation</span>
                            </Link>
                        </li>
                        <li className={Styles.subMenu}>
                            <Link to="termination">
                                <TimesCircleIcon />
                                <span className={Styles.sideBarText}>Termination</span>
                            </Link>
                        </li>
                        <li className={Styles.menuTitle}><span>Administration</span></li>
                        <li className={Styles.subMenu}>
                            <Link to="assets">
                                <ObjectUngroupIcon />
                                <span className={Styles.sideBarText}>Assets</span>
                            </Link>
                        </li>
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ jobs: !showDownArrow.jobs })}>
                                <BriefcaseIcon />
                                <span className={Styles.sideBarText}>Jobs</span>
                                {showDownArrow.jobs ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
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
                            <Link to="knowledgebase">
                                <QuestionIcon />
                                <span className={Styles.sideBarText}>Knowledgebase</span>
                            </Link>
                        </li>
                        <li className={Styles.subMenu}>
                            <Link to="activities">
                                <BellIcon />
                                <span className={Styles.sideBarText}>Activities</span>
                            </Link>
                        </li>
                        <li className={Styles.subMenu}>
                            <Link to="users">
                                <UserPlusIcon />
                                <span className={Styles.sideBarText}>Users</span>
                            </Link>
                        </li>
                        <li className={Styles.subMenu}>
                            <Link to="settings" className={Styles.menuLink}>
                                <CogIcon />
                                <span className={Styles.sideBarText}>Settings</span>
                            </Link>
                        </li>
                        <li className={Styles.menuTitle}><span>Pages</span></li>
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ profile: !showDownArrow.profile })}>
                                <UserIcon />
                                <span className={Styles.sideBarText}>Profile</span>
                                {showDownArrow.profile ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
                        </li>
                        {showDownArrow.profile && <div className={Styles.childMenu}>
                            <Link to="employeeProfile">Employee Profile</Link>
                            <Link to="clientProfile">Client Profile</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ authentication: !showDownArrow.authentication })}>
                                <KeyIcon />
                                <span className={Styles.sideBarText}>Authentication</span>
                                {showDownArrow.authentication ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
                        </li>
                        {showDownArrow.authentication && <div className={Styles.childMenu}>
                            <Link to="login">Login</Link>
                            <Link to="register">Register</Link>
                            <Link to="forgotPassword">Forgot Password</Link>
                            <Link to="otp">OTP</Link>
                            <Link to="lockScreen">Lock Screen</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ errorPages: !showDownArrow.errorPages })}>
                                <ExclamationTriangleIcon />
                                <span className={Styles.sideBarText}>Error Pages</span>
                                {showDownArrow.errorPages ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
                        </li>
                        {showDownArrow.errorPages && <div className={Styles.childMenu}>
                            <Link to="error404">404 Error</Link>
                            <Link to="error500">500 Error</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ subscriptions: !showDownArrow.subscriptions })}>
                                <HandOUpIcon />
                                <span className={Styles.sideBarText}>Subscriptions</span>
                                {showDownArrow.subscriptions ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
                        </li>
                        {showDownArrow.subscriptions && <div className={Styles.childMenu}>
                            <Link to="subscriptionsAdmin">Subscriptions (Admin)</Link>
                            <Link to="subscriptionsCompany">Subscriptions (Company)</Link>
                            <Link to="subscribedCompanies">Subscribed Companies</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ pages: !showDownArrow.pages })}>
                                <ColumnsIcon />
                                <span className={Styles.sideBarText}>Pages</span>
                                {showDownArrow.pages ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
                        </li>
                        {showDownArrow.pages && <div className={Styles.childMenu}>
                            <Link to="search">Search</Link>
                            <Link to="faq">FAQ</Link>
                            <Link to="terms">Terms</Link>
                            <Link to="privacyPolicy">Privacy Policy</Link>
                            <Link to="blankPage">Blank Page</Link>
                        </div>}

                        <li className={Styles.menuTitle}><span>UI Interface</span></li>
                        <li className={Styles.subMenu}>
                            <Link to="components">
                                <PuzzlePieceIcon />
                                <span className={Styles.sideBarText}>Components</span>
                            </Link>
                        </li>
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ forms: !showDownArrow.forms })}>
                                <ObjectGroupIcon />
                                <span className={Styles.sideBarText}>Forms</span>
                                {showDownArrow.forms ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
                        </li>
                        {showDownArrow.forms && <div className={Styles.childMenu}>
                            <Link to="basicInputs">Basic Inputs</Link>
                            <Link to="inputGroups">Input Groups</Link>
                            <Link to="horizontalForm">Horizantal Form</Link>
                            <Link to="verticalForm">Vertical Form</Link>
                            <Link to="formMask">Form Mask</Link>
                            <Link to="formValidation">Form Validation</Link>
                        </div>}
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ tables: !showDownArrow.tables })}>
                                <TableIcon />
                                <span className={Styles.sideBarText}>Tables</span>
                                {showDownArrow.tables ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
                        </li>
                        {showDownArrow.tables && <div className={Styles.childMenu}>
                            <Link to="basicTables">Basic Tables</Link>
                            <Link to="dataTable">Data Table</Link>
                        </div>}
                        <li className={Styles.menuTitle}><span>Extras</span></li>
                        <li className={Styles.subMenu}>
                            <Link to="documentation">
                                <FileTextIcon />
                                <span className={Styles.sideBarText}>Documentation</span>
                            </Link>
                        </li>
                        <li className={Styles.subMenu}>
                            <Link to="changeLog">
                                <InfoIcon />
                                <span className={Styles.sideBarText}>Change Log</span>
                            </Link>
                        </li>
                        <li className={Styles.subMenu}>
                            <button onClick={() => setDownArrow({ multiLevel: !showDownArrow.multiLevel })}>
                                <ShareAltIcon />
                                <span className={Styles.sideBarText}>Multi Level</span>
                                {showDownArrow.multiLevel ? <span className={`${Styles.arrow} ${Styles.rotate}`}></span> : <span className={Styles.arrow}></span>}
                            </button>
                        </li>
                        {showDownArrow.multiLevel && <div className={Styles.childMenu}>
                            <button onClick={() => setDownArrow({
                                multiLevel: true,
                                level1: !showDownArrow.level1
                            })}>
                                <span className={Styles.sideBarText}>Level 1</span>
                                {showDownArrow.level1 ? <span className={`${Styles.multiArrow} ${Styles.multiRotate}`}></span> : <span className={Styles.multiArrow}></span>}
                            </button>
                            {showDownArrow.level1 && <div className={Styles.childMenu}>
                                <button onClick={() => setDownArrow({
                                    multiLevel: true,
                                    level1: true,
                                    level2: !showDownArrow.level2
                                })}>
                                    <span className={Styles.sideBarText}>Level 2</span>
                                    {showDownArrow.level2 ? <span className={`${Styles.multiArrow} ${Styles.multiRotate}`}></span> : <span className={Styles.multiArrow}></span>}
                                </button>
                                {showDownArrow.level2 && <div className={Styles.childMenu}>
                                    <Link to="level3">Level 3</Link>
                                </div>}
                                <Link to="level2">Level 2</Link>
                            </div>}
                            <Link to="level1">Level 1</Link>
                        </div>}
                    </ul>
                </div>
            </Scrollbars>
        </div>
    )
}