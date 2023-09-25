var request1 = new XMLHttpRequest();
//Step 02: Specifiy the API
request1.open("GET", "https://restcountries.com/v2/all");
//Step 03: Sending the request
request1.send();
//Step 04: Once the requested data is there in server once data is successfully loaded,
//Server response will be of 200 status code.
//Functions: they are used to perform specific task.
request1.onload=function(){
    var result = JSON.parse(request1.response);
    console.log(result);
    for(var i=0; i<=249; i++){
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion);
        console.log(result[i].population);
    }
    
    //whatever conversion has to be done here only
    //not outside
}