import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const DashboardItem = ({ product }) => {
    const { user } = useContext(AuthContext);
    return (
        <li className="card">
            <img src={product.imageUrl} alt="travis" />
            <p>
                <strong>Brand: </strong>
                <span className="brand">{product.brand}</span>
            </p>
            <p>
                <strong>Model: </strong>
                <span className="model">{product.model}</span>
            </p>
            <p>
                <strong>Value:</strong>
                <span className="value">{product.value}</span>$
            </p>
            {user.accessToken
                ? <Link
                    className="details-btn"
                    to={`details/${product._id}`}>
                    Details
                </Link>
                : null
            }
        </li>
    );
}

export default DashboardItem;