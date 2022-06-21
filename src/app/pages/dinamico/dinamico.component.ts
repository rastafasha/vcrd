import { Component, Input, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VcardModel } from '../../models/vcard.model';


@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html'
})
export class DinamicoComponent implements OnInit{

  public vcardForm: FormGroup;
  vcard: VcardModel;
  id: string | null;

  vCardInfo:string;
  value: string;
  display = false;
  elementType: 'url' | 'canvas' | 'img' = 'url';
  href : string;


  constructor (
    private fb: FormBuilder,
    private aRoute: ActivatedRoute,
  ) {

    this.vcardForm = this.fb.group({
      name : [ '', Validators.required ],
      surname : [ '', Validators.required ],
      org :[ '', Validators.required ],
      url :[ '', Validators.required ],
      faceb :[ '', Validators.required ],
      insta :[ '', Validators.required ],
      linked :[ '', Validators.required ],
      twitt :[ '', Validators.required ],
      email :[ '', Validators.required ],
      photo :[ '', Validators.required ],
      title :[ '', Validators.required ],
      address :[ '', Validators.required ],
      tel :[ '', Validators.required ],
      telhome :[ '', Validators.required ],
      telmovil :[ '', Validators.required ],
      telprincipal : [ '', Validators.required ],
   });

  }

  ngOnInit(): void {



  }



  formularioVcard(){

    let {name, surname , org , url , faceb, insta,
      linked , twitt , email , photo , title , address ,
      tel , telhome , telmovil , telprincipal} = this.vcardForm.getRawValue();

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

      this.generateQRCode();
  }

  downloadImage(){
    this.href = document.getElementsByTagName('img')[0].src;
  }

  generateQRCode(){
    if( this.vcardForm.valid){
      this.display = true;
      // alert("Please enter the name");
    }
    return false;

  }






}
