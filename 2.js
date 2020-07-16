const LinkedList = require('./linkedList');
function main() {
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  SLL.insertLast('Tauhida');

  //   SLL.insertBefore('Husker', 'squirrel');
  //   SLL.remove('squirrel');
  //   console.log(SLL.find('Starbuck'));
  //   SLL.insertAfter('Starbuck', 'afterapollo');
  //   console.log(SLL.find('Starbuck'));

  SLL.insertBefore('Boomer', 'Athena');
  //   console.log(SLL.find('Apollo'));
  SLL.insertAfter('Helo', 'Hotdog');
  //   console.log(SLL.find('Helo'));
  SLL.insertAt(2, 'Kat');
  //   console.log(SLL.find('Boomer'));
  SLL.remove('Tauhida');
  // console.log(SLL);

 

  
  // console.log(size(SLL));

  // console.log(findPrevious(SLL, 'Husker'));

  function findLast(ll) {
    let temp = ll.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    return temp;
  }
  // console.log(findLast(SLL));


  //5

  function reverse(ll) {
    if (ll.head === null) {
      return;
    }
    
    let head = findLast(ll);

    let current = ll.head;
    let reversed = null;
    let temp = current.next;

    while (current !== null) {
      temp = current.next;
      current.next = reversed;
      reversed = current;
      current = temp;
    }

    ll.head = head;

    return ll;
  }
  // console.log(reverse(SLL))


  //6.

  function thirdFromEnd(ll) {
    if (ll.head === null) {
      return;
    }

    let rev = reverse(ll);
    let counter = 1;
    let current = rev.head;
    while (counter < 3) {
      current = current.next;
      counter++;
    }

    return current;
  }

  // console.log(thirdFromEnd(SLL));


  function middleOfList(ll) {
    if (ll.head === null) {
      return;
    }

    let num = size(ll);
    let newNum = Math.floor((num - 1) / 2);
    let current = ll.head;
    let counter = 0;

    while (counter < newNum) {
      current = current.next;
      counter++;
    }

    return current;
  }

  // console.log(middleOfList(SLL))

 
}

main();
