const { isMainThread , Worker , workerData } = require('worker_threads');


if(isMainThread) {
new Worker(__filename , {
    workerData : [ 2 ,3 ,4 ,5 , 6 , 7 , 8 , 9 , 10 , 11]
})
new Worker(__filename , {
    workerData : [1 , 2 , 3 , 4 , 5 , 6 , 7 ]
})
}
else {
    console.log(`Worker! Process ID : ${process.pid}`);
    console.log(`${workerData} sorted is ${workerData.sort()}`);
}