function Node(value) {
    this.value = value;
    this.leftChild = {};
    this.rightChild = {};
};

node1 = new Node("Alice");
node2 = new Node("Bob");
node3 = new Node("Jhon");
node4 = new Node("Lisa");
node5 = new Node("Carl");
node6 = new Node("Pepe");

node1.leftChild = node2;
node1.rightChild = node3;
node3.leftChild = node4;
node3.rightChild = node5;
node5.rightChild = node6;

function treeTraversal(node, name) {

    if (node.value === name) {
        console.log("Encontre " + node.value);
        return node;
    }

    let result;
    console.log("Valor " + node.value);
    if (node.leftChild !== undefined) {
        result = treeTraversal(node.leftChild, name);
        if (result) return result;
    }

    if (node.rightChild !== undefined) {
        result = treeTraversal(node.rightChild, name);
        if (result) return result;
    }

}

node = treeTraversal(node1, "Bob");
if (node) {
    console.log(node.value);
} else {
    console.log("No existe nodo");
}