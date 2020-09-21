export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";
export const GET_PROFILE = "GET_PROFILE";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";

function userLoggedIn(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: { token: data },
  };
}

export function submitLogin(data) {
  return (dispatch) => {
    return fetch(`https://tager.dev.ozitag.com/api/auth/user`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "https://awolfenstein.github.io/",
        // "Access-Control-Allow-Headers": "*",
        // "Access-Control-Allow-Methods": "*",
      },
      body: data,
    })
      .then((response) => {
        if (!response.ok) {
          response.json().then(function (object) {
            dispatch({
              type: LOGIN_FAIL,
              payload: object.errors.email || object.errors,
            });
          });
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((data) => {
        localStorage.setItem("accessToken", data.data.accessToken);
        dispatch(userLoggedIn(data.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
export function getProfile() {
  return (dispatch) => {
    const token = localStorage.getItem("accessToken");
    return fetch(`https://tager.dev.ozitag.com/api/user/profile`, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "*",
        // "Access-Control-Allow-Methods": "*",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((data) => {
        dispatch({
          type: GET_PROFILE,
          payload: data.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function logout() {
  return (dispatch) => {
    const token = localStorage.getItem("accessToken");
    return fetch(`https://tager.dev.ozitag.com/api/user/profile/logout`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "*",
        // "Access-Control-Allow-Methods": "*",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((data) => {
        localStorage.removeItem("accessToken");
        dispatch({
          type: USER_LOGOUT,
          payload: data.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
