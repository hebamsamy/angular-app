import { Routes } from "@angular/router";
import { ProductListComponent } from "./Components/product-list/product-list.component";
import { todolistComponent } from "./Components/todolist/todolist.component";

let AppRouts:Routes=[
    {path:"products",component:ProductListComponent},
    {path:"todo",component:todolistComponent},

]