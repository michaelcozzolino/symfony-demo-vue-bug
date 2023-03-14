import { createApp }          from "vue";

import Parent from "../../vue/components/Parent.vue";
const el = document.getElementById('app');
if(el === null) {
    throw new Error();
}

createApp(Parent)
    .mount(el);
