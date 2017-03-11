//counter code
var button=document.getElementById('counter');
button.onclick= function(){
    //create request object
    var request = new XMLHTTPRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readystate=== XMLHTTPRequest.DONE){
            //Take some action
            if(request.status ===200){
            var counter=request.resposeText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
            
        }
    }
};
//make the request
request.open('GET','http://vigneshjm.imad.hasura-app.io/',true);
request.send(null);
};