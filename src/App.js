import './App.css';
import { Header } from './Components/Header';
import { Route, Routes } from 'react-router-dom';
//components
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import EmployeeDashboard from "./Components/EmployeeDashboard/EmployeeDashboard";
import { Chat } from './Components/Applications/Chat';
import Calendar from "./Components/Applications/Calendar";
import { Calls } from "./Components/Applications/Calls";
import { Email } from "./Components/Applications/Email";
import { FileManager } from "./Components/Applications/FileManager";
import { Contacts } from "./Components/Applications/Contacts";
import { AllEmployees } from "./Components/Employees/AllEmployees";
import { Holidays } from "./Components/Employees/Holidays";
import { LeavesAdmin } from "./Components/Employees/LeavesAdmin";
import { LeavesEmployee } from "./Components/Employees/LeavesEmployee";
import { LeaveSettings } from "./Components/Employees/LeaveSettings";
import { AttendanceAdmin } from "./Components/Employees/AttendanceAdmin";
import { AttendanceEmployee } from "./Components/Employees/AttendanceEmployee";
import { Departments } from "./Components/Employees/Departments";
import { Designations } from "./Components/Employees/Designations";
import { Timesheet } from "./Components/Employees/Timesheet";
import { ShiftAndSchedule } from "./Components/Employees/ShiftAndSchedule";
import { Overtime } from "./Components/Employees/Overtime";
import { Tasks } from "./Components/Projects/Tasks";
import { Projects } from "./Components/Projects/Projects";
import { TaskBoard } from "./Components/Projects/TaskBoard";
import { Estimates } from "./Components/Sales/Estimates";
import { Invoices } from "./Components/Sales/Invoices";
import { Payments } from "./Components/Sales/Payments";
import { ProvidentFund } from "./Components/Sales/ProvidentFund";
import { Taxes } from "./Components/Sales/Taxes";
import { Expenses } from "./Components/Sales/Expenses";
import { BudgetRevenues } from "./Components/Accounting/BudgetRevenues";
import { BudgetExpenses } from "./Components/Accounting/BudgetExpenses";
import { Budgets } from "./Components/Accounting/Budgets";
import { Categories } from "./Components/Accounting/Categories";
import { EmployeeSalary } from "./Components/Payroll/EmployeeSalary";
import { PayrollItems } from "./Components/Payroll/PayrollItems";
import { Payslip } from "./Components/Payroll/Payslip";
import { ExpenseReport } from './Components/Reports/ExpenseReport';
import { InvoiceReport } from './Components/Reports/InvoiceReport';
import { PaymentsReport } from './Components/Reports/PaymentsReport';
import { ProjectReport } from './Components/Reports/ProjectReport';
import { TaskReport } from './Components/Reports/TaskReport';
import { UserReport } from './Components/Reports/UserReport';
import { EmployeeReport } from './Components/Reports/EmployeeReport';
import { PayslipReport } from './Components/Reports/PayslipReport';
import { AttendanceReport } from './Components/Reports/AttendanceReport';
import { LeaveReport } from './Components/Reports/LeaveReport';
import { DailyReport } from './Components/Reports/DailyReport';
import { PerformanceIndicator } from './Components/Performance/Performance/PerformanceIndicator';
import { PerformanceReview } from './Components/Performance/Performance/PerformanceReview';
import { PerformanceAppraisal } from './Components/Performance/Performance/PerformanceAppraisal';
import { GoalList } from './Components/Performance/Goals/GoalList';
import { GoalType } from './Components/Performance/Goals/GoalType';
import { TrainingList } from './Components/Performance/Training/TrainingList';
import { Trainers } from './Components/Performance/Training/Trainers';
import { TrainingType } from './Components/Performance/Training/TrainingType';
import { UserDashboard } from './Components/Jobs/UserDashboard';
import { JobsDashboard } from './Components/Jobs/JobsDashboard';
import { ManageJobs } from './Components/Jobs/ManageJobs';
import { ManageResumes } from './Components/Jobs/ManageResumes';
import { ShortlistCandidates } from './Components/Jobs/ShortlistCandidates';
import { InterviewQuestions } from './Components/Jobs/InterviewQuestions';
import { OfferApprovals } from './Components/Jobs/OfferApprovals';
import { ExperienceLevel } from './Components/Jobs/ExperienceLevel';
import { CandidatesList } from './Components/Jobs/CandidatesList';
import { ScheduleTiming } from './Components/Jobs/ScheduleTiming';
import { AptitudeResults } from './Components/Jobs/AptitudeResults';
import { EmployeeProfile } from './Components/Pages/Profile/EmployeeProfile';
import { ClientProfile } from './Components/Pages/Profile/ClientProfile';
import { Login } from './Components/Pages/Authentication/Login';
import { Register } from './Components/Pages/Authentication/Register';
import { ForgotPassword } from './Components/Pages/Authentication/ForgotPassword';
import { OTP } from './Components/Pages/Authentication/OTP';
import { LockScreen } from './Components/Pages/Authentication/LockScreen';
import { Error404 } from './Components/Pages/ErrorPages/Error404';
import { Error500 } from './Components/Pages/ErrorPages/Error500';
import { SubscriptionsAdmin } from './Components/Pages/Subscriptions/SubscriptionsAdmin';
import { SubscribedCompanies } from './Components/Pages/Subscriptions/SubscribedCompanies';
import { SubscriptionsCompany } from './Components/Pages/Subscriptions/SubscriptionsCompany';
import { Search } from './Components/Pages/Pages/Search';
import { FAQ } from './Components/Pages/Pages/FAQ';
import { Terms } from './Components/Pages/Pages/Terms';
import { PrivacyPolicy } from './Components/Pages/Pages/PrivacyPolicy';
import { BlankPage } from './Components/Pages/Pages/BlankPage';
import { BasicInputs } from './Components/FormsTables/Forms/BasicInputs';
import { InputGroups } from './Components/FormsTables/Forms/InputGroups';
import { HorizantalForm } from './Components/FormsTables/Forms/HorizontalForm';
import { VerticalForm } from './Components/FormsTables/Forms/VerticalForm';
import { FormMask } from './Components/FormsTables/Forms/FormMask';
import { FormValidation } from './Components/FormsTables/Forms/FormValidation';
import { BasicTables } from './Components/FormsTables/Tables/BasicTables';
import { DataTable } from './Components/FormsTables/Tables/DataTable';
import { Clients } from './Components/IndividualRouters/Clients';
import { Leads } from './Components/IndividualRouters/Leads';
import { Policies } from './Components/IndividualRouters/Policies';
import { Tickets } from './Components/IndividualRouters/Tickets';
import { Promotion } from './Components/IndividualRouters/Promotion';
import { Resignation } from './Components/IndividualRouters/Resignation';
import { Termination } from './Components/IndividualRouters/Termination';
import { Assets } from './Components/IndividualRouters/Assets';
import { Knowledgebase } from './Components/IndividualRouters/Knowledgebase';
import { Activities } from './Components/IndividualRouters/Activities';
import { Users } from './Components/IndividualRouters/Users';
import { Settings } from './Components/IndividualRouters/Settings';
import { Components } from './Components/IndividualRouters/Components';
import { Documentation } from './Components/IndividualRouters/Documentation';
import { ChangeLog } from './Components/IndividualRouters/ChangeLog';
import { Level1 } from './Components/MultiLevel/Level1';
import { Level2 } from './Components/MultiLevel/Level2';
import { Level3 } from './Components/MultiLevel/Level3';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="employeedashboard" element={<EmployeeDashboard />} />
        {/*Applications */}
        <Route path="chat" element={<Chat />} />
        <Route path="calls" element={<Calls />} />
        <Route path="calender" element={<Calendar />} />
        <Route path="email" element={<Email />} />
        <Route path="filemanager" element={<FileManager />} />
        <Route path="contacts" element={<Contacts />} />

        {/*Employees*/}
        <Route path="allemployees" element={<AllEmployees />} />
        <Route path="holidays" element={<Holidays />} />
        <Route path="leavesAdmin" element={<LeavesAdmin />} />
        <Route path="leavesEmployee" element={<LeavesEmployee />} />
        <Route path="leaveSettings" element={<LeaveSettings />} />
        <Route path="attendanceAdmin" element={<AttendanceAdmin />} />
        <Route path="attendanceEmployee" element={<AttendanceEmployee />} />
        <Route path="departments" element={<Departments />} />
        <Route path="designations" element={<Designations />} />
        <Route path="timesheet" element={<Timesheet />} />
        <Route path="shiftAndSchedule" element={<ShiftAndSchedule />} />
        <Route path="overtime" element={<Overtime />} />

        {/*Projects */}
        <Route path="projects" element={<Projects />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="taskBoard" element={<TaskBoard />} />

        {/*Sales*/}
        <Route path="estimates" element={<Estimates />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="payments" element={<Payments />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="providentFund" element={<ProvidentFund />} />
        <Route path="taxes" element={<Taxes />} />

        {/*Accounting*/}
        <Route path="categories" element={<Categories />} />
        <Route path="budgets" element={<Budgets />} />
        <Route path="budgetExpenses" element={<BudgetExpenses />} />
        <Route path="budgetRevenues" element={<BudgetRevenues />} />

        {/*Payroll*/}
        <Route path="employeeSalary" element={<EmployeeSalary />} />
        <Route path="payslip" element={<Payslip />} />
        <Route path="payrollItems" element={<PayrollItems />} />

        {/*Reports*/}
        <Route path="expenseReport" element={<ExpenseReport />} />
        <Route path="invoiceReport" element={<InvoiceReport />} />
        <Route path="paymentsReport" element={<PaymentsReport />} />
        <Route path="projectReport" element={<ProjectReport />} />
        <Route path="taskReport" element={<TaskReport />} />
        <Route path="userReport" element={<UserReport />} />
        <Route path="employeeReport" element={<EmployeeReport />} />
        <Route path="payslipReport" element={<PayslipReport />} />
        <Route path="attendanceReport" element={<AttendanceReport />} />
        <Route path="leaveReport" element={<LeaveReport />} />
        <Route path="dailyReport" element={<DailyReport />} />

        {/*Performance*/}
        <Route path="performanceIndicator" element={<PerformanceIndicator />} />
        <Route path="performanceReview" element={<PerformanceReview />} />
        <Route path="performanceAppraisal" element={<PerformanceAppraisal />} />

        {/*Goals*/}
        <Route path="goalList" element={<GoalList />} />
        <Route path="goalType" element={<GoalType />} />

        {/*Training*/}
        <Route path="trainingList" element={<TrainingList />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="trainingType" element={<TrainingType />} />

        {/*Jobs*/}
        <Route path="userDashboard" element={<UserDashboard />} />
        <Route path="jobsDashboard" element={<JobsDashboard />} />
        <Route path="manageJobs" element={<ManageJobs />} />
        <Route path="manageResumes" element={<ManageResumes />} />
        <Route path="shortlistCandidates" element={<ShortlistCandidates />} />
        <Route path="interviewQuestions" element={<InterviewQuestions />} />
        <Route path="offerApprovals" element={<OfferApprovals />} />
        <Route path="experienceLevel" element={<ExperienceLevel />} />
        <Route path="candidatesList" element={<CandidatesList />} />
        <Route path="scheduleTiming" element={<ScheduleTiming />} />
        <Route path="aptitudeResults" element={<AptitudeResults />} />

        {/*Profile*/}
        <Route path="employeeProfile" element={<EmployeeProfile />} />
        <Route path="clientProfile" element={<ClientProfile />} />

        {/*Authentication*/}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="otp" element={<OTP />} />
        <Route path="lockScreen" element={<LockScreen />} />

        {/*Error Pages*/}
        <Route path="error404" element={<Error404 />} />
        <Route path="error500" element={<Error500 />} />

        {/*Subscriptions*/}
        <Route path="subscriptionsAdmin" element={<SubscriptionsAdmin />} />
        <Route path="subscriptionsCompany" element={<SubscriptionsCompany />} />
        <Route path="subscribedCompanies" element={<SubscribedCompanies />} />

        {/*Pages*/}
        <Route path="search" element={<Search />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="blankPage" element={<BlankPage />} />

        {/*Forms*/}
        <Route path="basicInputs" element={<BasicInputs />} />
        <Route path="inputGroups" element={<InputGroups />} />
        <Route path="horizontalForm" element={<HorizantalForm />} />
        <Route path="verticalForm" element={<VerticalForm />} />
        <Route path="formMask" element={<FormMask />} />
        <Route path="formValidation" element={<FormValidation />} />

        {/*Tables*/}
        <Route path="basicTables" element={<BasicTables />}/>
        <Route path="dataTable" element={<DataTable />}/>

        {/*Individual outer routers*/}
        <Route path="clients" element={<Clients />}/>
        <Route path="leads" element={<Leads />}/>
        <Route path="policies" element={<Policies />}/>
        <Route path="tickets" element={<Tickets />}/>
        <Route path="promotion" element={<Promotion />}/>
        <Route path="resignation" element={<Resignation />}/>
        <Route path="termination" element={<Termination />}/>
        <Route path="assets" element={<Assets />}/>
        <Route path="knowledgebase" element={<Knowledgebase />}/>
        <Route path="activities" element={<Activities />}/>
        <Route path="users" element={<Users />}/>
        <Route path="settings" element={<Settings />}/>
        <Route path="components" element={<Components />}/>
        <Route path="documentation" element={<Documentation />}/>
        <Route path="changeLog" element={<ChangeLog />}/>

        {/*Multi level routers*/}
        <Route path="level1" element={<Level1 />}/>
        <Route path="level2" element={<Level2 />}/>
        <Route path="level3" element={<Level3 />}/>
      </Routes>
    </div>
  );
}

export default App;
