//my brute force solution but it is bad for big data
/*
var maxProfit = function(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};
*/

//optimize solution
var maxProfit = function(prices) {
    let minValue = prices[0];
    let maxPorfit = 0;
    for(let i=1;i<prices.length;i++){
        let profit = prices[i] - minValue
        
        if(profit>maxPorfit){
            maxPorfit = profit
        }
        if(prices[i]< minValue){
            minValue = prices[i]
        }
    }
    return maxPorfit
};

//test
let prices = [2,5,1,6,2,4,5];
let result = maxProfit(prices);
console.log(result);  // 5
