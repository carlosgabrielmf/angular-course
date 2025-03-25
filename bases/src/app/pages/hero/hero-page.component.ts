import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";



@Component({
  viewProviders: [HeroPageComponent],
  templateUrl: './hero-page.component.html',
  //* Cuando trabajamos con Pipes es necesario hacer las importaciones
  imports: [UpperCasePipe],
  styles: `

    dd{
      font-weight: bold;
    }

  `
})


    export class HeroPageComponent {

      name = signal('Ironman');
      age = signal(45);

        heroDescription = computed( () => {
          const description = `${this.name()} - ${this.age()}`;
          return description;
        } )

        // getHeroDescription () {
        //   //* Los signals se llaman como metodos con () al final.
        //   return `${ this.name() } - ${ this.age() }`;
        // }

        nameCapitalize = computed( () => {
          const name = this.name().toUpperCase();
          return name;
        } )

        changeHero() {
          this.name.update((name: string) => name = 'Spiderman');
          this.age.update((age: number) => age = 22);
        }

        resetForm(resetName: string = 'Ironman', resetAge:  number = 45) {
          this.age.set(resetAge);
          this.name.set(resetName);
        }

         changeAge(change: number = 60) {
          return this.age.set(change);
         }
    }
