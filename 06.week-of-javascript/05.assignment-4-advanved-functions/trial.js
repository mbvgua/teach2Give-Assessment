function getDescendants(randomArray) {
    const descendants = [];
    
    if (randomArray.children) {
      for (const child of randomArray.children) {
        descendants.push(child.name);
        descendants.push(...getDescendants(child));
      }
    }
    return descendants;
  }
  




  const descendants = getDescendants(theJonathans);
  console.log(descendants); // Output: ["Bob", "Charlie", "Emily", "David"]


  // Example family tree
  const familyTree = {
    name: 'Alice',
    children: [
      {
        name: 'Bob',
        children: [
          { name: 'Charlie' },
          { name: 'Emily' },
        ],
      },
      { name: 'David' },
    ],
  };
  
  // Get all descendants
  
  // Print the descendants
  