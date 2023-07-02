import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import customAxios from "./utils";
import { toast } from "react-toastify";

export const useFetchTasks = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customAxios.get("/"),
  });
  return { isLoading, error, data };
};

export const useCreateTask = () => {
  const [newItemName, setNewItemName] = useState("");
  const queryClient = useQueryClient();
  const {
    mutate: createTask,
    isLoading,
    error,
  } = useMutation({
    mutationFn: () => customAxios.post("/", { title: newItemName }),
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task added successfully !");
      setNewItemName("");
    },
  });
  return { createTask, isLoading, error, newItemName, setNewItemName };
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: updateTask } = useMutation({
    mutationFn: ({ id, isDone }) =>
      customAxios.patch(`/${id}`, { isDone: isDone }),
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  return { updateTask };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask } = useMutation({
    mutationFn: ({ id }) => customAxios.delete(`/${id}`),
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  return {deleteTask}
};
