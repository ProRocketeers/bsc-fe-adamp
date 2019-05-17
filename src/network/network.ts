const BASE_URL = "http://private-9aad-note10.apiary-mock.com/";

const makeRequest = async (
  url: string,
  method = "GET",
  data?: object | Array<object>
): Promise<object | Array<object> | null> => {
  const options: RequestInit = {
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
    return response ? JSON.parse(response) : null;
  } catch (e) {
    console.error("network error", e);
    return null;
  }
};

export const get = async (
  url: string
): Promise<object | Array<object> | null> => makeRequest(url);

export const post = async (
  url: string,
  data: object | Array<object>
): Promise<object | null> => makeRequest(url, "POST", data);

export const put = async (
  url: string,
  data: object | Array<object>
): Promise<object | null> => makeRequest(url, "PUT", data);

export const del = async (
  url: string
): Promise<null> => {
  return makeRequest(url, "DELETE") as Promise<null>
}
