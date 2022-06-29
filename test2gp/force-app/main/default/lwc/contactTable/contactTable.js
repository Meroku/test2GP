import { LightningElement } from 'lwc';

import getContacts from '@salesforce/apex/ContactTableController.getContacts';

const columns = [
    { label: 'Label', fieldName: 'LastName' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' }
];

export default class ContactTable extends LightningElement {
    data = [];
    columns = columns;

    connectedCallback() {
        getContacts()
        .then(result => {
            console.log(result);
            this.data = result;
            console.log(this.data);
        })
    }
}