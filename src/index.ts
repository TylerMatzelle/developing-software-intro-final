import { Argv } from "yargs";
import yargs = require('yargs');

export function calcHouseMaterials(yargs: Argv):void{

    // create a new yargs command
    yargs.command(
        // command name without spaces
        "calc-house-materials",

        // command description
        "Calculates the materials needed for a house",  

        // define parameters for the command
        {
            width: {
                type: 'number',
                alias: 'w',
                description: 'The width of the house',
            },

            length: {
                type: 'number',
                alias: 'l',
                description: 'The length of the house',
            },

            isFeet: {
                type: 'boolean',
                alias: 'F',
                description: 'Change the units to feet rather than inches',
            },

            name: {
                type: 'string',
                alias: 'n',
                description: 'name of the house'
            }
        }
    );
}

export function getHouseMaterials(yargs: Argv): void{
    yargs.command(
        "get-house-materials",
        "retrives the calculated materials",
        {
            name: {
                type: 'string',
                alias: 'n',
                description: 'name of the house'
            }
        }
    )
}

console.log(calcHouseMaterials, getHouseMaterials);

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();