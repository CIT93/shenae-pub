// Step 2.1 Constants
const shirtPrice = 15; //Defining the price for each shirt
const giftWrapPrice = 2; //Defining the price for gift wrap

// Step 2.2 Exporting a Function
export const calculateTotal = function(orderData) {
    let total = orderData.qty * shirtPrice;

    if (orderData.giftWrap) {
        total += giftWrapPrice;
    }
    return { totalPrice: total };
};

