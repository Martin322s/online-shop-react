import { useEffect, useState } from "react";
import * as gameService from '../../services/productService';
import DashboardItem from "./DashboardItem/DashboardItem";

const Dashboard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(products => setProducts(products));
    }, []);
    
    return (
        <section id="dashboard">
            <h2>Collectibles</h2>
            {products.length > 0
                ? <ul className="card-wrapper">
                    {products.map(x => <DashboardItem key={x._id} product={x} />)}
                </ul>
                : <h2>There are no items added yet.</h2>
            }
        </section>
    );
}

export default Dashboard;