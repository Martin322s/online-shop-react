import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Register = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const registerHandler = (ev) => {
        ev.preventDefault();

        if (Object.values(values).some(x => x === '')) {
            window.alert('All fields are required!');
        } else {
            try {
                if ((values.email && values.password) && values.confirmPassword) {
                    authService.registerUser(values)
                        .then(user => {
                            if (user.accessToken) {
                                userLogin(user);
                                navigate('/dashboard', { replace: true });
                            } else {
                                window.alert('Invalid username or password!');
                            }
                        })
                        .catch(() => {
                            navigate('/register', { replace: true });
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
        <section id="register">
            <div className="form">
                <h2>Register</h2>
                <form className="login-form" onSubmit={(ev) => registerHandler(ev)}>
                    <input
                        type="text"
                        name="email"
                        id="register-email"
                        placeholder="email"
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        id="repeat-password"
                        placeholder="repeat password"
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <button type="submit">login</button>
                    <p className="message">
                        Already registered? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default Register;