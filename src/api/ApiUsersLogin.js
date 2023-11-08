export async function registrationUserApi(email, password) {
  return fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      username: email,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.status === 400) {
      return response.json().then((errorResponse) => {
        if (errorResponse.username) {
          throw new Error(errorResponse.username);
        }
        if (errorResponse.email) {
          throw new Error(errorResponse.email);
        }
        if (errorResponse.password) {
          throw new Error(errorResponse.password);
        }
      });
    }
    if (response.status === 500) {
      throw new Error("Сервер сломался");
    }
    return response.json();
  });
  // .then((data) => data);
}

export async function loginUserApi(email, password) {
  return fetch("https://skypro-music-api.skyeng.tech/user/login/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    console.log("response", response);
    if (response.status === 400) {
      return response.json().then((errorResponse) => {
        if (errorResponse.email) {
          throw new Error(errorResponse.email);
        }
        if (errorResponse.password) {
          throw new Error(errorResponse.password);
        }
        throw new Error("Произошла неизвестная ошибка.");
      });
    }
    if (response.status === 401) {
      return response.json().then((errorResponse) => {
        throw new Error(errorResponse.detail);
      });
      
    }
    return response.json();
  });
  // .then((data) => data);
}
