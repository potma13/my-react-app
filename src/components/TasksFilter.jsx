import PropTypes from 'prop-types';

function TasksFilter({ filter, onFilterChange }) {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' },
  ];

  return (
    <ul className="filters">
      {filters.map(({ id, label }) => (
        <li key={id}>
          <button
            className={filter === id ? 'selected' : ''}
            onClick={() => onFilterChange(id)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}

TasksFilter.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default TasksFilter;
