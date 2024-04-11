/*Question 1
Begin by defining a Node class for the individual nodes in the binary tree, 
each containing a value and pointers for the left and right nodes. 
Following this, write an inorder function that receives a tree's root node as an argument and prints the node values in an inorder sequence. 
To test your solution, establish a binary tree containing nodes with integer values [1,2,3,4,5]. 
Invoke the inorder function to check the output [4,2,5,1,3]. 
*/
class Node {
    // Binary tree data structure
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function inorder(root) {
    //Creating in-order function
    let stack = [];
    let curr = root;
  
    while (curr !== null || stack.length > 0) {
      while (curr !== null) {
        stack.push(curr);
        curr = curr.left;
      }
  
      curr = stack.pop();
      console.log(curr.data);
  
      curr = curr.right;
    }
  }
  
  // Create the tree and call the inorder function
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  inorder(root);

  /*Question 2
  Create a Node class in JavaScript to build parts of a binary tree. 
  Then, make an 'isSameTree' function. 
  This function checks two binary trees and tells if they are the same or not. 
  Test your function by making two binary trees and comparing them. 
  For an input binary tree with nodes [1,2,3], 'isSameTree' should return 'true' for the same output [1,2,3] and 'false' otherwise. */
  class Node1 {
    // Binary tree data structure
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function isSameTree(p, q) {
    // Creating function to check if the trees are same
    let queue = [];
    queue.push(p);
    queue.push(q);
  
    while (queue.length > 0) {
      let node1 = queue.shift();
      let node2 = queue.shift(); // One of the nodes is null
  
      if (!node1 && !node2) {
        continue;
      }
  
      if (!node1 || !node2 || node1.val !== node2.val) {
        return false;
      }
  
      queue.push(node1.left);
      queue.push(node2.left);
  
      queue.push(node1.right);
      queue.push(node2.right);
    }
  
    return true;
  }
  
  // Testing the code:
  let p = new Node(1, new Node(2), new Node(3));
  let q = new Node(1, new Node(2), new Node(3));
  console.log(isSameTree(p, q)); 
  
  p = new Node(1, new Node(2));
  q = new Node(1, null, new Node(2));
  console.log(!isSameTree(p, q)); 