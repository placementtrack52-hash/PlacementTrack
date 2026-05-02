import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'

const problems = [
  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Search in a Binary Search Tree',
    difficulty: 'Easy',
    description: `Search a value in BST.`,
    inputExample: 'root, key',
    outputExample: 'node/null',
    explanation: `Use BST property (left < root < right).`,
    code: {
      java: `class Node{
  int val;
  Node left,right;
  Node(int v){val=v;}
}

class Main{
  static Node search(Node root,int key){
    if(root==null || root.val==key) return root;

    if(key < root.val)
      return search(root.left,key);
    else
      return search(root.right,key);
  }
}`,

      python: `class Node:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None

def search(root,key):
    if not root or root.val==key:
        return root

    if key < root.val:
        return search(root.left,key)
    else:
        return search(root.right,key)`,

      c: `// recursive search`,
      cpp: `struct Node{
    int val;
    Node* left;
    Node* right;
    Node(int v):val(v),left(NULL),right(NULL){}
};

Node* search(Node* root,int key){
    if(!root || root->val==key) return root;

    if(key < root->val)
        return search(root->left,key);
    else
        return search(root->right,key);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Find Min/Max in BST',
    difficulty: 'Easy',
    description: `Find minimum and maximum value.`,
    inputExample: 'root',
    outputExample: 'min, max',
    explanation: `Leftmost = min, Rightmost = max.`,
    code: {
      java: `class Main{
  static int findMin(Node root){
    while(root.left!=null){
      root=root.left;
    }
    return root.val;
  }

  static int findMax(Node root){
    while(root.right!=null){
      root=root.right;
    }
    return root.val;
  }
}`,

      python: `def findMin(root):
    while root.left:
        root=root.left
    return root.val

def findMax(root):
    while root.right:
        root=root.right
    return root.val`,

      c: `// leftmost rightmost`,
      cpp: `int findMin(Node* root){
    while(root->left) root=root->left;
    return root->val;
}

int findMax(Node* root){
    while(root->right) root=root->right;
    return root->val;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Ceil in a Binary Search Tree',
    difficulty: 'Medium',
    description: `Find smallest value ≥ key.`,
    inputExample: 'root, key',
    outputExample: 'ceil value',
    explanation: `Move left when node ≥ key.`,
    code: {
      java: `class Main{
  static int ceil(Node root,int key){
    int res=-1;

    while(root!=null){
      if(root.val==key) return key;

      if(root.val > key){
        res=root.val;
        root=root.left;
      } else {
        root=root.right;
      }
    }
    return res;
  }
}`,

      python: `def ceil(root,key):
    res=-1

    while root:
        if root.val==key:
            return key
        if root.val > key:
            res=root.val
            root=root.left
        else:
            root=root.right

    return res`,

      c: `// iterative`,
      cpp: `int ceil(Node* root,int key){
    int res=-1;

    while(root){
        if(root->val==key) return key;

        if(root->val > key){
            res=root->val;
            root=root->left;
        } else {
            root=root->right;
        }
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Floor in a Binary Search Tree',
    difficulty: 'Medium',
    description: `Find largest value ≤ key.`,
    inputExample: 'root, key',
    outputExample: 'floor value',
    explanation: `Move right when node ≤ key.`,
    code: {
      java: `class Main{
  static int floor(Node root,int key){
    int res=-1;

    while(root!=null){
      if(root.val==key) return key;

      if(root.val < key){
        res=root.val;
        root=root.right;
      } else {
        root=root.left;
      }
    }
    return res;
  }
}`,

      python: `def floor(root,key):
    res=-1

    while root:
        if root.val==key:
            return key
        if root.val < key:
            res=root.val
            root=root.right
        else:
            root=root.left

    return res`,

      c: `// iterative`,
      cpp: `int floor(Node* root,int key){
    int res=-1;

    while(root){
        if(root->val==key) return key;

        if(root->val < key){
            res=root->val;
            root=root->right;
        } else {
            root=root->left;
        }
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Insert Node in BST',
    difficulty: 'Easy',
    description: `Insert a value into BST.`,
    inputExample: 'root, key',
    outputExample: 'updated tree',
    explanation: `Follow BST property and insert.`,
    code: {
      java: `class Main{
  static Node insert(Node root,int key){
    if(root==null) return new Node(key);

    if(key < root.val)
      root.left=insert(root.left,key);
    else
      root.right=insert(root.right,key);

    return root;
  }
}`,

      python: `def insert(root,key):
    if not root:
        return Node(key)

    if key < root.val:
        root.left=insert(root.left,key)
    else:
        root.right=insert(root.right,key)

    return root`,

      c: `// recursive insert`,
      cpp: `Node* insert(Node* root,int key){
    if(!root) return new Node(key);

    if(key < root->val)
        root->left=insert(root->left,key);
    else
        root->right=insert(root->right,key);

    return root;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Delete a Node in Binary Search Tree',
    difficulty: 'Medium',
    description: `Delete a node from BST.`,
    inputExample: 'root, key',
    outputExample: 'updated tree',
    explanation: `Handle 0,1,2 child cases.`,
    code: {
      java: `class Main{
  static Node delete(Node root,int key){
    if(root==null) return null;

    if(key < root.val){
      root.left=delete(root.left,key);
    } else if(key > root.val){
      root.right=delete(root.right,key);
    } else {
      if(root.left==null) return root.right;
      if(root.right==null) return root.left;

      Node succ=root.right;
      while(succ.left!=null) succ=succ.left;

      root.val=succ.val;
      root.right=delete(root.right,succ.val);
    }
    return root;
  }
}`,

      python: `def delete(root,key):
    if not root:
        return None

    if key < root.val:
        root.left=delete(root.left,key)
    elif key > root.val:
        root.right=delete(root.right,key)
    else:
        if not root.left:
            return root.right
        if not root.right:
            return root.left

        succ=root.right
        while succ.left:
            succ=succ.left

        root.val=succ.val
        root.right=delete(root.right,succ.val)

    return root`,

      c: `// delete cases`,
      cpp: `Node* deleteNode(Node* root,int key){
    if(!root) return NULL;

    if(key < root->val)
        root->left=deleteNode(root->left,key);
    else if(key > root->val)
        root->right=deleteNode(root->right,key);
    else{
        if(!root->left) return root->right;
        if(!root->right) return root->left;

        Node* succ=root->right;
        while(succ->left) succ=succ->left;

        root->val=succ->val;
        root->right=deleteNode(root->right,succ->val);
    }
    return root;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'K-th Smallest and Largest in BST',
    difficulty: 'Medium',
    description: `Find k-th smallest and largest.`,
    inputExample: 'root, k',
    outputExample: 'values',
    explanation: `Inorder traversal.`,
    code: {
      java: `class Main{
  static int count=0,ans=0;

  static void inorder(Node root,int k){
    if(root==null) return;

    inorder(root.left,k);
    count++;
    if(count==k){
      ans=root.val;
      return;
    }
    inorder(root.right,k);
  }
}`,

      python: `def kthSmallest(root,k):
    stack=[]
    while True:
        while root:
            stack.append(root)
            root=root.left
        root=stack.pop()
        k-=1
        if k==0:
            return root.val
        root=root.right`,

      c: `// inorder`,
      cpp: `int kthSmallest(Node* root,int k){
    stack<Node*> st;

    while(true){
        while(root){
            st.push(root);
            root=root->left;
        }
        root=st.top(); st.pop();
        k--;
        if(k==0) return root->val;
        root=root->right;
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Check if Tree is BST',
    difficulty: 'Medium',
    description: `Validate BST.`,
    inputExample: 'root',
    outputExample: 'true/false',
    explanation: `Use range validation.`,
    code: {
      java: `class Main{
  static boolean isBST(Node root,long min,long max){
    if(root==null) return true;

    if(root.val <= min || root.val >= max) return false;

    return isBST(root.left,min,root.val) &&
           isBST(root.right,root.val,max);
  }
}`,

      python: `def isBST(root,low=float('-inf'),high=float('inf')):
    if not root:
        return True
    if not (low < root.val < high):
        return False
    return isBST(root.left,low,root.val) and isBST(root.right,root.val,high)`,

      c: `// range check`,
      cpp: `bool isBST(Node* root,long mn,long mx){
    if(!root) return true;

    if(root->val <= mn || root->val >= mx) return false;

    return isBST(root->left,mn,root->val) &&
           isBST(root->right,root->val,mx);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Lowest Common Ancestor in BST',
    difficulty: 'Easy',
    description: `Find LCA in BST.`,
    inputExample: 'root, p, q',
    outputExample: 'node',
    explanation: `Use BST property.`,
    code: {
      java: `class Main{
  static Node lca(Node root,int p,int q){
    if(root==null) return null;

    if(p < root.val && q < root.val)
      return lca(root.left,p,q);

    if(p > root.val && q > root.val)
      return lca(root.right,p,q);

    return root;
  }
}`,

      python: `def lca(root,p,q):
    if not root:
        return None

    if p < root.val and q < root.val:
        return lca(root.left,p,q)
    if p > root.val and q > root.val:
        return lca(root.right,p,q)

    return root`,

      c: `// bst property`,
      cpp: `Node* lca(Node* root,int p,int q){
    if(!root) return NULL;

    if(p < root->val && q < root->val)
        return lca(root->left,p,q);

    if(p > root->val && q > root->val)
        return lca(root->right,p,q);

    return root;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Construct BST from Preorder',
    difficulty: 'Medium',
    description: `Build BST from preorder.`,
    inputExample: 'preorder array',
    outputExample: 'root',
    explanation: `Use bounds method.`,
    code: {
      java: `class Main{
  static int i=0;

  static Node build(int[] pre,int bound){
    if(i==pre.length || pre[i] > bound) return null;

    Node root=new Node(pre[i++]);
    root.left=build(pre,root.val);
    root.right=build(pre,bound);

    return root;
  }
}`,

      python: `def buildBST(pre):
    i=0

    def build(bound):
        nonlocal i
        if i==len(pre) or pre[i] > bound:
            return None

        root=Node(pre[i])
        i+=1

        root.left=build(root.val)
        root.right=build(bound)

        return root

    return build(float('inf'))`,

      c: `// preorder build`,
      cpp: `Node* build(vector<int>& pre,int& i,int bound){
    if(i==pre.size() || pre[i] > bound) return NULL;

    Node* root=new Node(pre[i++]);

    root->left=build(pre,i,root->val);
    root->right=build(pre,i,bound);

    return root;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Inorder Successor and Predecessor in BST',
    difficulty: 'Medium',
    description: `Find inorder successor and predecessor.`,
    inputExample: 'root, key',
    outputExample: 'pred, succ',
    explanation: `Traverse while updating potential answers.`,
    code: {
      java: `class Main{
  static Node[] find(Node root,int key){
    Node pred=null,succ=null;

    while(root!=null){
      if(root.val==key){
        if(root.left!=null){
          Node t=root.left;
          while(t.right!=null) t=t.right;
          pred=t;
        }
        if(root.right!=null){
          Node t=root.right;
          while(t.left!=null) t=t.left;
          succ=t;
        }
        break;
      }
      else if(key < root.val){
        succ=root;
        root=root.left;
      } else {
        pred=root;
        root=root.right;
      }
    }
    return new Node[]{pred,succ};
  }
}`,

      python: `def find(root,key):
    pred=succ=None

    while root:
        if root.val==key:
            if root.left:
                t=root.left
                while t.right:
                    t=t.right
                pred=t
            if root.right:
                t=root.right
                while t.left:
                    t=t.left
                succ=t
            break
        elif key < root.val:
            succ=root
            root=root.left
        else:
            pred=root
            root=root.right

    return pred,succ`,

      c: `// predecessor successor`,
      cpp: `pair<Node*,Node*> find(Node* root,int key){
    Node* pred=NULL,*succ=NULL;

    while(root){
        if(root->val==key){
            if(root->left){
                Node* t=root->left;
                while(t->right) t=t->right;
                pred=t;
            }
            if(root->right){
                Node* t=root->right;
                while(t->left) t=t->left;
                succ=t;
            }
            break;
        }
        else if(key < root->val){
            succ=root;
            root=root->left;
        } else {
            pred=root;
            root=root->right;
        }
    }
    return {pred,succ};
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Merge Two BSTs',
    difficulty: 'Medium',
    description: `Merge two BSTs into sorted list.`,
    inputExample: 'root1, root2',
    outputExample: 'sorted array',
    explanation: `Inorder + merge.`,
    code: {
      java: `class Main{
  static void inorder(Node root,List<Integer> res){
    if(root==null) return;
    inorder(root.left,res);
    res.add(root.val);
    inorder(root.right,res);
  }

  static List<Integer> merge(Node r1,Node r2){
    List<Integer> a=new ArrayList<>(),b=new ArrayList<>();
    inorder(r1,a);
    inorder(r2,b);

    List<Integer> res=new ArrayList<>();
    int i=0,j=0;

    while(i<a.size() && j<b.size()){
      if(a.get(i)<b.get(j)) res.add(a.get(i++));
      else res.add(b.get(j++));
    }

    while(i<a.size()) res.add(a.get(i++));
    while(j<b.size()) res.add(b.get(j++));

    return res;
  }
}`,

      python: `def inorder(root,res):
    if not root: return
    inorder(root.left,res)
    res.append(root.val)
    inorder(root.right,res)

def merge(r1,r2):
    a,b=[],[]
    inorder(r1,a)
    inorder(r2,b)

    i=j=0
    res=[]

    while i<len(a) and j<len(b):
        if a[i]<b[j]:
            res.append(a[i]); i+=1
        else:
            res.append(b[j]); j+=1

    res+=a[i:]
    res+=b[j:]
    return res`,

      c: `// inorder merge`,
      cpp: `void inorder(Node* root,vector<int>& res){
    if(!root) return;
    inorder(root->left,res);
    res.push_back(root->val);
    inorder(root->right,res);
}

vector<int> merge(Node* r1,Node* r2){
    vector<int> a,b;
    inorder(r1,a);
    inorder(r2,b);

    vector<int> res;
    int i=0,j=0;

    while(i<a.size() && j<b.size()){
        if(a[i]<b[j]) res.push_back(a[i++]);
        else res.push_back(b[j++]);
    }

    while(i<a.size()) res.push_back(a[i++]);
    while(j<b.size()) res.push_back(b[j++]);

    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Two Sum in BST',
    difficulty: 'Medium',
    description: `Check if pair with sum K exists.`,
    inputExample: 'root, k',
    outputExample: 'true/false',
    explanation: `Inorder + two pointer.`,
    code: {
      java: `class Main{
  static void inorder(Node root,List<Integer> res){
    if(root==null) return;
    inorder(root.left,res);
    res.add(root.val);
    inorder(root.right,res);
  }

  static boolean solve(Node root,int k){
    List<Integer> arr=new ArrayList<>();
    inorder(root,arr);

    int i=0,j=arr.size()-1;

    while(i<j){
      int sum=arr.get(i)+arr.get(j);
      if(sum==k) return true;
      else if(sum<k) i++;
      else j--;
    }
    return false;
  }
}`,

      python: `def solve(root,k):
    arr=[]
    def inorder(r):
        if not r: return
        inorder(r.left)
        arr.append(r.val)
        inorder(r.right)

    inorder(root)

    i,j=0,len(arr)-1
    while i<j:
        s=arr[i]+arr[j]
        if s==k:
            return True
        elif s<k:
            i+=1
        else:
            j-=1
    return False`,

      c: `// two pointer`,
      cpp: `void inorder(Node* root,vector<int>& arr){
    if(!root) return;
    inorder(root->left,arr);
    arr.push_back(root->val);
    inorder(root->right,arr);
}

bool solve(Node* root,int k){
    vector<int> arr;
    inorder(root,arr);

    int i=0,j=arr.size()-1;

    while(i<j){
        int sum=arr[i]+arr[j];
        if(sum==k) return true;
        else if(sum<k) i++;
        else j--;
    }
    return false;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Recover BST (Fix Swapped Nodes)',
    difficulty: 'Hard',
    description: `Fix BST where two nodes swapped.`,
    inputExample: 'root',
    outputExample: 'corrected BST',
    explanation: `Detect violation in inorder.`,
    code: {
      java: `class Main{
  static Node first=null,second=null,prev=null;

  static void inorder(Node root){
    if(root==null) return;

    inorder(root.left);

    if(prev!=null && root.val < prev.val){
      if(first==null) first=prev;
      second=root;
    }
    prev=root;

    inorder(root.right);
  }

  static void recover(Node root){
    inorder(root);
    int temp=first.val;
    first.val=second.val;
    second.val=temp;
  }
}`,

      python: `def recover(root):
    first=second=prev=None

    def inorder(node):
        nonlocal first,second,prev
        if not node: return

        inorder(node.left)

        if prev and node.val < prev.val:
            if not first:
                first=prev
            second=node
        prev=node

        inorder(node.right)

    inorder(root)
    first.val,second.val=second.val,first.val`,

      c: `// fix swapped`,
      cpp: `Node *first=NULL,*second=NULL,*prev=NULL;

void inorder(Node* root){
    if(!root) return;

    inorder(root->left);

    if(prev && root->val < prev->val){
        if(!first) first=prev;
        second=root;
    }
    prev=root;

    inorder(root->right);
}

void recover(Node* root){
    inorder(root);
    swap(first->val,second->val);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Largest BST in Binary Tree',
    difficulty: 'Hard',
    description: `Find size of largest BST in BT.`,
    inputExample: 'root',
    outputExample: 'size',
    explanation: `Postorder with min/max.`,
    code: {
      java: `class Info{
  int size,min,max;
  boolean isBST;

  Info(int s,int mn,int mx,boolean b){
    size=s;min=mn;max=mx;isBST=b;
  }
}

class Main{
  static int ans=0;

  static Info solve(Node root){
    if(root==null) return new Info(0,Integer.MAX_VALUE,Integer.MIN_VALUE,true);

    Info l=solve(root.left);
    Info r=solve(root.right);

    if(l.isBST && r.isBST && root.val > l.max && root.val < r.min){
      int size=l.size+r.size+1;
      ans=Math.max(ans,size);
      return new Info(size,Math.min(root.val,l.min),Math.max(root.val,r.max),true);
    }

    return new Info(0,0,0,false);
  }
}`,

      python: `def largestBST(root):
    ans=0

    def solve(node):
        nonlocal ans
        if not node:
            return (0,float('inf'),float('-inf'),True)

        l=solve(node.left)
        r=solve(node.right)

        if l[3] and r[3] and node.val > l[2] and node.val < r[1]:
            size=l[0]+r[0]+1
            ans=max(ans,size)
            return (size,min(node.val,l[1]),max(node.val,r[2]),True)

        return (0,0,0,False)

    solve(root)
    return ans`,

      c: `// postorder`,
      cpp: `struct Info{
    int size,min,max;
    bool isBST;
};

int ans=0;

Info solve(Node* root){
    if(!root) return {0,INT_MAX,INT_MIN,true};

    Info l=solve(root->left);
    Info r=solve(root->right);

    if(l.isBST && r.isBST && root->val > l.max && root->val < r.min){
        int size=l.size+r.size+1;
        ans=max(ans,size);
        return {size,min(root->val,l.min),max(root->val,r.max),true};
    }

    return {0,0,0,false};
}`
    }
  },
    {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Replace Every Element with Least Greater on Right',
    difficulty: 'Medium',
    description: `Replace each element with next greater element on right.`,
    inputExample: '[8,58,71,18,31,32,63,92,43]',
    outputExample: '[18,63,92,31,32,43,92,-1,-1]',
    explanation: `Traverse from right using BST.`,
    code: {
      java: `class Node{
  int val;
  Node left,right;
  Node(int v){val=v;}
}

class Main{
  static Node insert(Node root,int key,int[] succ){
    if(root==null) return new Node(key);

    if(key < root.val){
      succ[0]=root.val;
      root.left=insert(root.left,key,succ);
    } else {
      root.right=insert(root.right,key,succ);
    }
    return root;
  }

  static int[] solve(int[] arr){
    int n=arr.length;
    int[] res=new int[n];
    Node root=null;

    for(int i=n-1;i>=0;i--){
      int[] succ={-1};
      root=insert(root,arr[i],succ);
      res[i]=succ[0];
    }
    return res;
  }
}`,

      python: `class Node:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None

def insert(root,key):
    succ=None

    def helper(node,key):
        nonlocal succ
        if not node:
            return Node(key)
        if key < node.val:
            succ=node.val
            node.left=helper(node.left,key)
        else:
            node.right=helper(node.right,key)
        return node

    root=helper(root,key)
    return root,succ

def solve(arr):
    root=None
    res=[-1]*len(arr)

    for i in range(len(arr)-1,-1,-1):
        root,s=insert(root,arr[i])
        res[i]=s if s is not None else -1

    return res`,

      c: `// bst insert tracking successor`,
      cpp: `Node* insert(Node* root,int key,int& succ){
    if(!root) return new Node(key);

    if(key < root->val){
        succ=root->val;
        root->left=insert(root->left,key,succ);
    } else {
        root->right=insert(root->right,key,succ);
    }
    return root;
}

vector<int> solve(vector<int>& arr){
    int n=arr.size();
    vector<int> res(n);
    Node* root=NULL;

    for(int i=n-1;i>=0;i--){
        int succ=-1;
        root=insert(root,arr[i],succ);
        res[i]=succ;
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Conflicting Appointments',
    difficulty: 'Medium',
    description: `Find overlapping intervals.`,
    inputExample: '[(1,3),(2,4),(5,7)]',
    outputExample: 'conflicts',
    explanation: `Sort by start and check overlap.`,
    code: {
      java: `class Main{
  static void solve(int[][] arr){
    Arrays.sort(arr,(a,b)->a[0]-b[0]);

    for(int i=1;i<arr.length;i++){
      if(arr[i][0] < arr[i-1][1]){
        System.out.println("Conflict: ["+
          arr[i-1][0]+","+arr[i-1][1]+"] & ["+
          arr[i][0]+","+arr[i][1]+"]");
      }
    }
  }
}`,

      python: `def solve(arr):
    arr.sort()

    for i in range(1,len(arr)):
        if arr[i][0] < arr[i-1][1]:
            print("Conflict:",arr[i-1],arr[i])`,

      c: `// sort intervals`,
      cpp: `void solve(vector<pair<int,int>>& arr){
    sort(arr.begin(),arr.end());

    for(int i=1;i<arr.size();i++){
        if(arr[i].first < arr[i-1].second){
            cout<<"Conflict: ["<<arr[i-1].first<<","<<arr[i-1].second
                <<"] & ["<<arr[i].first<<","<<arr[i].second<<"]\\n";
        }
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Preorder to BST',
    difficulty: 'Medium',
    description: `Construct BST from preorder.`,
    inputExample: '[8,5,1,7,10,12]',
    outputExample: 'BST',
    explanation: `Use bounds recursion.`,
    code: {
      java: `class Main{
  static int i=0;

  static Node build(int[] pre,int bound){
    if(i==pre.length || pre[i]>bound) return null;

    Node root=new Node(pre[i++]);
    root.left=build(pre,root.val);
    root.right=build(pre,bound);

    return root;
  }
}`,

      python: `def build(pre):
    i=0

    def helper(bound):
        nonlocal i
        if i==len(pre) or pre[i]>bound:
            return None

        root=Node(pre[i])
        i+=1
        root.left=helper(root.val)
        root.right=helper(bound)
        return root

    return helper(float('inf'))`,

      c: `// bounds`,
      cpp: `Node* build(vector<int>& pre,int& i,int bound){
    if(i==pre.size() || pre[i]>bound) return NULL;

    Node* root=new Node(pre[i++]);
    root->left=build(pre,i,root->val);
    root->right=build(pre,i,bound);
    return root;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'BST with Dead End',
    difficulty: 'Medium',
    description: `Check if BST contains dead end.`,
    inputExample: 'BST',
    outputExample: 'true/false',
    explanation: `Track range (min,max).`,
    code: {
      java: `class Main{
  static boolean solve(Node root,int min,int max){
    if(root==null) return false;

    if(min==max) return true;

    return solve(root.left,min,root.val-1) ||
           solve(root.right,root.val+1,max);
  }
}`,

      python: `def deadEnd(root,low=1,high=float('inf')):
    if not root:
        return False

    if low==high:
        return True

    return (deadEnd(root.left,low,root.val-1) or
            deadEnd(root.right,root.val+1,high))`,

      c: `// range`,
      cpp: `bool deadEnd(Node* root,int low,int high){
    if(!root) return false;

    if(low==high) return true;

    return deadEnd(root->left,low,root->val-1) ||
           deadEnd(root->right,root->val+1,high);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Search Trees',
    title: 'Flatten BST to Sorted List',
    difficulty: 'Medium',
    description: `Convert BST to increasing order list.`,
    inputExample: 'BST',
    outputExample: 'right-skewed tree',
    explanation: `Inorder traversal.`,
    code: {
      java: `class Main{
  static Node prev=null,head=null;

  static void flatten(Node root){
    if(root==null) return;

    flatten(root.left);

    if(prev==null){
      head=root;
    } else {
      prev.right=root;
    }
    root.left=null;
    prev=root;

    flatten(root.right);
  }
}`,

      python: `def flatten(root):
    prev=None
    head=None

    def inorder(node):
        nonlocal prev,head
        if not node: return

        inorder(node.left)

        if not prev:
            head=node
        else:
            prev.right=node

        node.left=None
        prev=node

        inorder(node.right)

    inorder(root)
    return head`,

      c: `// inorder link`,
      cpp: `Node* prev=NULL,*head=NULL;

void flatten(Node* root){
    if(!root) return;

    flatten(root->left);

    if(!prev) head=root;
    else prev->right=root;

    root->left=NULL;
    prev=root;

    flatten(root->right);
}`
    }
  }
]

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to MongoDB')
        
        const ops = problems.map(p => ({
            updateOne: {
                filter: { title: p.title },
                update: { $setOnInsert: p },
                upsert: true
            }
        }))

        const result = await CodeProblem.bulkWrite(ops)
        console.log(`Successfully processed ${problems.length} problems for Binary Search Trees`)
        
        await mongoose.disconnect()
        process.exit(0)
    } catch (error) {
        console.error('Seed failed:', error)
        process.exit(1)
    }
}

seed()
