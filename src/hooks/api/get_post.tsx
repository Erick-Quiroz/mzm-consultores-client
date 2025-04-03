// src/hooks/usePosts.ts

import { useState, useEffect } from "react";
import { Get_Post } from "@/actions/actions";
import { Publicacion } from "@prisma/client";

const usePosts = () => {
  const [posts, setPosts] = useState<Publicacion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await Get_Post();
        setPosts(postsData);
      } catch (err) {
        console.error(err);
        setError("❌ Error al obtener las publicaciones");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default usePosts;
