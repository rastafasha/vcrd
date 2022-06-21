import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VcardModel } from '../models/vcard.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VcardService {

  urlServer = environment.baseUrl;

  vcardInfo: VcardModel [] = [
    new VcardModel(1,
      'Ronar Alejandro',
      'Gudiño Martínez',
      'svcbmf',
      'www.svcbmf.net',
      'maxilofacialccs@gmail.com',
      'www.facebook.net',
      'www.instagram.net',
      'www.linkedin.net',
      'www.twitter.net',
      'https://svcbmf.net/assets/img/logo.png',
      'Cirugía Buco-maxilofacial' ,
      'Calle Chivacoa. Urológico San Román.' ,
      '+58(212)993-60.03 ' ,
      '+58(212)993-60.03 ' ,
      '+58(212)992-10.78' ,
      '+58(212)992-10.78'
      ),

  ]

  constructor(
    private http: HttpClient
  ) { }

  getVcards(): VcardModel[]{
    return this.vcardInfo;
  }

  // getStudents(): Observable<any>{
  //   return this.http.get(this.urlServer)
  // }

  elminarVcard(id: string): Observable<any>{
    return this.http.delete(this.urlServer + 'vcard/' + id);
  }

  guardarVcard(vcard: VcardModel): Observable<any>{
    return this.http.post(this.urlServer + 'vcard/', vcard);
  }

  obtenerVcard(id: string): Observable<any>{
    return this.http.get(this.urlServer + 'vcard/' + id);

  }

  editarVcard(id: string, vcard: VcardModel): Observable<any>{
    return this.http.put(this.urlServer + 'vcard/' + id, vcard);
  }


}
