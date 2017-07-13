var dnp = document.getElementById('dexPermission');
var dnn = document.getElementById('dexNotification');

dnp.addEventListener('click', function(e){
    e.preventDefault();
    
    if(!window.Notification){
        
        alert("Sorry, Notification is not support.");
    } else{
        
        Notification.requestPermission(function(p){
            
            if(p === 'denied') alert("denied");
            else if(p === 'granted') alert("granted"); 
            
        })
    }
});
        
// semulate an event 
dnn.addEventListener('click', function(e){
    
    var notify;
    e.preventDefault();
    
    if(Notification.permission === 'default') alert("Notification is not allow in your browser.");
    else{
        notify = new Notification("A message from Rafi",{
                    body: "it really is a lovely day.",
                    icon: "message.png",
                    tag: '123'
                });
        
        notify.onclick = function(){
            window.location = '?message=' + this.tag;
        }
        
    }
    
})