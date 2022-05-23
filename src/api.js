const url = 'http://93.95.97.34/api'

const request = async (url, method = 'GET', body) => {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: new Headers({
        'Content-type': 'application/json'
      })
    });

    return await response.json();
}

export const LoginUser = (data) => {
  return request(`${url}/users/login`, 'POST', data);
}

export const userId = (id) => {
  return request(`${url}/users/${id}`);
}

export const getTask = ( (id) => {
  return request(`${url}/tasks/${id}`)
})

export const getTasks = (preFilter,page) => {
  return request(`${url}/tasks`, 'POST', {
    "filter": {
      ...preFilter
    },
    "page": page,
    "limit": 8
  });
}

export const addTask = ( (Data) => {
  return request(`${url}/tasks/createOrEdit`, 'PUT', Data)
})

export const getComment = ( (id) => {
  return request(`${url}/comments/${id}`)
})

export const getUsers = (page) => {
  return request(`${url}/users`, 'POST', {
    "filter": {},
    "page": page,
    "limit": 8
  });
}

export const deleteTask = (id) => {
  return request(`${url}/tasks/${id}`, 'DELETE');
}

export const getUser = (id) => {
  return request(`${url}/users/${id}`);
}

export const getAllUsers = () => {
  return request(`${url}/users/all`);
}