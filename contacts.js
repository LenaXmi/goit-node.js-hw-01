const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.join(__dirname, 'db/contacts.json')
const {nanoid} = require('nanoid')


const listContacts = async () => {
    const data = await fs.readFile(contactsPath)
    const contacts = JSON.parse(data)
    return contacts
}

const getContactById = async (contactId) => {
    
    const contacts = await listContacts()
    const contact = contacts.find(contact => contact.id === contactId)

    if (!contact) {
        return null
    }
    return contact

}
const  addContact=async(name, email, phone)=> {
    const contacts = await listContacts()
    const newContact = { name, email, phone, id:nanoid(5) }
    contacts.push(newContact)
    await fs.writeFile(contactsPath, JSON.stringify(contacts))
    return newContact
}

const removeContact = async (contactId) => {
    const contacts = await listContacts()
    const index = contacts.findIndex(contact => contact.id === contactId)
    if(index === -1){
        return null
    }
    const [removedContact] = contacts.splice(index, 1)
    await fs.writeFile(contactsPath, JSON.stringify(contacts))
    return removedContact
  
}


module.exports ={
    listContacts,
    getContactById,
    removeContact,
    addContact
};