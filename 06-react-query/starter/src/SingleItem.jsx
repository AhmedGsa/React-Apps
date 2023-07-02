import { useDeleteTask, useUpdateTask } from "./react-query-custom-hooks";

const SingleItem = ({ item }) => {
  const { updateTask } = useUpdateTask();
  const { deleteTask } = useDeleteTask();
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={(e) => {
          updateTask({ id: item.id, isDone: e.target.checked });
        }}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask({ id: item.id })}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
