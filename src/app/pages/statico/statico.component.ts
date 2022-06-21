import { Component, Input, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VcardModel } from '../../models/vcard.model';
import { VcardService } from '../../service/vcard.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-statico',
  templateUrl: './statico.component.html'
})
export class StaticoComponent implements OnInit{


  vCardInfo:string;

  constructor () {
  }

  ngOnInit(): void {
    let name = ' Alejandro',
    surname = ' Martínez',
    org = 'svcbmf',
    url = 'https://www.svcbmf.net',
    email = 'maxilof@gmail.com',
    faceb = 'https://www.facebook.com',
    insta = 'https://www.instagram.com',
    linked = 'https://www.linkedin.com',
    twitt = 'https://www.twitter.com',
    photo = 'https://svcbmf.net/assets/img/logo.png',
    title = 'Cirugía Buco-maxilofacial',
    address = 'Calle Chivacoa. Urológico San Román. ',
    tel = '+58(212)991-11.11 ',
    telhome = '+58(212)992-11.11',
    telmovil = '+58(212)992-11.11',
    telprincipal = '+58(212)992-11.11';





    this.vCardInfo = `BEGIN:VCARD
VERSION:3.0
N:${surname};${name}
FN:${surname} ${name}
ORG:${org}
URL:${url}
URL:${faceb}
URL:${insta}
URL:${linked}
URL:${twitt}
EMAIL:${email}
PHOTO:${photo}
TITLE:${title}
ADR;TYPE=work:${address}
TEL;TYPE=voice,work,oref:${tel}
TEL;TYPE=voice,home,oref:${telhome}
TEL;TYPE=voice,mobile,oref:${telmovil}
TEL;TYPE=voice,first,oref:${telprincipal}
END:VCARD
`


console.log(this.vCardInfo);


  }












}
