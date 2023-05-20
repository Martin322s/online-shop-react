import { useContext, memo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";


const Logout = memo(() => {
    const { user, userLogout } = useContext(AuthContext);
    const navigate = useNavigate();
    
    try {
        authService.logoutUser(user.accessToken)
            .then(() => {
                userLogout();
                localStorage.clear();
                navigate('/dashboard', { replace: true });
            });
    } catch (err) {
        window.alert(err.message);
    }
});

export default Logout;