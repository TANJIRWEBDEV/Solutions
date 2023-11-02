async function sleep(millis: number): Promise<void> {
     return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millis);
  }); 
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
// Explanation: It should return a promise that resolves after 100ms.
