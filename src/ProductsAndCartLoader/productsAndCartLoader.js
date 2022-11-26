import { getStoreCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // get products 
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    console.log(products);

    // get cart 
    const saveCart = getStoreCart();
    const initialCart = [];
    for (const id in saveCart) {

        const addedProduct = products.find(productId => productId.id === id);
        if (addedProduct) {
            const quantity = saveCart[id]
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }

    };
    console.log(initialCart)
    return { products, initialCart };
};