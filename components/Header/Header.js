class Header{

    showBask(){
        shopping.render();
    }

    render(){
        ROOT_HEADER.innerHTML = '';

        ROOT_HEADER.insertAdjacentHTML('beforeend', `
            <div class="header-element">
                <div class="header__shop" onclick="header.showBask()">
                    <img src="./img/shopping-cart.svg" class="header__img">
                    <div class="header__count">${localStorageUtil.getProducts().length}</div>
                </div>
            </div>
        `);
    }
}

let header = new Header();