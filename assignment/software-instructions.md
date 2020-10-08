**Table of Contents**

1. [Overview](./readme.md)
2. [Assessment Criteria](./criteria.md)
3. [Scenario](./scenario.md)
4. [Project Instructions (100 Points)](./project-instructions.md)
5. [Setup Instructions (300 Points)](./setup-instructions.md)
6. [Software Instructions (600 Points)](./software-instructions.md)
7. [Submission](./submission.md)

---

<br/>
<br/>

# Software Instructions

The software we're going to build for this assessment is called "Gerald's Construction Calculator"

## 1. Yargs (50 Points)

- From your `master` branch, create a new branch called `feature/yargs` and checkout this branch
- Add `yargs` to your project
- Setup yargs with two commands:
  - `calc-house-materials`
    - Parameters:
      - `width`
      - `length`
      - `isFeet`
      - `name`
  - `get-house-materials`
    - Parameters:
      - `name`
- Each command should use `console.log` to output the parameters passed
- Update the readme.md
- Version your package
- Commit your changes
- Merge your feature branch into master on your local machine

NOTE: You are not expected to write tests for Yargs

## 2. calcHouseMaterials (50 Points)

- From your `master` branch, create a new branch called `feature/calculator` and checkout this branch
- Create a folder in the `src` folder called `calculator`
- Create a file in the `src/calculator` called `index.ts`
- Create a function in `src/calculator/index.ts` called `calcHouseMaterials` that accepts the following parameters:
  - name
  - width
  - length
  - units
- Have the function simply use `console.log` to display the parameters on the command line
- Update the Yargs `calc-house-materials` command to call this function
- Create a `readme.md` file inside `src/calculator`
- Update the readme.md's
- Version your package
- Commit your changes

## 3. getHouseMaterials (50 Points)

- Create a function in `src/calculator/index.ts` called `getHouseMaterials` that accepts the following parameters:
  - name
- Have the function simply use `console.log` to display the parameters on the command line
- Update the Yargs `get-house-materials` command to call this function
- Update the readme.md's
- Version your package
- Commit your changes

## 4. Interface (50 Points)

- Create a file in `src/calculator` called `interfaces.ts`
- Create an interface in `src/calculator/interfaces.ts` that defines the output as required in Gerald's example
- Make both the `calcHouseMaterials` function, and the `getHouseMaterials` function, have a return type of the specified interface
- Have the functions return the correct output format to match the interface (zeroes for uncalculated values are expected for the time being)
- Update the yargs command to use `console.log` to output the result of `calcHouseMaterials` and `getHouseMaterials` to the CLI
- Write tests for both `calcHouseMaterials` and `getHouseMaterials` functions
- Update the readme.md's
- Version your package
- Commit your changes

## 5. calcWallLumber Function (50 Points)

- Write a function called `calcWallLumber` that takes `inches` as a parameter and returns the number of plates, studs, and posts required for a single wall
- Write tests for `calcWallLumber`
- Update the readme.md's
- Commit your changes

## 6. calcDrywall Function (50 Points)

- Write a function called `calcDrywall` that takes `width` and `length` as parameters and returns the number of sheets of plywood for a house
- Write tests for `calcDrywall`
- Update the readme.md's
- Commit your changes

## 7. calcPlywood Function (50 Points)

- Write a function that called `calcPlywood` takes `width` and `length` as parameters and returns the number of sheets of plywood for a house
- Write tests for `calcPlywood`
- Update the readme.md's
- Commit your changes

## 8. calcMaterials Function (50 Points)

- Write a function called `calcMaterials` that takes the following parameters:
  - `width`
  - `length`
  - `calcWallLumber` function
  - `calcDrywall` function
  - `calcPlywood` function
- The function should return the results in the format specified for the `materials` section of the interface defined in step 4
- Write tests for `calcMaterials`
- Update the readme.md's
- Commit your changes

## 9. Integrate calcMaterials (50 Points)

- Integrate the `calcMaterials` function into the `calcHouseMaterials` function so that the output of `calcMaterials` is included in the output of `calcHouseMaterials`
- Update tests for `calcHouseMaterials`
- Update the readme.md's
- Version your package
- Commit your changes

## 10. calcWaste Function (50 Points)

- Write a function called `calcWaste` that takes the result of the `calcMaterials` function and results in the format specified for the `waste` section of the interface defined in step 4
- Integrate the `calcWaste` function into the `calcHouseMaterials` function so that the output of `calcWaste` is included in the output of `calcHouseMaterials`
- Write tests for `calcWaste`
- Update tests for `calcHouseMaterials`
- Update the readme.md's
- Version your package
- Commit your changes

## 11. calcPurchase Function (50 Points)

- Write a function called `calcPurchase` that takes the result of the `calcMaterials` and `calcWaste` functions and results in the format specified for the `purchase` section of the interface defined in step 4
- Integrate the `calcPurchase` function into the `calcHouseMaterials` function so that the output of `calcPurchase` is included in the output of `calcHouseMaterials`
- Write tests for `calcPurchase`
- Update tests for `calcHouseMaterials`
- Update the readme.md's
- Version your package
- Commit your changes

## 12. Saving & Retrieving Results (50 Points)

- Modify `calcHouseMaterials` to save the results in a `json` file stored in `dist/data`
- Modify `getHouseMaterials` to read the results of a `json` file stored in `dist/data` based on the name parameter and return them
- Write tests for `getHouseMaterials`
- Update tests for `calcHouseMaterials`
- Update the readme.md's
- Version your package
- Commit your changes

---

[Previous: Setup Instructions](./setup-instructions.md) | [Next: Submission](./submission.md)
