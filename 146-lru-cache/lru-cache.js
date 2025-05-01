class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
     this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    
};
LRUCache.prototype.remove = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};
LRUCache.prototype.add = function(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
};
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
     if (this.map.has(key)) {
        const node = this.map.get(key);
         this.remove(node); 
         this.add(node);
        return node.value;
        }
    return -1; 
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
     if (this.map.has(key)) {
         this.remove(this.map.get(key)); 
     }
     const newNode = new Node(key, value);
    this.add(newNode);
    this.map.set(key, newNode);
    if (this.map.size > this.capacity) {
         const lru = this.tail.prev;
           this.remove(lru);
        this.map.delete(lru.key);
    }
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */