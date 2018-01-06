export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');


  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });
};

export const POST_PROPERTY = 'post_property';
export const postProperty = (params) => async (dispatch, getState, api) => {
  const res = await api.post('/post/property', params);

  dispatch({
    type: POST_PROPERTY,
    payload: res,
    params: params
  });
};

export const FETCH_PROPERTIES = 'fetch_properties';
export const fetchProperties = (params) => async (dispatch, getState, api) => {
  const res = await api.get('/properties', params);

  dispatch({
    type: FETCH_PROPERTIES,
    payload: res,
    params: params
  });
};
