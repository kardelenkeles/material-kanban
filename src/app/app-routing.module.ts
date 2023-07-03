import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {BoardComponent} from "./board/board.component";
import {NavbarComponent} from "./navbar/navbar.component";



const router: Routes = [
  {path: 'board/:id', component: BoardComponent},
  {path: '', component: NavbarComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
