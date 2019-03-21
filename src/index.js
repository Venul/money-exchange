// PLEASE DON"T change function name
module.exports = function makeExchange(currency) {
    
    let mas = {
        'H': 50,
        'Q': 25,
        'D': 10,
        'N': 5,
        'P': 1
    }

    let res = {};

    var countH = Math.floor(currency/mas.H);  
    var countQ = Math.floor((currency-countH*mas.H)/mas.Q);
    var countD = Math.floor((currency-countH*mas.H-countQ*mas.Q)/mas.D);  
    var countN = Math.floor((currency-countH*mas.H-countQ*mas.Q-countD*mas.D)/mas.N);   
    var countP = Math.floor((currency-countH*mas.H-countQ*mas.Q-countD*mas.D-countN*mas.N)/mas.P);

    if (currency>10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency<=0) return {};
    if (countH !=0) res['H'] = countH; 
    if (countQ !=0) res['Q'] = countQ; 
    if (countD !=0) res['D'] = countD; 
    if (countN !=0) res['N'] = countN;
    if (countP !=0) res['P'] = countP;

    return res;
}
