/*let rooms = {
    
    //room0
    "cell": {
        "description":
    "<p>You wake up in a damp and cold prison cell.<br>You have no idea where you are or how you got here,<br>but you know you can't stay here.<br><br>In front of you is the big iron cell door that keeps you trapped.<br>To your left is a dead rat.</p>",
    "directions": {
        "search rat": "opencell",
        "look at cell door": "cell"
    }
    },
    
    //room0.2
    "opencell": {
        "description":
        "<p>With the newly acquired key, only slighty covered in rat guts, you manage to open the cell door...what luck! You wonder if there will be more dead rats with useful items.</p>",
        "directions": {
            "": "greathall"
        }
    },
    
    //room1
    "greathall": {
        "description":
    "<p>After a brisk power walk up the many stairs, you finally arrive in the great hall. You see nothing but dusty, rotten chairs and long tables. The ceiling is so far up, you can barely see it. In the middle of the hall is a great fireplace, you see something sticking out from the ashes.</p>"
    },
    
    //room2
    "kitchen": {
        "description":
    "<p>You're now in the kitchen, a slightly sweet smell hits your nose, in the corner there is a cauldron bobbling with unknown content. On the table next to the cauldron is a large meat cleaver</p>"
    },
    
    //room3
    "masterbedroom": {
        "description":
    "<p>As you push the big wooden door open, you enter the master bedroom. The room looks like it has been trashed, perhaps a scuffle? In the center is a big bed, it looks comfy. On the night table is a note, it looks out of place. You feel a draft coming from your right.</p>"
    },
    
    //room4
    "secretlair": {
        "description":
    "<p>Walking down the stone spiral staircase, you arrive at a strange room. You feel strangely uncomfortable, like a thousand eyes stares at you. At the end of the room you see a ghoulish looking man kneeling infront of a big stone statue. The statue looks like a squid with wings and a scaly body.</p>"
    },
}*/

let currentRoom = "cell";
let commands = ["go", "pickup", "look", "search", "inventory", "use", "attack"];
let inventory = [];

function changeRoom(dir){
 if(rooms[currentRoom].directions[dir] !== undefined){
     currentRoom = rooms[currentRoom].directions[dir]
     $("#game-text").append("<p>" + rooms[currentRoom].description + "</p>");
 } else {
    $("#game-text").append("<p>you cannot go that way</p>"); 
 }
}

function seeItems(){
 if(rooms[currentRoom].items !== undefined){
     $("#game-text").append("<p>" + rooms[currentRoom].items + "</p>");
 } else {
    $("#game-text").append("<p>you find nothing</p>"); 
 }
}

function showHelp(){
    $("#game-text").append("<p>Here are your possible commands: </p>");
    $("#game-text").append("<p><ul>");
    for(let i = 0; i < commands.length; i++){
        $("#game-text").append("<li>" + commands[i] + "</li>");
    }
    
    $("#game-text").append("</ul></p>");
}

function showInventory(){
    if(inventory.length === 0){
    $("#game-text").append("<p>You are not carrying anything</p>");
        return;
    } 
    $("#game-text").append("<p>Here is your inventory: </p>");
    $("#game-text").append("<p><ul>");
    for(let i = 0; i < inventory.length; i++){
        $("#game-text").append("<li>" + inventory[i] + "</li>");
    }
    
    $("#game-text").append("</ul></p>");
}

function playerInput(input){
    let command = input.split(" ")[0];
            switch(command){
            case "go":
                let dir = input.split(" ")[1];
                changeRoom(dir);
                break;
            
            case "search":
                seeItems();
                break;
                    
                case "help":
                    showHelp();
                    break;
                
                case "inventory":
                    showInventory();
                    break;
                
                default:
                $("#game-text").append("<p>you cannot go that way</p>");
        }
}

$(document).ready(function(){
    $("#game-text").append("<p>" + rooms.cell.description + "</p>");
    
    $(document).keypress(function(key){
    if(key.which === 13 && $("#user-input").is(":focus")){
        let value = $("#user-input").val().toLowerCase();
        $("#user-input").val("");
        playerInput(value)
    }
})
    
    
})
