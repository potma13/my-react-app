import PropTypes from 'prop-types';

function Task({ task, onToggle, onDelete, onEdit }) {
  const { id, description, completed, created } = task;

  const formattedDate = created.toLocaleDateString();

  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">created {formattedDate}</span>
        </label>
        <button className="icon icon-edit" onClick={() => onEdit(id)}></button>
        <button
          className="icon icon-destroy"
          onClick={() => onDelete(id)}
        ></button>
      </div>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    created: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Task;
