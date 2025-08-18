import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/components/Search.css';

export function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <div className="search-bar">
        
        <span className="search-icon">
          <i className="bi bi-bag"></i>
        </span>

        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
