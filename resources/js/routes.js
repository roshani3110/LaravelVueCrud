import Company from './components/Company';
import Employee from './components/Employee';
import CreateCompany from './components/Company/create';
import EditCompany from './components/Company/edit';
import ShowCompany from './components/Company/show';
import CreateEmployee from './components/Employee/create';
import EditEmployee from './components/Employee/edit';
import ShowEmployee from './components/Employee/show';

export const routes = [
    {
        path: '/',
        name: 'company',
        component: Company
    },
    {
        name: 'employee',
        path: '/employee',
        component: Employee
    },
    {
        path: '/company/create',
        name: 'create-company',
        component: CreateCompany
    },
    {
        path: '/company/:id',
        name: 'show-company',
        component: ShowCompany
    },
    {
        path: '/company/:id/edit',
        name: 'edit-company',
        component: EditCompany
    },
    {
        path: '/employee/create',
        name: 'create-employee',
        component: CreateEmployee
    },
    {
        path: '/employee/:id',
        name: 'show-employee',
        component: ShowEmployee
    },
    {
        path: '/employee/:id/edit',
        name: 'edit-employee',
        component: EditEmployee
    }
];