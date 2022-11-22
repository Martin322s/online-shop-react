import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as productService from "../../services/productService";

const Edit = () => {
    const { productId } = useParams();
    const [currentProduct, setCurrentProduct] = useState({});
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const editHandler = (ev) => {
        ev.preventDefault();

        const values = Object.fromEntries(new FormData(ev.target));

        if (Object.values(values).some(x => x === '')) {
            window.alert('All fields are required!');
        } else {
            productService.editProduct(productId, values, user.accessToken)
                .then(() => {
                    navigate(`/dashboard/details/${productId}`, { replace: true });
                });
        }
    }

    useEffect(() => {
        productService.getOne(productId)
            .then(product => setCurrentProduct(product));
    }, [productId]);

    return (
        <section id="edit">
            <div className="form">
                <h2>Edit item</h2>
                <form className="edit-form" onSubmit={(ev) => editHandler(ev)}>
                    <input
                        type="text"
                        name="brand"
                        id="shoe-brand"
                        placeholder="Brand"
                        defaultValue={currentProduct.brand}
                    />
                    <input
                        type="text"
                        name="model"
                        id="shoe-model"
                        placeholder="Model"
                        defaultValue={currentProduct.model}
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        id="shoe-img"
                        placeholder="Image url"
                        defaultValue={currentProduct.imageUrl}
                    />
                    <input
                        type="text"
                        name="release"
                        id="shoe-release"
                        placeholder="Release date"
                        defaultValue={currentProduct.release}
                    />
                    <input
                        type="text"
                        name="designer"
                        id="shoe-designer"
                        placeholder="Designer"
                        defaultValue={currentProduct.designer}
                    />
                    <input
                        type="text"
                        name="value"
                        id="shoe-value"
                        placeholder="Value"
                        defaultValue={currentProduct.value}
                    />
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
    );
}

export default Edit;