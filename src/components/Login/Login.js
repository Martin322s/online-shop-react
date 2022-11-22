import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    
    const loginHandler = (ev) => {
        ev.preventDefault();

        if (Object.values(values).some(x => x === '')) {
            window.alert('All fields are required!');
        } else {
            try {
                if (values.email && values.password) {
                    authService.loginUser(values)
                        .then(user => {
                            if (user.accessToken) {
                                userLogin(user);
                                navigate('/dashboard', { replace: true });
                            } else {
                                window.alert('Invalid username or password!');
                            }
                        })
                        .catch(() => {
                            navigate('/login', { replace: true });
                            window.alert('Invalid username or password!');
                        });
                } else {
                    window.alert('Invalid username or password!');
                }
            } catch (err) {
                window.alert(err.message);
            }
        }
    }

    const changeHandler = (ev) => {
        setValues(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    return (
        <section id="login">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={(ev) => loginHandler(ev)}>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email"
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <button type="submit">login</button>
                    <p className="message">
                        Not registered? <Link to="/register">Create an account</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default Login;