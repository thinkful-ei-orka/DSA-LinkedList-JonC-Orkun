const LinkedList = require('./linkedList');
function main() {
  let SLL = new LinkedList();
  SLL.insertLast('Apollo');
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
  console.log(SLL.find('Apollo'));
  SLL.insertAfter('Helo', 'Hotdog');
  console.log(SLL.find('Helo'));
  SLL.insertAt(2, 'Kat');
  console.log(SLL.find('Boomer'));
  SLL.remove('Tauhida');

  return SLL;
}

main();
