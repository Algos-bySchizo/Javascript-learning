function asynctask(name, succeed=true, delay =1000){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(succeed) resolve(`${name} done`);
            else reject(`${name} failed`);
        }, delay);
        });
}

async function testWithoutCatch() {
    console.log('this is the test to check the behaviour of running awaits without try/catch');
    const a=await asynctask('task1');
    console.log(a);
    const b=await asynctask('task2',false);
    console.log(b);
    const c=await asynctask('task3');
    console.log(c);
}

async function testWithOneTryCatch() {
    console.log('this is the test to check the behaviour of running awaits with a single try/catch');
    try{
        const a=await asynctask('task1');
        console.log(a);
        const b=await asynctask('task2',false);
        console.log(b);
        const c=await asynctask('task3');
        console.log(c);
    }catch(err){
        console.log('UncaughtError', err);
    }
}

async function testSeparateTryCatch() {
    console.log('this is the test to check the behaviour of running awaits with 3 try/catch');
    try{
        const a=await asynctask('task1');
        console.log(a);
    }catch(err){
        console.log('UncaughtError', err);
    }
    try{
        const a=await asynctask('task2', false);
        console.log(a);
    }catch(err){
        console.log('UncaughtError', err);
    }
    try{
        const c=await asynctask('task3');
        console.log(c);
    }catch(err){
        console.log('UncaughtError', err);
    }
}

(async()=>{
    await testWithoutCatch().catch(err=>{console.log('UncaughtError', err)});
    await new Promise(res=> setTimeout(res, 2000));
    await testWithOneTryCatch();
    await new Promise(res=> setTimeout(res, 2000));
    await testSeparateTryCatch();
})();