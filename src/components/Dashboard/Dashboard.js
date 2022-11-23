import { useEffect, useState } from "react";
import * as gameService from '../../services/productService';
import SpinnerComponent from "../Spinner/Spinner";
import DashboardItem from "./DashboardItem/DashboardItem";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        gameService.getAll()
            .then(products => {
                setProducts(products);
                setLoading(false);
            });
    }, []);

    return (
        <section id="dashboard">
            <h2>Collectibles</h2>
            {isLoading
                ? <SpinnerComponent />
                : products.length > 0
                    ? <ul className="card-wrapper">
                        {products.map(x => <DashboardItem key={x._id} product={x} />)}
                    </ul>
                    : <h2>There are no items added yet.</h2>
            }
        </section>
    );
}

export default Dashboard;