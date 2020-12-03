class Products {
    constructor(){
        this.classNameActive = 'card__btn--active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRem = 'Удалить из корзины';
    }

    toggleCard(element, id){
        let {putProductStatus, products} = localStorageUtil.putProducts(id);
        
        if(putProductStatus){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRem;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        header.render();
    }

    render() {
        let textCardBtn = '';
        let activeClass = ''
        let productsList = localStorageUtil.getProducts();
        
        let html = '';
        CATALOG.forEach(({ id, name, img, price }) => {
            
            if(productsList.indexOf(id) !== -1){
                textCardBtn = this.labelRem;
                activeClass = this.classNameActive;
            } else {
                textCardBtn = this.labelAdd;
                activeClass = '';
            }

            html += `
                <div class="card">
                    <h3 class="card__title">${name}</h3>
                    <img src="${img}" class="card__img"/>
                    <p class="card__price">${price}</p>
                    <button class="card__btn ${activeClass}" onclick="products.toggleCard(this, '${id}')">
                        ${textCardBtn}
                    </button>
                </div>
            `;
        });
        ROOT_PRODUCTS.insertAdjacentHTML('beforeend', `
            <div class="products-elements">
                ${html}
            </div>
        `);
    }
}

let products = new Products();