

//Find the inventory of each product type using arrow functions
//Pass the products as parameter to the function
const findProductInventory = (products)=>{
    return products.reduce((inventory,product)=>{
        const presentedItem=inventory.find(item =>item.productName===product.productName);
        if(presentedItem){
            presentedItem.stock++;
        }
        else{
            inventory.push({productName:product.productName,stock:1})
        }
        return inventory;
    },[]);
};

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    findProductInventory
}