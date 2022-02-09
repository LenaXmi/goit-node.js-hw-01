const contactsOperations = require("./contacts.js");
const argv = require('yargs').argv;

const invokeAction = async ({ action, id, name,email,phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsOperations.listContacts();
      console.log(allContacts);
      break;

    case "get":
          const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);

      break;

    case "add":
      const newContact = await contactsOperations.addContact(name,email,phone);
      console.log(newContact);
      break;

      case "remove":
          const removeContact = await contactsOperations.removeContact(id)
          console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};


invokeAction({action:'get', id:'3'})

// invokeAction(argv);