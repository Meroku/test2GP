public with sharing class ContactTableController {
    @AuraEnabled
    public static List<Contact> getContacts(){
        return [SELECT LastName, Phone, Email FROM Contact LIMIT 20];
    }
}