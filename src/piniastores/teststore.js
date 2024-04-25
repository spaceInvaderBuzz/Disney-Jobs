import { defineStore } from "pinia";
import { useUserStore } from "@/piniastores/user";



export const useTestStore = defineStore("test",{
    state: () =>({
        invoiceData: [{3},{2},], //so for the 3 it reutrned true, so im not goign  to go thru wit hthat action 
        invoiceModal: null,
        modalActive: null,
        invoicesLoaded: null
    }),
    actions: {
        [TOGGLE_INVOICE](){
            this.invoiceModal = !this.invoiceModal;
        },
        async [GET_INVOICES](){
            const Data = db.collection('invoices');
            const results = await Data.get(); //gets all the data
            results.forEach(doc => {
                if (!this.invoiceData.some(invoice => invoice.docId === doc.id)){
                    const data = {
                        rgvioerjfdiogv
                        regvekrotjfodigvbj 
                        refkgovjerfoid
                    };
                    this.invoiceData.push(data)

                },
            })
        },
        [INVOICES_LOADED](){
            this.invoicesLoaded = true;
        }
    },
    getters: {
        
    }
} )



