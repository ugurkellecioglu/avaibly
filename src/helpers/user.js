import jwt_decode from 'jwt-decode';
const user = false
const checkAuth = () => {
    const token = localStorage.getItem('token')
    if (!token) return user = false
    const decoded = jwt_decode(token)
    const d = new Date(0);
    d.setUTCSeconds(decoded.exp);
    var dateNow = new Date();
    if (d.getTime() > dateNow.getTime() && token) return user = true
    else return user = false
}

export {
    user, checkAuth
};