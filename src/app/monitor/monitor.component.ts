import { Component, OnInit } from "@angular/core";
import { ShareService } from "../share.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-monitor",
  templateUrl: "./monitor.component.html",
  styleUrls: ["./monitor.component.scss"],
})
export class MonitorComponent implements OnInit {
  organizations: Array<any>;
  repoList: Array<any>;
  noRepo: boolean;
  constructor(private service: ShareService, private router: Router) {
    this.organizations = [];
    this.repoList = [];
    this.noRepo = true;
  }

  ngOnInit() {
    this.organizations = this.service.getOrganization();
    if (this.organizations.length !== 0) {
      this.getRepo(this.organizations[0].name);
    }
  }
  getRepo(orgName) {
    this.service.getRepo(orgName).subscribe(
      (repo: any) => {
        // console.log(repo);
        if (repo.length !== 0 && !repo.message) {
          this.repoList = repo;
          this.noRepo = false;
        }
      },
      (error) => {
        console.log("Error fetching repo list", error);
        this.noRepo = true;
      }
    );
  }
  changeOrganization(e) {
    // console.log(e.target.value);
    this.getRepo(e.target.value);
  }
  goToHome() {
    this.router.navigate(["/home"]);
  }
}
