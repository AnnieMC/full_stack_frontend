const apiUrl = "http://localhost:3333";

const getSinglePost = (id) => {
  const body = {
    text: text,
  };
  return fetch(`${apiUrl}/posts/` + id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw "Something went wrong";
      }
    })
    .then((resJson) => {
      return resJson;
    })
    .catch((error) => {
      console.log("Err", error);
      return Promise.reject(error);
    });
};
export const postService = {
  getSinglePost,
};
