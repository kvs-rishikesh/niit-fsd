const menu = [
    {
        'category': 'Beverages',
        'name': 'Soft Drink',
        'price': 1.5
    },
    {
        'category': 'Starters',
        'name': 'Garlic Bread',
        'price': 2.8
    },
    {
        'category': 'Starters',
        'name': 'Mozzarella Sticks',
        'price': 5.5
    },
    {
        'category': 'Main Meal',
        'name': 'Medium Size Margherita Pizza',
        'price': 11
    },
    {
        'category': 'Beverages',
        'name': 'Iced Tea',
        'price': 1.25
    },
    {
        'category': 'Starters',
        'name': 'Greek Wedge Salad',
        'price': 4.5
    },
    {
        'category': 'Beverages',
        'name': 'Milk Shake',
        'price': 2.0
    },
    {
        'category': 'Main Meal',
        'name': 'Veg Family Meal',
        'price': 13.25
    },
    {
        'category': 'Main Meal',
        'name': 'Large Size Vegan Pepperoni Pizza',
        'price': 14.5
    },
]
const order = {
    'items': [
        {
            'name': 'Mozzarella Sticks',
            'price': 5.5,
            'quantity': 2
        },
        {
            'name': 'Garlic Bread',
            'price': 2.8,
            'quantity': 2
        },
        {
            'name': 'Soft Drink',
            'price': 1.5,
            'quantity': 3
        },
        {
            'name': 'Medium Size Margherita Pizza',
            'price': 11,
            'quantity': 2
        },
        {
            'name': 'Iced Tea',
            'price': 1.25,
            'quantity': 1
        },
        {
            'name': 'Veg Family Meal',
            'price': 13.25,
            'quantity': 2
        },
    ]
};
const discount = 0.05;
//function to list menu items by category
const listByCategory = (menu,category)=>
    menu.filter(item=>item.category==category)
    .sort((a, b) => a.name.localeCompare(b.name));
    console.log(listByCategory(menu,'Main Meal'));



//funtion to calculate the total of each item ordered
const calculateOrderAmountForEachItem =(menu,order)=>
    order.items.map(item=>{
        const menuDetails = menu.find(menuItem=>menuItem.name===item.name);
        return {
            name: item.name,
            quantity: item.quantity,
            price: menuDetails.price,
            category: menuDetails.category,
            amount: item.quantity * menuDetails.price
        };
    });

//function to calculate the main meal count to avail freebie
const  calculateMainMealCount =(menu,order)=>
  order.items.reduce((count,item)=>{
    const menuDetails= menu.find(menuItem=>menuItem.name==item.name);
    return menuDetails.category=== 'Main Meal'?count+item.quantity:count;
  },0);
  

//function to calculate the total bill amount 
const  calculateTotalAmount =(menu,order)=>{
    const amountofEachItem =calculateOrderAmountForEachItem(menu,order);
    return amountofEachItem.reduce((total,item)=> total+item.amount,0);
}
//funtion to calculate the final bill amount after applying discount
const calculateFinalAmount=(menu,order,discount) =>{
    const totalAmount=calculateTotalAmount(menu,order);
    const finalAmount= totalAmount *(1-discount);
    return parseFloat( finalAmount.toFixed(2));
}
//function to return a message if the order is eligible for free drink or null otherwise
const  isEligibleForFreeDrink =(menu,order)=>{
    const mainMealCount = calculateMainMealCount(menu,order);
    if(mainMealCount >=3){
        return  'Hurray!!The order is eligible for a free soft drink. Please do collect it!';
    }
    else{
        return null;
    }
};


module.exports = {
    listByCategory,
    calculateOrderAmountForEachItem,
    calculateMainMealCount,
    calculateTotalAmount,
    calculateFinalAmount,
    isEligibleForFreeDrink
}