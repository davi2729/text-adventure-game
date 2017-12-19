let rooms = {
    
    //room0
    "cell": {
        "description":
    "<p>You wake up in a damp and cold prison cell.<br>You have no idea where you are or how you got here,<br>but you know you can't stay here.<br><br>In front of you is the iron barred cell door that keeps you trapped.<br>To your left is a dead decomposing rat.<br>Opposite your cell is a staircase, who knows where it leads.</p>",
    "directions": {
        "north": "greathall"
        },
        
    "items": {
        "dead rat":
        "<p>You see a dead rat, it's rotten and it has probably been here for a while. There is something shiny inside the rat.</p>"
        }
    
    
    },
    
    /*TO DO
    //room0.1
    "celldoor": {
        "description":
        "<p>Yup....that sure is a cell door...and it's locked, so are you going to move on?</p>",
        "directions": {
            "search rat": "opencell"
        }
    },
    
    //room0.2
    "opencell": {
        "description":
        "<p>Tadaaa! You found a key! and only with minor risks of life threatening diseases.<br>With the newly acquired key,<br>only slighty covered in rat guts,<br>you manage to open the cell door...<br>what luck!</p>",
        "directions": {
            "move forward": "greathall"
        }
    },*/
    
    //room1
    "greathall": {
        "description":
    "<p>After a brisk power walk up the many stairs, you finally arrive in the great hall. You see nothing but dusty, rotten chairs and long tables. The ceiling is so far up, you can barely see it. In the middle of the hall is a great fireplace, you see something sticking out from the ashes.</p>",
        "directions": {
            "east": "kitchen",
            "search fireplace": "fireplace"
        }
    },
        
    //room1.2
    "fireplace": {
        "description":
    "<p>You brush away some of the ashes...OUCH! some embers still remains. Under the ashes you find a large burned burned, although you can still make out the title: <i>Necronomicon</i>. as you pick up the book, you suddenly feel very weak and dizzy, quickly dropping the book.</p>",
        "directions": {
            "go right": "kitchen"
        }
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
    }
}