import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ShareService } from "../share.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  organizations: Array<any>;
  organization: string;
  constructor(private router: Router, private service: ShareService) {
    this.organization = "";
    this.organizations = [];
  }
  ngOnInit() {
    this.organizations = this.service.getOrganization();
    // console.log(this.organizations);
  }
  addOrganization() {
    if (this.organization !== "") {
      const obj = {
        id: this.organizations.length + 1,
        name: this.organization,
      };
      this.organizations.push(obj);
      this.service.saveOrganization(this.organizations);
      this.organization = "";
    }
  }
  goToViolations() {
    this.router.navigate(["/monitor"]);
  }
}
