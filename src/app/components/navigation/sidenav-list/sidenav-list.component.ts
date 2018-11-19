import { AuthService } from "./../../../services/auth.service";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-sidenav-list",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.css"]
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  isLoggedIn: boolean;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(
      authStatus => {
        this.isLoggedIn = authStatus;
        //console.log("logged in ", this.isLoggedIn);
      }
    );
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  onClose() {
    this.closeSidenav.emit();
  }
}
