import { Component } from "@angular/core";

@Component({
    selector:"app-navbar",
    template:`
    <nav class="navbar"> my nav bar  
        {{current | date :"yyyy_MM_dd"}} ||
        {{current | date :"longTime"}}
      <br>
      salary in Dollor {{salary}} || and in EGP {{salary|money:0}}
      || and in SR {{salary|money:3}}
    </nav>
    `,
    styles:`
    .navbar{
        background-color: blue;
        padding:20px;
        color:white;
    }`,
})


export class NavbarComponent{
 current: Date = new Date()
 salary:number = 40
}