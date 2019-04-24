const login = (state = {loginStatus: false}, action) => {
    switch (action.type) {
      case 'LOGIN':
        if( action.name === loginData.username && action.password === loginData.password) {
            return ({ loginStatus: true});
        } else {
            return ({ loginStatus: 'wrongPassword'});
        }
      default: 
        return state
  }
}
  
  export default login;

  const loginData = {
    "username":"naveen",
    "password" :'naveen123'
    }