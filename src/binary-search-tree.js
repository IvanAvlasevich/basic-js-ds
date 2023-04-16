const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootOne = null;
  }

  root() {
    if(!this.rootOne){return null}
    console.debug('Root Корень',this.rootOne.value)
    return this.rootOne.value
  }

  add( data ) {
    this.rootOne = addData(this.rootOne, data);

    function addData(node, value){
      if(!node){
        node = new TreeNode(data);
        return node
      }
      if(value === node.value){return node}
      if (node.value > value){
        node.left = addData(node.left, value)
      }else {
        node.right = addData(node.right, value)
      }
      return node
    }
  }

  has( data ) {
    return searchData(this.rootOne, data);
    function searchData(node, value){
      if(!node){
        return false;
      }
      if(node.value === value){
        return true
      }
      return (value<node.value)?
        searchData(node.left, value):
        searchData(node.right, value);
    }
  }

  find( data ) {
    return findData(this.rootOne, data);
    function findData(node, value){
      if(!node){
        return null;
      }
      if(node.value === value){
        return node.value
      }
      return (value<node.value)?
        findData(node.left, value):
        findData(node.right, value);
    }
  }

  remove( data ) {
    this.rootOne = removeData(this.rootOne, data);
    function removeData(node, value){
      if(!node){return null}
      if(value < node.value){
        node.left = removeData(node.left, value)
        return node
      }else if(node.value < value){
        node.right = removeData(node.right, value)
        return node
      }else{
        if(!node.left && !node.right){
          return null;
        }
      }

      if (!node.left){
        node = node.right;
        return node;
      }

      if (!node.right){
        node = node.left;
        return node;
      }

      let minFromRight = node.right;
      while (minFromRight.left){
        minFromRight = minFromRight.left;
      }
      node.value = minFromRight.value;
      node.right = removeData(node.right, minFromRight.value);
      return node;

    }
  }

  min() {
    if (!this.root){
      return;
    }
      while(this.rootOne.left){
          this.rootOne = this.rootOne.left
        
      
    }
    console.debug('min',this.rootOne.value)
    return this.rootOne
  }

  max() {
    if (!this.root){
      return;
    }
      while(this.rootOne.right){
          this.rootOne = this.rootOne.right
      
    }
    console.debug('max',this.rootOne.value)
    return this.rootOne.value
  }

  print(rootOne = this.rootOne){
    if(!rootOne){
      return true;
    }
    console.debug(rootOne.value)
    this.print(rootOne.left)
    this.print(rootOne.right)
  }
}

//? класс узла
class TreeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


// const tree = new BinarySearchTree()
// tree.add(5)
// tree.add(3)
// tree.add(6)
// tree.add(2)
// tree.add(8)
// tree.print()
// tree.root()
// console.debug(tree.has( 8 ))
// console.debug(tree.find(3))


module.exports = {
  BinarySearchTree
};