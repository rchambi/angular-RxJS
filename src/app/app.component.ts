import { Component, VERSION } from '@angular/core';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent { 
  name = 'ReactiveX ' + VERSION.major;

  cuadrado:any[number] =[];
  public ngOnInit():void{
  //of==> crea lista de elementos
  const nums = of(1,2,3,4,5);

  //pipe-->fusina cantidad de observables
  //en este caso map y filter
    const alCuadrado = pipe(
      //filter-->filtra
      filter((n: number) => n % 2 == 0),
      // map-->op matematica observable
      map(n => n * n)
    );
  alCuadrado(nums).subscribe(x=>{
    this.cuadrado.push(x);    
    
  });
    console.log(this.cuadrado);
  ///mostrar en pantalla 
  // this.cuadrado.subscribe(x=> console.log(x))
  }
}
















