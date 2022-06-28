import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccountTableController.getAccounts';

const columns = [
    { label: 'Label', fieldName: 'Name' },
    { label: 'Website', fieldName: 'Website', type: 'url' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' }
];

export default class AccountTable extends LightningElement {
    data = [];
    columns = columns;

    connectedCallback() {
        getAccounts()
        .then(result => {
            console.log(result);
            this.data = result;
            console.log(this.data);
        })
    }
}