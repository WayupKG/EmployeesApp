import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem full_name="jons Smet 1" salary="1222$"/>
            <EmployeesListItem full_name="jons Smet 2" salary="1342$"/>
            <EmployeesListItem full_name="jons Smet 3" salary="14562$"/>
        </ul>
    )
}

export default EmployeesList;