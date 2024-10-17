const apiUrl = "http://localhost:3333";

const getsearchUsers = () => {
  return fetch(`${apiUrl}/search?q=`)
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

const getSingleUser = (user) => {
  return fetch(`${apiUrl}/users/` + user)
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

export const socialService = {
  getsearchUsers,
  getSingleUser,
};
