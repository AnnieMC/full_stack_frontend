const apiUrl = "http://localhost:3333";

const postCreateUser = (first_name, last_name, username, password) => {
  const body = {
    first_name: first_name,
    last_name: last_name,
    username: username,
    password: password,
  };
  return fetch(`${apiUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((resJson) => {
      return resJson;
    })
    .catch((error) => {
      console.log("Err", error);
      return Promise.reject(error);
    });
};

const postLogin = (username, password) => {
  const body = {
    username: username,
    password: password,
  };
  return fetch(`${apiUrl}/login`, {
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

const postLogout = () => {
  return fetch(`${apiUrl}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
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

export const userService = {
  postCreateUser,
  postLogin,
  postLogout,
};
