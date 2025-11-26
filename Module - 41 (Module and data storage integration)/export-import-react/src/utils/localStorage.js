


const getCartFromLocalStorage =()=>{
    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        const parsedStoredCart = JSON.parse(storedCart);
        return parsedStoredCart;
    }
    return [];
}

const saveToLocalStorage=cart =>{
    const jsonCart = JSON.stringify(cart)
    localStorage.setItem('cart',jsonCart)

}

const addItemToCartLocalStorage =id=>{
    const cart = getCartFromLocalStorage();
    const newCart = [...cart , id]
    saveToLocalStorage(newCart)

}
export {getCartFromLocalStorage as getStoreCart,
     addItemToCartLocalStorage as addToStoreCart}