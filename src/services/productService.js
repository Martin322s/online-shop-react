

export const getAll = () =>
    fetch('http://localhost:3030/data/shoes?sortBy=_createdOn%20desc').then(res => res.json());
export const getOne = (productId) =>
    fetch(`http://localhost:3030/data/shoes/${productId}`).then(res => res.json());

export const createProduct = (productData, accessToken) => {
    return fetch('http://localhost:3030/data/shoes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(productData)
    })
        .then(res => res.json());
}

export const editProduct = (productId, productData, accessToken) => {
    return fetch(`http://localhost:3030/data/shoes/${productId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(productData)
    })
        .then(res => res.json());
}

export const deleteProduct = (productId, accessToken) => {
    return fetch(`http://localhost:3030/data/shoes/${productId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': accessToken
        }
    })
        .then(res => res.json());
}
