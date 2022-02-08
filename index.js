const contactsOperations = require('./contacts.js');
const argv = require('yargs').argv;

const  invokeAction = async({ action, id, name, email, phone }) =>{
  switch (action) {
    case 'list':
          const contacts = await contactsOperations.listContacts()
          console.log(contacts);
      break;

    case 'get':
     
      break;

    case 'add':
      
      break;

    case 'remove':
     
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);