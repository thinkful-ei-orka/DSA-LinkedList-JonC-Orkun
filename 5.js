// 5. Reverse a list
// Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.

const LinkedList = require('./linkedList');
function main() {
    let SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');


    function reverse(ll) {
        if (ll.head === null) {
            return;
        }

        let previous = null;
        let curr = ll.head;
        let nextNode = ll.head.next;

        while (curr.next !== null) {
            curr.next = previous;
            previous = curr;
            curr = nextNode;
            nextNode = curr.next;
        }

        ll.head = curr;
        return ll;
    }

    console.log(reverse(SLL))
}

main();