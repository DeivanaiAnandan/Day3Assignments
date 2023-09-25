var request = new XMLHttpRequest();
//Step 02: Specifiy the API
request.open("GET", "https://restcountries.com/v2/all");
//Step 03: Sending the request
request.send();
//Step 04: Once the requested data is there in server once data is successfully loaded,
//Server response will be of 200 status code.
//Functions: they are used to perform specific task.
request.onload=function(){
    var result = JSON.parse(request.response);
    console.log(result);
    for(var i=0; i<=249; i++){
        console.log(result[i].flag);
    }
    
    //whatever conversion has to be done here only
    //not outside
}