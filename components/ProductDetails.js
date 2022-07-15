app.component('product-details', {
    props:{
        details:{
            type:Array
        }
    },
    template:
    /*html*/
    `<div class="product-details">
            <ul>
            <li v-for="(detail, index) in details" >{{ detail }}</li>
        </ul>
</div>`,
 
})