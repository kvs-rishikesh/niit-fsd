
//Find the inventory of each non-premium products using function chaining
//Pass the products as parameter to the function
const findInventoryUsingFunctionChaining=(products)=> {
    return products
      .filter(product=>product.price<=300)
      .map(product =>({productName:product.productName,stock:1}))
      .reduce((inventory,product)=>{
        const presentItem=inventory.find(item=>item.productName===product.productName);
        if(presentItem){
            presentItem.stock++;
        }
        else{
            inventory.push({productName:product.productName,stock:1});
        }
        return inventory;
      },[]);
  
};
// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    findInventoryUsingFunctionChaining
}


