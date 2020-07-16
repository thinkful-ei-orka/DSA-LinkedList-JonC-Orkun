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
  console.log(SLL);

  function display(ll) {
    let temp = ll.head;
    while (temp.next !== null) {
      temp = temp.next;
      console.log(temp);
    }
  }

  function size(ll) {
    let temp = ll.head;
    let count = 0;
    while (temp.next !== null) {
      temp = temp.next;
      count++;
    }
    return count;
  }
  display(SLL);
  console.log(size(SLL));

  function findPrevious(ll, item) {
    let temp = ll.head;
    while (temp.next.value !== item) {
      temp = temp.next;
    }
    return temp;
  }

  console.log(findPrevious(SLL, 'Husker'));

  function findLast(ll) {
    let temp = ll.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    return temp;
  }
  console.log(findLast(SLL));
}

main();
