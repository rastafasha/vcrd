

export class VcardModel {
  id?: number;
  name: string;
  surname: string;
  org: string;
  url: string;
  faceb:string;
  insta:  string;
  linked: string;
  twitt: string;
  email: string;
  photo: string;
  title: string;
  address: string;
  tel: number;
  telhome: number;
  telmovil: number;
  telprincipal: number;

  constructor(
    id,name , surname , org , url , faceb, insta,
  linked , twitt , email , photo , title , address ,
  tel , telhome , telmovil , telprincipal ,){
    this.id = id;
    this.name = name;
  this.surname = surname;
  this.org= org;
  this.url= url;
  this.faceb = faceb;
  this.insta=insta;
  this.linked= linked;
  this.twitt= twitt;
  this.email= email;
  this.photo= photo;
  this.title= title;
  this.address= address;
  this.tel= tel;
  this.telhome =telhome;
  this.telmovil=telmovil;
  this.telprincipal= telprincipal;
  }
}
