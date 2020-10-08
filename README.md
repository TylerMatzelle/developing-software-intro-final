# Focus College ACSD Final

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---
# Scenario
Gerald has asked for a new application, similar to the previous applications in build.
![Gerald]
## Gerald's needs
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

## Output
Gerald has a specific output requirement, as he needs to feed this result into another application. He's given us a sample below:
```
{
    "name": "Matzelle",
    "house": {
        "width": 103,
        "length": 103,
        "outsideWallArea": 39552,
        "insideWallArea": 36864,
        "ceilingArea": 9216
    },
    "materials": {
        "lumber": {
            "2x4": 40,
            "4x4": 4
        },
        "plywood": {
            "4x8": 9
        },
        "drywall": {
            "4x8": 10
        }
    },
    "waste": {
        "lumber": {
            "2x4": 4,
            "4x4": 1
        },
        "plywood": {
            "4x8": 1
        },
        "drywall": {
            "4x8": 1
        }
    },
    "purchase": {
        "lumber": {
            "2x4": 44,
            "4x4": 5
        },
        "plywood": {
            "4x8": 10
        },
        "drywall": {
            "4x8": 11
        }
    }
}
```
In this sample, you can see that Gerald needs the materials required seperate from the waste, and then a third section to total the purchase. There are also three attributes of the house added that can be calculated:

outsideWallArea
insideWallArea
ceilingArea

## To run this program
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

Run all scripts
```
npm run start:dev
```

### Note to other developers:
In this project I use typescipt to use [ESLint] with node packet manager.

[ESLint]: https://eslint.org/docs/user-guide/getting-started
[Gerald]: https://image.shutterstock.com/image-photo/construction-worker-new-house-renovation-260nw-246224482.jpg