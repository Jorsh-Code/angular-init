import { Component } from '@angular/core';
import { CharacterHp } from './models/character-hp.model';
import { Character } from './models/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';

  constructor(){
    this.otherFunction();

  }

  basicTypes(){
    const VIDEO_GAME : string = 'GOW';
    let characterName : string = 'Kratos';
    let hp : number = 100;

    let live : boolean = (hp == 0) ? true : false;

    const TITLE : string = `Game: ${VIDEO_GAME}
      character: ${characterName}
      hp: ${hp}`;
      
    console.log(TITLE);
  }

  arrayAndObjects(){
    const SKILLS : string[] = ['punch','kick','combo'];

    const character : Character = {
      name: 'Kratos',
      healthPoints: 100,
      live: true,
      skills: SKILLS
    }

    character['color'] = 'red';
     
  }

  ifStatement(){
    let x : number = 20, y : number = 10;
    if(x > y){
      console.log('x is greater');
    }else if(x < y){
      console.log('y is greater');
    }else{
      console.log('They are equal');
    }
  }

  switchStatement(){
    let x : number = 20, y : number = 10;
    switch (x - y) {
      case 0:
        console.log('Result: 0');
        break;

      case 5:
          console.log('Result: 5');
          break;

      default:
        console.log('Result: ');
        break;
    }
  }

  whileStatement(){
    let counter : number = 1;

    while(counter <= 5){
      console.log(counter);
      counter++;
    }

    counter = 1;

    do{
      console.log(counter);
      counter++;
    }while(counter <= 5);

  }

  forStatement(){
    let array : number[] = [10,20,30,40,50,60,70,80];

    for(const INDEX in array){
      console.log(INDEX);
      console.log(array[INDEX]);
    }

    for(let i :  number = 0; i < array.length; i += 2){
      console.log(i);
      console.log(array[i]); 
    }

    array.forEach((value,index) => {
      if(value == 50){
        console.log(value);
        console.log(index);
      }
    });
  }

  tryCatchStatement(){
    try{
      throw "error";
    }catch(e){
      console.log(e)
    }
  }

  basicFunctions(){
    function sumNumbers(a : number, b : number) : number{
        return a+b;
    }

    console.log(sumNumbers(12,3));

    const ARROW_SUM = (a : number, b : number) : number => a+b;

    console.log(ARROW_SUM(15,59));

    const ARROW_MUL = (a : number, b : number,c? : number) : number => a*b*(c ?? 1);

    console.log(ARROW_MUL(2,4));

    console.log(ARROW_MUL(2,2,4));
  }

  healthCharacter(character : CharacterHp){
    character.healthPoints = 100;
  }

  otherFunction(){
    const character : CharacterHp = {
      name: 'Kratos',
      healthPoints: 50,
      live: true,
      skills: ['punch','kick','combo'],
      showHp(){
        console.log(this.healthPoints)
      }
    }

    character.showHp();
    this.healthCharacter(character);
    character.showHp();


  }
}
