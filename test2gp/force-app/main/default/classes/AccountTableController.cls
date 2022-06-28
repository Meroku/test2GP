public with sharing class AccountTableController {
    
    @AuraEnabled
    public static List<Account> getAccounts(){
        return [SELECT Name, Phone, Website FROM Account LIMIT 20];
    }
}
