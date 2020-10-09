import { calculateHouseMaterials, getAllHouseMaterials } from '../index';

// accept parameters from yargs
export function calcHouseMaterials(width:number, length:number, units:boolean ,name:string): any{
    console.log(width, length, units, name);
}

export function getHouseMaterials(name:string){
    console.log('string');
}