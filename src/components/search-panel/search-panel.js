import './search-panel.css'

function SearchPanel() {
    return (
        <div className="search-panel">
            <input className="form-control search-input" type="text" placeholder="Найти сотрудника"/>
        </div>
    );
}

export default SearchPanel;