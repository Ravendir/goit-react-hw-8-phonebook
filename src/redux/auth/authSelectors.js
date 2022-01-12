export const getIsAuthenticated = (state) => state.auth.token;

export const getUsername = (state) => state.auth.user.name;

export const getUserInfo = ({ auth }) => ({
  token: auth.token,
  name: auth.user.name,
});
