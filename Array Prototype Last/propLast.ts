declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function<T>() {
     const lastN: T | undefined = this.at(-1);
      return lastN === undefined ? -1 : lastN;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};
