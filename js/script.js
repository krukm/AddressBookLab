"use strict";

let play = true;

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    print() {
        for(let i = 0; i < this.contacts.length; i++) {
            console.log(this.contacts[i]);
        }
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    deleteByName(name) {
        for(let i = 0; i < this.contacts.length; i++) {
            if(this.contacts[i].name === name) {
                this.contacts.splice(i, 1);
            }
        }
    }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const pops = new Contact("Gregory Grass", "greg@hotmail.com", "313-685-4578", "grandpa");
const eddie = new Contact("Eddie", "indians@gmail.com", "734-546-9087", "brother");
const doc = new Contact("Dr. Emmet Brown", "b2tf@outlook.com", "787-985-0978", "best friend");

const addressBook = new AddressBook();
addressBook.add(pops);
addressBook.add(eddie);
addressBook.add(doc);

//addressBook.deleteAt(1);
//addressBook.deleteByName("Eddie");

//console.log(addressBook);
//addressBook.print();

while(play) {
    const userPrompt = prompt("Add, Remove, Print, or Quit?");
    switch(userPrompt.toLowerCase()) {
        case "add":
            const name = prompt("Please enter a name:");
            const phone = prompt("Please enter the phone number:");
            const email = prompt("Please enter the email address:");
            const relation = prompt("Please enter a relationship");

            addressBook.add(new Contact(name, phone, email, relation));
            break;
        case "remove":
            const answer = prompt("Remove by index or name?");
            if(answer.toLowerCase() === "index") {
                const index = prompt("Please enter index number to remove");
                addressBook.deleteAt(index);
            } else if(answer.toLowerCase() === "name") {
                const name = prompt("Please enter the name to remove");
                addressBook.deleteByName(name);
            }
            break;
        case "print":
            addressBook.print();
            break;
        case "quit":
            play = false;
            break;
        default:
            console.log("That was not a valid option, try again...");
            break;
    }
}    