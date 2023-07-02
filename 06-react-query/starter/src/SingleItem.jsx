import { useMutation, useQueryClient } from "@tanstack/react-query";
import customAxios from "./utils";
import { toast } from "react-toastify";

const SingleItem = ({ item }) => {
  const queryClient = useQueryClient()
  const { mutate: updateTask } = useMutation({
    mutationFn: ({id, isDone}) => customAxios.patch(`/${id}`, { isDone: isDone }),
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries({queryKey: ["tasks"]})
    },
  });
  const { mutate: deleteTask } = useMutation({
    mutationFn: ({id}) => customAxios.delete(`/${id}`),
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries({queryKey: ["tasks"]})
    },
  });
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={(e) => {
          updateTask({id: item.id, isDone: e.target.checked});
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
        onClick={() => deleteTask({id: item.id})}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
