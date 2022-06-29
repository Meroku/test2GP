import { LightningElement } from 'lwc';

import getLeads from '@salesforce/apex/LeadTableController.getLeads';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Status', fieldName: 'Status', type: 'text' }
];

export default class LeadTable extends LightningElement {
    data = [];
    columns = columns;

    connectedCallback() {
        getLeads()
        .then(result => {
            console.log(result);
            this.data = result;
            console.log(this.data);
        })
    }
}