class Node {
    constructor(value){
        this.value = value;
        this.childrens = [];
    }
};

node1 = new Node(1);
node2 = new Node(2);
node3 = new Node(3);
node4 = new Node(4);
node5 = new Node(5);
node6 = new Node(6);
node7 = new Node(7);
node8 = new Node(8);

node1.childrens.push(node2);
node1.childrens.push(node3);
node1.childrens.push(node4);

node4.childrens.push(node5);
node4.childrens.push(node6);
node5.childrens.push(node7);
node7.childrens.push(node8);

function treeTraversal(node) {
    if (node === undefined) return undefined;

    console.log(node.value);

    if (node.childrens === undefined) return undefined;

    node.childrens.forEach(node => {
        treeTraversal(node);
    });
}

treeTraversal(node1);