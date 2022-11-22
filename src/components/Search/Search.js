import { useState } from "react";
import * as productService from "../../services/productService";
import ResultItem from "./ResultItem";


const Search = () => {
    const [product, setProduct] = useState([]);
    const [query, setQuery] = useState({
        queryStr: ''
    });
    const isEmpty = Object.keys(product).length === 0;

    const searchHandler = (ev) => {
        ev.preventDefault();

        if (query.queryStr !== '') {
            productService.searchProduct(query.queryStr)
                .then(result => setProduct(result));
        }
    }

    const changeHandler = (ev) => {
        setQuery(state => ({
            ...state,
            queryStr: ev.target.value
        }));
    }

    return (
        <section id="search">
            <h2>Search by Brand</h2>
            <form className="search-wrapper cf" onSubmit={(ev) => searchHandler(ev)}>
                <input
                    id="#search-input"
                    type="text"
                    name="search"
                    placeholder="Search here..."
                    required=""
                    onChange={(ev) => changeHandler(ev)}
                />
                <button type="submit">Search</button>
            </form>
            <h3>Results:</h3>
            <div id="search-container">
                {!isEmpty
                    ? <ul className="card-wrapper">
                        {product.map(x => <ResultItem key={x._id} product={x} />)}
                    </ul>
                    : <h2>There are no results found.</h2>}
            </div>
        </section>
    );
}

export default Search;