function testAsyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("foo");
        }, 5000);
    });
};

console.log("App started!");

/* const testValue = testAsyncFunction();

testValue.then((testValue) => {
    console.log("Res =", testValue);
}).catch((err) => {
    console.log("Err =", err);
}).finally(() => {
    console.log("Finaly detected!");
}); */

try {
    const testValue = await testAsyncFunction();
    console.log("Res =", testValue);
} catch(err) {
    console.log("Err =", err);
}
console.log("Finaly detected!");