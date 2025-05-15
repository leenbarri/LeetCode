class SmallestInfiniteSet {
    constructor() {
        this.current = 1;
        this.addedBack = new Set();
        this.minHeap = [];
    }

    popSmallest() {
        if (this.minHeap.length > 0) {
            const smallest = this.minHeap.shift();
            this.addedBack.delete(smallest);
            return smallest;
        } else {
            return this.current++;
        }
    }

    addBack(num) {
        if (num < this.current && !this.addedBack.has(num)) {
            this._insertSorted(num);
            this.addedBack.add(num);
        }
    }

    _insertSorted(num) {
        let left = 0, right = this.minHeap.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (this.minHeap[mid] < num) left = mid + 1;
            else right = mid;
        }
        this.minHeap.splice(left, 0, num); // insert in sorted order
    }
}
