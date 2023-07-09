import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_DELIVERY_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([])
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await client.getEntries({
        content_type: "projects",
      });
      setIsLoading(false)
      setProjects(response.items)
    };
    fetchProjects();
  }, []);
  return {projects, isLoading}
};

