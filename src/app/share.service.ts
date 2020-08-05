import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ShareService {
  getRepoURL: string;
  getEventURL: string;
  constructor(private http: HttpClient) {
    this.getRepoURL = "https://api.github.com/orgs/";
    this.getEventURL = "https://api.github.com/orgs/";
  }
  getRepo(orgs) {
    return this.http.get(`${this.getRepoURL}${orgs}/repos`);
  }
  getEvent(orgs) {
    return this.http.get(`${this.getEventURL}${orgs}/events`);
  }
  saveOrganization(data) {
    window.localStorage.setItem("organizations", JSON.stringify(data));
  }
  getOrganization() {
    return JSON.parse(window.localStorage.getItem("organizations") || "[]");
  }
}
