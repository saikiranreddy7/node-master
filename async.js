function verifyUser(username) {
    var pm=new Promise(function(resolve,reject){
        if(username=="saikiran")
        resolve(username);
        else
        reject("Invalid User");
    })
     return pm;
}
var arr=["Admin","Tester","HR"];
function getRoles(username){
    return new Promise(function(resolve,reject){
        if(username=="saikiran")
        resolve(arr);
        else
        reject("invalid");
    })
}
function checkUserAccess(arr){
    return new Promise(function(resolve,reject){
    for(i=0;i<arr.length;i++)
    {
        if(a[i]=="Admin")
        resolve("Success");
        else
        reject("Invalid");
    }
})
}
function authenticateUser(username,pwd){
    return new Promise(function(resolve,reject){
        if(username=="saikiran" && pwd=="77777")
        resolve("Success");
        else
        reject("Failure");
    })
}
async function res(){
    try{
        var p=await authenticateUser("saikiran","77777");
        var q=await verifyUser(p);
        var r=await getRoles(q);
        var s=await checkUserAccess(r);
        console.log(s);
    }
    catch(exception){
        console.log("exception :",exception);
    }
}
res();