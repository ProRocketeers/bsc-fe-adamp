const BASE_URL = "http://private-9aad-note10.apiary-mock.com/";

const makeRequest = async (url, method = "GET", data) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${BASE_URL}${url}`, options).then(response =>
      response.text()
    );
    return response && JSON.parse(response);
  } catch (e) {
    console.error("network error", e);
  }
};

export const get = async url => makeRequest(url);
export const post = async (url, data) => makeRequest(url, "POST", data);
export const put = async (url, data) => makeRequest(url, "PUT", data);
export const del = async url => makeRequest(url, "DELETE");
