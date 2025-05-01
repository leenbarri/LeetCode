
var ATM = function() {
    this.denominations = [20, 50, 100, 200, 500];
    this.counts = [0, 0, 0, 0, 0];
};

/** 
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function(banknotesCount) {
    for (let i = 0; i < 5; i++) {
        this.counts[i] += banknotesCount[i];
    }
};

/** 
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function(amount) {
    const usedNotes = [0, 0, 0, 0, 0];
    for (let i = 4; i >= 0; i--) {
        const denom = this.denominations[i];
        const maxNotes = Math.min(Math.floor(amount / denom), this.counts[i]);
        usedNotes[i] = maxNotes;
        amount -= maxNotes * denom;
    }

    if (amount === 0) {
        for (let i = 0; i < 5; i++) {
            this.counts[i] -= usedNotes[i];
        }
        return usedNotes;
    } else {
        return [-1];
    }
};

/** 
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */