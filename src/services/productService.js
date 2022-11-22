const baseUrl = 'http://localhost:3030/data';

export const getAll = () =>
    fetch(`${baseUrl}/shoes?sortBy=_createdOn%20desc`)
        .then(res => res.json());

export const getOne = (productId) =>
    fetch(`/shoes/${productId}`).then(res => res.json());

export const createProduct = (productData, accessToken) => {
    return fetch(`${baseUrl}/shoes`, {
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
    return fetch(`${baseUrl}/shoes/${productId}`, {
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
    return fetch(`${baseUrl}/shoes/${productId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': accessToken
        }
    })
        .then(res => res.json());
}

export const searchProduct = (queryString) =>
    fetch(`${baseUrl}/shoes?where=brand%20LIKE%20%22${queryString}%22`)
        .then(res => res.json());