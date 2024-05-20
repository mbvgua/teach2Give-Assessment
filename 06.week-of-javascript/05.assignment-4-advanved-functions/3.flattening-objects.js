// Imagine you have a family tree represented as a nested JavaScript
//  object like the one below:
 
let theJonathans = {
    children: [
      {
        name: 'Elias'
      },
      {
        name: 'Sarah',
        children: [
          {
            name: 'Max',
            children: [{
              name: 'Lily'
            }]
          },
          {
            name: 'Zoe'
          },
          {
            name: 'Theo'
          }
        ]
      },
      {
        name: 'Maria',
        children: [
          {
            name: 'Daniel'
          }
        ]
      },
      {
        name: 'David'
      }
    ]
  };
 
 
Task:
 
Write a recursive function in JavaScript that takes this family tree structure as input. The function should return a single array containing the names of all your descendants, including my children, grandchildren, and great-grandchildren (and so on, depending on the depth of the family tree)
 