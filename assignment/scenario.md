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

# Scenario

Gerlad, our favorite contractor, has asked for a new application; it's very similar to other applications that he has had written.

## Continuity

The prior assignments 1-3 lead up to this final, and the scenario's throughout those assignment still apply unless specifically overridden in this scenario. You will be marked on the execution of this final, but should some requirements not be clear, refer to the prior assignments for your answer.

**NOTE: These go to external links!**

- [Assignment 1](./DevelopingSoftwareIntroduction-Assignment1.pdf)
- [Assignment 2](https://github.com/Focus-College/developing-software-intro-assignment-2/blob/master/assignment/scenario.md)
- [Assingment 3](https://github.com/Focus-College/developing-software-intro-assignment-3/blob/master/assignment/scenario.md)

# Gerald's Needs

Gerald would like an application that gives him his entire list of supplies needed to build a house. He has a specific list of supplies that he's resposible for purchasing.

- Gerald must purchase:

  - 2x4's (for studs and plates)
  - 4x4's (for posts)
  - Plywood (for exterior of house)
  - Drywall (for interior of house)

- Gerald will only purchase:

  - 8 foot long 2x4's
  - 8 foor long 4x4's
  - 4x8 foot sheets of plywood
  - 4x8 sheets of drywall.

- He needs enough plywood to completely cover the exterior walls of the house.

- He needs enough drywall to completely cover the interior walls of the house, and the ceiling.

- He needs enough 2x4's and 4x4's to frame the walls. He would like the numbers of plates, studs, and posts to be returned seperately.

- The smallest wall he will build is 4 feet in length.

- The largest wall he will build is 60 feet in length.

- He would like the program to default the wall length parameters to inches, but have an option to insert feet.

- He would like to save houses by customer name

- He would like to recall houses by customer name

# Output

Gerald has a specific output requirement, as he needs to feed this result into another application. He's given us a sample below:

```json
{
  "name": "Holbrook",
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

- outsideWallArea
- insideWallArea
- ceilingArea

---

[Previous: Assessment Criteria](./criteria.md) |
[Next: Project Instructions](./project-instructions.md)
