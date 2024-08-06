const promiseFive = new Promise((res, rej) => {
    setTimeout(() => {
        let error = true;
        if (!error){
            res({username: "abhishek", email: "abhishek@google.com"});
        }else rej('ERROR: JS went wrong');
    }, 1000);
})
async function consumePromiseFive(){
   try {
    const response = await promiseFive;
    console.log(response);
   } catch (err) {
    console.log(err);
   }
}
consumePromiseFive();