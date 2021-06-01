import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CargaArchivosSService {
 
  constructor(private http: HttpClient) {
   
 }




    postImage(imagen: File) {
      const formData = new FormData();
      formData.append('image', imagen);
  
      this.http.post('http://localhost:33771/api/CargaFormato/CargarArchivo', formData)
        .subscribe((resp: any) => {
          console.log(resp);
        });
    }
}
