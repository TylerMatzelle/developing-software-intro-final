# Focus College ACSD Final

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---

# Scenario
---

Gerald has asked for a new application, similar to the previous applications in build.
![Gerald]

## Gerald's needs
---

Gerald would like an application that gives him his entire list of supplies needed to build a house. He has a specific list of supplies that he's resposible for purchasing.

Gerald must purchase:

2x4's (for studs and plates)
4x4's (for posts)
Plywood (for exterior of house)
Drywall (for interior of house)
Gerald will only purchase:

8 foot long 2x4's
8 foor long 4x4's
4x8 foot sheets of plywood
4x8 sheets of drywall.
He needs enough plywood to completely cover the exterior walls of the house.

He needs enough drywall to completely cover the interior walls of the house, and the ceiling.

He needs enough 2x4's and 4x4's to frame the walls. He would like the numbers of plates, studs, and posts to be returned seperately.

The smallest wall he will build is 4 feet in length.

The largest wall he will build is 60 feet in length.

He would like the program to default the wall length parameters to inches, but have an option to insert feet.

He would like to save houses by customer name

He would like to recall houses by customer name

## Installation Instructions
---
```
npm install
```

## To run this program's scripts
---

Start script:
```
npm run start
```

Compiler:
```
tsc
```

Compile and start:
```
npm run build
```

Lint
```
npm run build:lint
```

format
```
npm run build:prettier
```

Test
```
npm run test
```

Test with Coverage
```
npm run coverage
```

To input parameters
```
node dist/index.js --width x --length y --inFeet(optional) --name (Name of customer)
```

Run all scripts
```
npm run start:dev
```

### Note to other developers:

In this project I use typescipt to use [ESLint], [Prettier], [Mocha], and [Chai] with node packet manager.

[gerald]: https://image.shutterstock.com/image-photo/construction-worker-new-house-renovation-260nw-246224482.jpg
[eslint]: https://eslint.org/docs/user-guide/getting-started
[prettier]: https://prettier.io/docs/en/install.html
[Mocha]: https://www.npmjs.com/package/mocha
[Chai]: https://www.npmjs.com/package/chai