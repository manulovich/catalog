class LocalStorageUtil{
    constructor(){
        this.keyname = 'products';
    }

    getProducts(){
        const productsLocalStorage = localStorage.getItem(this.keyname);

        if(productsLocalStorage){
            return JSON.parse(productsLocalStorage)
        }

        return [];
    }

    putProducts(id){
        let products = this.getProducts();
        let putProductStatus = false;
        const index = products.indexOf(id);

        if(index === -1){
            products.push(id);
            putProductStatus = true;
            localStorage.setItem(this.keyname, JSON.stringify(products));
        } else {
            putProductStatus = false;
            products.splice(index, 1);
            localStorage.setItem(this.keyname, JSON.stringify(products));
        }

        return {putProductStatus, products}
    }
}

let localStorageUtil = new LocalStorageUtil();
