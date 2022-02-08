const fs = require('fs/promises')
const path = require('path')
const contactsPath=path.join(__dirname, 'db/contacts.json')


const listContacts = async () => {
    const data = await fs.readFile(contactsPath)
    const contacts = JSON.parse(data)
    return data.toString()
}

const getContactById = async(contactId)=> {

}

const removeContact = async(contactId) =>{
  
}

const  addContact=async(name, email, phone)=> {
 
}

module.exports ={
    listContacts,
    getContactById,
    removeContact,
    addContact
};