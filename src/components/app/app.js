import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    const data = [
        {id: 1, full_name: 'Adi Kambarov', salary: 9000, increase: true},
        {id: 2, full_name: 'Robertov Robert', salary: 8000, increase: true},
        {id: 3, full_name: 'Jone Jonsen', salary: 7000, increase: true},
        {id: 4, full_name: 'Adi', salary: 6000, increase: false},
        {id: 5, full_name: 'Adi Estebes Uulu', salary: 5000, increase: false},
        {id: 6, full_name: 'Adi Kambarov 1', salary: 4000, increase: false},
        {id: 7, full_name: 'Adi Kambarov 2', salary: 3000, increase: false},
        {id: 8, full_name: 'Adi Kambarov 3', salary: 2000, increase: false},
    ]

    return (
        <div className="app">
            <AppInfo />

            <div className="card">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;