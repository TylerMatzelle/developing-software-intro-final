import { Arguments, Argv } from "yargs";
import { calcHouseMaterials } from './calculator/index';
import yargs = require('yargs');

export function calculateHouseMaterials(yargs: Argv):void{

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
            },
        },

        // define the function we want to run once the arguments are parsed
        function (
            args: Arguments<{
                width: number;
                length: number;
                isFeet: boolean;
                name: string;
                w: number;
                l: number;
                F: boolean;
                n: string;
            }>
        ) {
            
            const requirements = calcHouseMaterials (
                args.width,
                args.length,
                args.isFeet,
                args.name
            );

            console.log( requirements );

        }
    );
}

export function getAllHouseMaterials(yargs: Argv): void{
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

calculateHouseMaterials(yargs);
getAllHouseMaterials(yargs);

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();