const promiseFour = new Promise((res, rej) =>
{
    setTimeout(() => 
    {
        let error = false;
        if (!error)
        {
            res({
                success: true,
                message: 'Tasks fetched successfully.',
            });
        }
        else
        {
            rej({
                success: false,
                message: 'Error retrieving tasks.'
            })
        }
    }, 1000)
})

const success = promiseFour.then((user) => 
{
    console.log(user);
    return user.success;
});
// console.log(success);

// When a value is returned from a promise, it is again wrapped inside a new promise.
success.then((success) => 
{
    console.log(success);
})
promiseFour
    .catch((err) => 
    {
        console.log(err);
    })
    .finally(() =>
    {
        console.log('Promise finished.');
    })