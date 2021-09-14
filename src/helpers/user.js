import jwt_decode from 'jwt-decode';
const user = () => {
    const token = localStorage.getItem('token')
    if (!token) return false
    const decoded = jwt_decode(token)
    const d = new Date(0);
    d.setUTCSeconds(decoded.exp);
    var dateNow = new Date();
    if (d.getTime() > dateNow.getTime() && token) return true
    else return false
}

export default user