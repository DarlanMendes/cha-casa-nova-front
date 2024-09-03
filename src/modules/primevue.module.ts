import Button from "primevue/button";
import Card from "primevue/card";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import { App } from "vue";

export function setPrimevue(app:App){
    app.component("Card", Card);
    app.component("Button", Button);
    app.component("InputText", InputText)
    app.component("FloatLabel", FloatLabel)
}