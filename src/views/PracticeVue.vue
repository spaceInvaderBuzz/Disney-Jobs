<template>
  

   <tr v-for="(item,index) in invoiceItemlist" :key="item.id">
    <td><input type="text"></td>
   </tr>


</template>

<script>
export default {
    data(){
        return {
    
            invoiceItemlist = [{1},{2},{3}],
        }
    },
    methods: {
        addNewInvoiceItem(){
            this.invoiceItemlist.push({
                id: uid(),
                itemName: "",
                qty: "",
                price: 0,
                total: 0,
            });
        },
        deleteIncoiveItem(parameter){
            this.invoiceItemlist = this.invoiceItemlist.filter((item) => item !==parameter)
        },
        async 
        submitForm(){

        }
    },

    async uploadInvoice(){
        if(thi)
    }
}
</script>

<style>

</style>