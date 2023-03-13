import { articlesMock } from "../data/articles-mock";
import { tagsMock } from "../data/tags-mock";
import { addLocal, getToken, removeLocal } from "../utils/localStorage";

function useServices() {
  // AUTH API CALL
  const auth = {
    signup: (data) => {
      return `User ${data.username} created successfully!`;
    },
    login: (data) => {
      if (data.username === "admin" && data.password === "admin123") {
        const authData = {
          user: { id: "1adsflkjadkfei", role: "admin" },
          token: "holaquetal",
        };
        addLocal(authData);
        return authData;
      } else {
        return new Error("User Not Found");
      }
    },
    logout: () => {
      removeLocal();
      return "Successfully logged out";
    },
  };

  // ARTICLE API CALLS
  const articles = {
    get: () => articlesMock,
    getById: (id) => articlesMock.filter((el) => el.id === id),
    delete: (id) =>
      getToken()
        ? articlesMock.filter((el) => el.id !== id)
        : new Error("User not authenticated"),
    modify: (id, data) => {
      const modifyObject = articlesMock.findIndex((el) => el.id === id);
      const modifiedObject = { ...articlesMock[modifyObject], ...data };
      articlesMock[modifyOBject] = modifiedObject;
      return modifiedObject;
    },
    create: (data) => articlesMock.push(data),
  };

  // ARTICLE TAGS CALLS
  const tags = {
    get: () => tagsMock,
    getById: (id) => tagsMock.filter((el) => el.id === id),
    delete: (id) => tagsMock.filter((el) => el.id !== id),
    create: (data) => tagsMock.push(data),
  };

  return { auth, users, tags, articles };
}

export default useServices;
