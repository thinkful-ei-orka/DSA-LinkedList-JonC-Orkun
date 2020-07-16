function WhatDoesThisProgramDo(lst) {
  //Set current to list head
  let current = lst.head;
  //While current is not null
  while (current !== null) {
    //Set newNode to current list head
    let newNode = current;
    //While the next list head is not null
    while (newNode.next !== null) {
      //Check if its value equals the newNode(current) value
      if (newNode.next.value === current.value) {
        // If it does, set the next head to equal the head after it
        newNode.next = newNode.next.next;
      } else {
        //otherwise the newNode (current) gets set the the next head
        newNode = newNode.next;
      }
    }

    current = current.next;
  }
}

// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

//Skip any values that are equal to the current value
//O(N^2)
