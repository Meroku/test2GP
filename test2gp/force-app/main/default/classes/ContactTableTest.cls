@IsTest 
private class ContactTableTest {
    
    @IsTest
    private static void getContacts() {
        Contact newContact = new Contact(
            LastName = 'Test'
        );

        insert newContact;

        String result = '';
        Test.startTest();
        result = ContactTableController.getContacts()[0]?.LastName;
        Test.stopTest();
        
        System.assertEquals(newContact.LastName, result);
    }
}
