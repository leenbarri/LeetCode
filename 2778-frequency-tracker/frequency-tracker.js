
var FrequencyTracker = function() {
    this.numberFreq = new Map();
    this.freqCount = new Map();
    
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function(number) {
    const oldFreq = this.numberFreq.get(number) || 0;
    const newFreq = oldFreq + 1;
    this.numberFreq.set(number, newFreq);
     if (oldFreq === 0) {
        this.freqCount.set(1, (this.freqCount.get(1) || 0) + 1);
    } else {
        this.freqCount.set(oldFreq, this.freqCount.get(oldFreq) - 1);
        this.freqCount.set(newFreq, (this.freqCount.get(newFreq) || 0) + 1);
    }
    
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function(number) {
    const oldFreq = this.numberFreq.get(number);
    if (!oldFreq) return;
    const newFreq = oldFreq - 1;
    this.freqCount.set(oldFreq, this.freqCount.get(oldFreq) - 1);

    if (newFreq > 0) {
        this.numberFreq.set(number, newFreq);
        this.freqCount.set(newFreq, (this.freqCount.get(newFreq) || 0) + 1);
    } else {
         this.numberFreq.delete(number);
    }
    
};

/** 
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function(frequency) {
        return (this.freqCount.get(frequency) || 0) > 0;
    
};

/** 
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */