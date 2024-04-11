export const fetchPostsAndComments = async () => {
    try {
      const response = await fetch('./db.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar os posts e comentários:', error);
      throw error;
    }
  };