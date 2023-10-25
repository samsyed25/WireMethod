/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { LightningElement, api,wire } from 'lwc';
import getAllCases from '@salesforce/apex/caseControllerLwc.getAllCases';


export default class WireMethod extends LightningElement {
    @api objectApiName;
    reocrds;
    error;
    subject;

    handleChange(event){
        const sVal = event.target.value;
        this.subject=sVal;
    }

    /*
    @wire(getAllCases) cases
    cases : 
        - data
        - error
    */
   /*
    @wire(getAllCases)
    Wiredcases({data,error}){
        if(data){
            this.reocrds = data;
        }
        if(error){
            this.error = error (Object);
        }
    }
   */
    //@wire(getAllCases) cases;

    @wire(getAllCases,{subject:'$subject'})
    Wiredcases({data,error}){
        if(data){
            this.reocrds = data;
        }
        if(error){
            this.error = error;
        }
    }
}
