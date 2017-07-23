var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://localhost:1883");

client.on("connect",()=>{
    client.subscribe("myTopic", (err, granted)=>{
        if(err) console.log(err);
    })
    client.publish("myTopic", "hello world");
})

client.on("message", (topic, message)=>{
    console.log("message: " + message.toString());
})