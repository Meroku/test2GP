@IsTest
private class AccountTableTest {
    
    @IsTest
    private static void getAccounts() {
        Account newAccount = new Account(
            Name = 'Test'
        );

        insert newAccount;

        String result = '';
        Test.startTest();
        result = AccountTableController.getAccounts()[0]?.Name;
        Test.stopTest();
        
        System.assertEquals(newAccount.Name, result);
    }
}
