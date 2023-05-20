import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as productService from "../../services/productService";

const Create = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        brand: '',
        model: '',
        imageUrl: '',
        release: '',
        designer: '',
        value: ''
    });

    const createHandler = (ev) => {
        ev.preventDefault();
        
        if (Object.values(values).some(x => x === '')) {
            window.alert('All fields are required!');
        } else {
            productService.createProduct(values, user.accessToken)
                .then(() => {
                    navigate('/dashboard', { replace: true });
                });
        }
    }

    const changeHandler = (ev) => {
        setValues(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    return (
        <section id="create">
            <div className="form">
                <h2>Add item</h2>
                <form className="create-form" onSubmit={(ev) => createHandler(ev)}>
                    <input
                        type="text"
                        name="brand"
                        id="shoe-brand"
                        placeholder="Brand"
                        onChange={(ev) => changeHandler(ev)}
                        required
                    />
                    <input
                        type="text"
                        name="model"
                        id="shoe-model"
                        placeholder="Model"
                        onChange={(ev) => changeHandler(ev)}
                        required
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        id="shoe-img"
                        placeholder="Image url"
                        onChange={(ev) => changeHandler(ev)}
                        required
                    />
                    <input
                        type="text"
                        name="release"
                        id="shoe-release"
                        placeholder="Release date"
                        onChange={(ev) => changeHandler(ev)}
                        required
                    />
                    <input
                        type="text"
                        name="designer"
                        id="shoe-designer"
                        placeholder="Designer" onChange={(ev) => changeHandler(ev)}
                        required
                    />
                    <input
                        type="text"
                        name="value"
                        id="shoe-value"
                        placeholder="Value" onChange={(ev) => changeHandler(ev)}
                        required
                    />
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
    );
}

export default Create;