function useAdapters() {
  const adaptArticles = (data) => {
    const articles = data.forEach((el) => adaptArticle(el));
    return articles;
  };

  const adaptArticle = (data) => {
    const article = {
      id: data.id,
      title: data.title,
      category: data.category,
      content: data.content,
      unlikes: data.unlikes,
      likes: data.likes,
      pinched: data.pinched,
      clappings: data.clappings,
      tags: adaptTags(data.tags),
    };
    return article;
  };

  const adaptTags = (data) => {
    const tags = data.forEach((el) => adaptTag(el));
    return tags;
  };

  const adaptTag = (data) => {
    const tag = {
      id: data.id,
      text: data.text,
    };
    return tag;
  };

  return {
    adaptArticles,
    adaptArticle,
    adaptTags,
    adaptTag,
  };
}

export default useAdapters;
