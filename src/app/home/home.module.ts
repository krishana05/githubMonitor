import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { ViolationModule } from "../violation/violation.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FormsModule, ViolationModule],
})
export class HomeModule {}
