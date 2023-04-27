export function TodoItem({ id, completed, title,toggleTodo,deleteTodos }) {

    return <li key={id}>
        <label>
            <input
                type="checkbox"
                onChange={(e) => toggleTodo(id, e.target.checked)}
                checked={completed}
            />
            {title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodos(id)}> Delete </button>
    </li>

}
