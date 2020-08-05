import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { ShareService } from "../share.service";

@Component({
  selector: "app-violation",
  templateUrl: "./violation.component.html",
  styleUrls: ["./violation.component.scss"],
})
export class ViolationComponent implements OnInit, OnChanges {
  eventList: Array<any>;
  noEvent: boolean;
  @Input("organizations") organizations;
  constructor(private service: ShareService) {
    this.eventList = [];
    this.noEvent = true;
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    this.organizations = changes.organizations.currentValue;
  }
  ngOnInit() {
    // this.organizations = this.service.getOrganization();
    if (this.organizations.length !== 0) {
      this.getEvent(this.organizations[0].name);
    }
  }
  getEvent(orgName) {
    this.service.getEvent(orgName).subscribe(
      (event: any) => {
        // console.log(event);
        if (event.length !== 0 && !event.message) {
          // filter only fork and public events
          this.eventList = event.filter((e) => {
            if (e.type === "ForkEvent" || e.type === "PublicEvent") {
              return true;
            }
          });
          if (this.eventList.length !== 0) {
            this.noEvent = false;
          }
          // console.log(this.eventList);
        }
      },
      (error) => {
        console.log("Error fetching event list", error);
        this.eventList = [];
        this.noEvent = true;
      }
    );
  }
  changeOrganization(e) {
    // console.log(e.target.value);
    this.getEvent(e.target.value);
  }
}
