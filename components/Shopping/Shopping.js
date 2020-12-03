class Shopping {

    closedBask(){
        ROOT_SHOPPING.innerHTML = '';
        document.body.style.overflow = 'auto';
    }

    render() {
        if(localStorageUtil.getProducts().length > 0){
            let products = document.querySelectorAll('.card__btn--active');
            let html = '';
            let prices = 0;
            products.forEach(item=>{
                let name = item.parentNode.children[0].innerHTML;
                let price = item.parentNode.children[2].innerHTML;

                prices += price / 1;
                html += `
                <li>
                    <div class="shopping__name">${name}</div>
                    <div class="shopping__price">${price}</div>
                </li>
                `;
            });

            ROOT_SHOPPING.insertAdjacentHTML('beforeend', `
                <div class="shopping-element">
                    <div class="shopping__bask">
                        <div class="shopping__closed" onclick="shopping.closedBask()"><span></span></div>
                        <ul class="shopping__products-list">
                            ${html}
                        </ul>
                        <div class="shopping__count-price">
                            <div class="shopping__title">Сумма:</div>
                            <div class="shopping__count">${prices}</div>
                        </div>
                    </div>
                </div>
            `);
            
            document.body.style.overflow = 'hidden';
            document.querySelector('.shopping-element').classList.add('show')
        } else{
            alert('Ваша корзина пуста');
        }
    }
}

let shopping = new Shopping();