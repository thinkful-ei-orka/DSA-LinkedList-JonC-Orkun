const DoublyLinkedList = require('./doublyLinkedList');

function mainDLL() {
    const DLL = new DoublyLinkedList();
    DLL.insertFirst('Aquaria');
    DLL.insertLast('Caprica');
    DLL.insertLast('Gemenon');
    DLL.insertLast('Picon');
    DLL.insertBefore('Gemenon', 'Sagittaron');
    DLL.insertLast('Tauron');
    DLL.remove('Picon');

    // console.log(DLL.find('Tauron'));


    function dllReverse(dll) {
        if (dll.head === null) {
            return;
        }
    
        let head = DLL.findLast(dll);
    
        let current = dll.head;
        let reversed = current.previous;
        let temp = current.next;
    
        while (current !== null) {
            temp = current.next;
            current.next = reversed;
            current.previous = temp;
            reversed = current;
            current = temp;
        }
    
        dll.head = head;
    
        return dll;
    }

    console.log(dllReverse(DLL));
}

console.log(mainDLL())





