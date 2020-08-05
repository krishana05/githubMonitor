import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViolationComponent } from "./violation.component";

@NgModule({
  declarations: [ViolationComponent],
  imports: [CommonModule],
  exports: [ViolationComponent],
})
export class ViolationModule {}
