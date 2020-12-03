function render(){
    products.render();
    header.render();
}

spinnerPage.render();

let CATALOG = [];

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        
        setTimeout(()=>{
            spinnerPage.handleClear();
            render();
        }, 2000);
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render()
    });