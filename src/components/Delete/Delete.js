import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as productService from "../../services/productService";

const Delete = () => {
    const confirm = window.confirm('Are you sure you want to delete?');
    const { user } = useContext(AuthContext);
    const { productId } = useParams();
    const navigate = useNavigate();

    if (confirm) {
        productService.deleteProduct(productId, user.accessToken)
            .then(() => {
                navigate('/dashboard', { replace: true });
            });
    }
}

export default Delete;