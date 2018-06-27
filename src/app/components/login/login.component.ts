import { Component, Inject } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  PatternValidator,
  EmailValidator
} from "@angular/forms";
import { LoginService, UsersService } from "../../services/index";
// import * as M from "materialize-css/dist/js/materialize";
import { MAX_LENGTH_VALIDATOR } from "@angular/forms/src/directives/validators";

@Component({
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.scss"]
})
export class LoginComponent {
  loginForm: FormGroup;
  updateForm: FormGroup;
  resetForm: FormGroup;
  resetPasswordDiv = false;
  resetPassword = true;
  loginDiv = false;
  loading = false;
  returnUrl: string;
  invalidCredentials;
  errorMessage = "";
  gifPath = "";
  updatePasswordDiv = false;
  updatPassword = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private giphyService: GiphyService,
    private loginService: LoginService,
    private userService: UsersService,
    @Inject(FormBuilder) private fb: FormBuilder
  ) {
    this.loginFormValid();
    this.resetFormValid();
    this.getGif();
  }
  loginFormValid() {
    this.loginForm = this.fb.group({
      email: [
        null,
        [Validators.required, Validators.email, Validators.maxLength(90)]
      ],
      password: [null, [Validators.required, Validators.maxLength(90)]]
    });
  }
  resetFormValid() {
    this.resetForm = this.fb.group({
      email: [
        null,
        [Validators.required, Validators.email, Validators.maxLength(90)]
      ]
    });
  }
  logIn() {
    if (this.loginForm.valid) {
      this.invalidCredentials = false;
      this.loading = true;
      this.loginService
        .login(
          this.loginForm.get("email").value,
          this.loginForm.get("password").value
        )
        .subscribe(
          result => {
            this.router.navigate([this.returnUrl]);
            if (result.state === "OK") {
              console.log("Yay! You're a rockstar :D");
            } else {
              console.log("Ops! Something was wrong :c");
            }
          },
          error => {
            /* this.alertService.error(error); */
            this.loading = false;
            console.log("Ops! There is something wrong :c");
            this.invalidCredentials = true;
          }
        );
    } else {
      this.invalidCredentials = true;
    }
  }
  resetPass() {
    this.resetPasswordDiv = true;
    this.loginDiv = true;
    this.invalidCredentials = false;
  }
  sendPassword() {
    console.log("error");
    if (this.resetForm.valid) {
      this.userService.getByEmail(this.resetForm.get("email").value).subscribe(
        result => {
          console.log("This does exist");
          this.resetPassword = false;
        },
        error => {
          this.invalidCredentials = true;
          console.log("This doesn't exist");
        }
      );
    } else {
      this.invalidCredentials = true;
    }
  }
  ngOnInit() {
    this.loginService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  //Giphy logic
  getGif(limit = 10) {
    this.giphyService.getGif("success", limit).subscribe(data => {
      const randomOffset: number = Math.floor(Math.random() * limit + 0);
      this.gifPath = data.data[randomOffset].images.fixed_height.url;
    }, error => (this.errorMessage = <any>error));
  }
  showRecovery() {
    console.log("click");
    this.updatePasswordDiv = true;
    console.log(this.updatePasswordDiv);
  }
}
