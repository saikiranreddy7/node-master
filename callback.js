function verifyUsers(username,callback) {
    if(username=='saikiran')
    callback(username)
    else
    callback("invalid User");        
}
var arr=["Admin","HR","Tester"];
function getRoles(username,callback) {
    if(username=="saikiran")
    callback(arr)
    else
    callback("Invalid");       
}
function checkUserAccess(a,callback) {
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]=="Tester")
        {
        callback("Success");
            break;
        }
        else
        callback("Failure");
    }
}
function authenticateUser(username,pwd,callback) {
    if(username=="saikiran" && pwd=="77777")
    callback("success");
    else
    callback("Failure");
    
}
authenticateUser("saikiran","77777",function(res1){
    verifyUsers(res1,function(res2){
        getRoles(res2,function(res3){
            checkUserAccess(res3,function(res4){
                console.log(res4);
            })
        })
    })
})