//counter code
var button=document.getElementById("counter");
button.onclick= function(){
    //create request object
    var request =new XMLHTTPrequest();
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.status=== XMLHTTPRequest.DONE){
            //Take some action
            if(request.status ===200){
            var counter=request.resposeText;
            var span=document.getElementById("count");
            span.innerHTML=counter.toString();
            
        }
    }
};
//make the request
request.open('GET','http://vigneshjm.imad.hasura-app.io/',true);
request.send(null);
};