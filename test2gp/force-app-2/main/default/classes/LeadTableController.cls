public with sharing class LeadTableController {
    
    @AuraEnabled
    public static List<Lead> getLeads(){
        return [SELECT Name, Phone, Email, Status FROM Lead LIMIT 20];
    }
}
