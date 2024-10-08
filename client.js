const { TIMEOUT } = require('dns');
const net = require('net');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

/*const prompt = require("prompt-sync")({ sigint: true });*/




// Create a client instance and connect to the server
const client = net.createConnection({ port: 8080 }, () => {
    console.log('Connected to server');
    
    // Send data to the server
    //while(1){    }
    sendMsg();
    


});

const sendMsg = ()=>{
            readline.question('msg :', readMsg => {
            
            //console.log(`hello, hi there ${name}`);
            
            if(readMsg == "close socket"){
                client.end();
                readline.close();
                return 0 ;
            }
            client.write(readMsg);
            setTimeout(function(){
                 sendMsg();//code goes here
           }, 2000); //Time before execution
           
        })
}

// Receive data from the server
client.on('data', (data) => {
    console.log('Message from server: ' + data.toString());
    
    // Close the connection
    //client.end();
});

// Handle connection close
client.on('end', () => {
    console.log('Disconnected from server');
});


