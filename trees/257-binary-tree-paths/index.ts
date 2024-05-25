class NodeTree {
  val: number;
  left: NodeTree | null;
  right: NodeTree | null;
  constructor(val: number, left = null, right = null) {
    this.val = val;
    this.right = right;
    this.left = left;
  }
}

var binaryTreePaths = function (root) {
  const res: string[] = [];
  function dfs(node, path = "") {
    if (!node) {
      return;
    }
    path += node.val;
    if (!node.left && !node.right) {
      res.push(path);
      return;
    }
    dfs(node.left, path + "->");
    dfs(node.right, path + "->");
  }
  dfs(root);
  return res;
};
