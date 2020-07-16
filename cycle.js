const LinkedList = require('./linkedList');

function main() {
    const CycleList = new LinkedList();


    function cycleList(ll) {

        let currentOne = ll.head;
        let currentTwo = ll.head;

        while (currentOne !== null && currentTwo !== null && currentTwo.next !== null) {
            currentOne = currentOne.next;
            currentTwo = currentTwo.next.next;

            if (currentOne === currentTwo) {
                return true;
            }
        }
        return false; 
    }

    console.log(cycleList(CycleList));

}



main();