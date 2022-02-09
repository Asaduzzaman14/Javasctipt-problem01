
// problem 1

function anaToVori(ana) {
    if (ana <= 0) {
        return " please enter valid number for ana to vori convart"
    }
    let vori = ana / 16;
    return vori;

}

let vori = anaToVori(32)
console.log(vori);




// problem 2

function pandaCost(singra, samucha, zelapi) {
    let singraPrice = 7;
    let samuchaPrice = 10;
    let zelapePrice = 15;

    if (singra <= 0 || samucha <= 0 || zelapi <= 0) {
        return "wrong input"
    }

    let totalSingraPrice = singraPrice * singra;
    let totalSamuchaPrice = samuchaPrice * samucha;
    let totalZelapePrice = zelapePrice * zelapi;

    let totalbill = totalSingraPrice + totalSamuchaPrice + totalZelapePrice;

    return totalbill;
}

let result = pandaCost(2, 10, 2)
console.log(result);


// problem 3




function picnicBudget(mambers) {

    let firstHundradFee = 5000;
    let secondHundradFee = 4000;
    let lastAllFee = 3000;

    if (mambers <= 0) {
        return 'Enter valid Number'
    }

    else if (mambers <= 100) {
        let firstHundradTotalFee = mambers * firstHundradFee;
        return firstHundradTotalFee;
    }
    else if (mambers <= 200) {
        let firstHundradTotalFee = 100 * firstHundradFee;
        let secondHundrad = mambers - 100;

        let seconHundradFee = secondHundrad * secondHundradFee
        return seconHundradFee + firstHundradTotalFee
    }
    else {
        let firstHundradTotalFee = 100 * firstHundradFee;
        let secondHundradTotalFee = 100 * secondHundradFee;

        let lastAllMambers = mambers - 200;
        let lastAllMambersFee = lastAllMambers * lastAllFee
        let totalMambersFee = firstHundradTotalFee + secondHundradTotalFee + lastAllMambersFee;
        return totalMambersFee;

    }

}

const mamber = picnicBudget(100)
console.log(mamber);




// problem 4

function oddFriend(friends) {

    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i]

        if (friend == '') {
            return " Enter some name"
        }

        else if (friend.length % 2 != 0) {
            return friend
        }

    }
}
let friends = ['saiful', 'rakib', 'hridoy', 'faruk', 'sakib', 'raju']
let friend = oddFriend(friends)
console.log(friend);
