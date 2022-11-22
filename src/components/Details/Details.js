import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as productService from "../../services/productService";

const Details = () => {
    const [currentProduct, setCurrentProduct] = useState({});
    const { productId } = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        productService.getOne(productId)
            .then(product => setCurrentProduct(product));
    }, [productId]);

    return (
        <section id="details">
            <div id="details-wrapper">
                <p id="details-title">Shoe Details</p>
                <div id="img-wrapper">
                    <img src={currentProduct.imageUrl} alt="product" />
                </div>
                <div id="info-wrapper">
                    <p>
                        Brand: <span id="details-brand">{currentProduct.brand}</span>
                    </p>
                    <p>
                        Model: <span id="details-model">{currentProduct.model}</span>
                    </p>
                    <p>
                        Release date: <span id="details-release">{currentProduct.release}</span>
                    </p>
                    <p>
                        Designer: <span id="details-designer">{currentProduct.designer}</span>
                    </p>
                    <p>
                        Value: <span id="details-value">{currentProduct.value}</span>
                    </p>
                </div>
                {user._id === currentProduct._ownerId
                    ? <div id="action-buttons">
                        <Link to={`/dashboard/details/${currentProduct._id}/edit`} id="edit-btn">
                            Edit
                        </Link>
                        <Link to={`/dashboard/details/${currentProduct._id}/delete`} id="delete-btn">
                            Delete
                        </Link>
                    </div>
                    : <Link className="details-btn">Buy</Link>
                }
            </div>
        </section>
    );
}

export default Details;