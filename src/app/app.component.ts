import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private mailApiUrl = 'https://designcorpapi.herokuapp.com/api/sendmail';
  title = 'app';
  _headers = new Headers();
  contact = { name:"",
              email:"",
              subject:"",
              message:"",
              formSuccess : false,
              showLoader : "hide-loader" };
  public options = new RequestOptions({ headers: this._headers });

    ngAfterViewInit() {
    $(document).ready(function () {
  $("a.page-scroll").bind("click",function(a)
  {
    var o=$(this);
    $("html, body").stop().animate({scrollTop:$(o.attr("href")).offset().top-50},700,"easeInOutExpo"),
                        a.preventDefault()}),$("body").scrollspy({target:".navbar-fixed-top",offset:51}), $(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()}),$("#mainNav").affix({offset:{top:100}})}());
    



  }


  constructor(private _http: Http) {
    this._headers.append('Content-type', 'application/json; charset=utf-8');

  }
public cleanContactForm(myForm){
myForm.resetForm();
this.contact.showLoader = "hide-loader";
this.contact.formSuccess = true;
}

  public sendMail( myForm) {
this.contact.showLoader = "show-loader";
    var data = {
      from: "edin.lonic@edu.fit.ba",
      to: "edin.lonic@edu.fit.ba, lonic__@hotmail.com",
      subject: "sending mail from angular",
      content: '<h1> DesignCorp mail provider </h1>' +
      '<p> <strong>Subject: </strong> ' + this.contact.subject + ' <p>' +
      '<p><strong> Sender name: </strong>' + this.contact.name + ' <p>' +
      '<p><strong> Sender email: </strong>' + this.contact.email + ' <p>' +
      '<p><strong> Message: </strong>' + this.contact.message + ' <p>'
    };

    this._http.post(this.mailApiUrl, JSON.stringify(data), this.options).subscribe(
      () => this.cleanContactForm(myForm),
      err => alert(err)
    );
  }
}
