import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) {

    this.cargarProductos();

   }

   private cargarProductos() {

<<<<<<< HEAD
      this.http.get('https://portafolio-alexis.firebaseio.com/productos_idx.json')
=======
      this.http.get('https://portafoliogustavo-ca5fa-default-rtdb.firebaseio.com/productos_idx.json')
>>>>>>> Initial commit
          .subscribe( (resp: Producto[]) => {

            this.productos = resp;
            this.cargando = false;

          });
    }

    getProducto( id: string ){
      
<<<<<<< HEAD
      return this.http.get(`https://portafolio-alexis.firebaseio.com/productos/${ id }.json`)
=======
      return this.http.get(`https://portafoliogustavo-ca5fa-default-rtdb.firebaseio.com/productos/${ id }.json`)
>>>>>>> Initial commit

    }
}
