import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'
import { fileURLToPath } from 'url'

export const problems = [
   {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Binary Tree Representation',
    difficulty: 'Easy',
    description: `Create a binary tree using nodes.`,
    inputExample: 'values',
    outputExample: 'tree structure',
    explanation: `Each node has left and right pointers.`,
    code: {
      java: `class Node{
  int val;
  Node left,right;
  Node(int v){
    val=v;
    left=right=null;
  }
}

class Main{
  public static void main(String[] args){
    Node root=new Node(1);
    root.left=new Node(2);
    root.right=new Node(3);
    root.left.left=new Node(4);
    root.left.right=new Node(5);
  }
}`,

      python: `class Node:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None

# Example tree
root=Node(1)
root.left=Node(2)
root.right=Node(3)
root.left.left=Node(4)
root.left.right=Node(5)`,

      c: `#include<stdio.h>
#include<stdlib.h>

struct Node{
  int val;
  struct Node* left;
  struct Node* right;
};

struct Node* newNode(int val){
  struct Node* node=(struct Node*)malloc(sizeof(struct Node));
  node->val=val;
  node->left=node->right=NULL;
  return node;
}

// usage
// struct Node* root=newNode(1);`,

      cpp: `struct Node{
    int val;
    Node* left;
    Node* right;
    Node(int v){
        val=v;
        left=right=NULL;
    }
};

// Example
Node* root=new Node(1);
root->left=new Node(2);
root->right=new Node(3);`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Preorder Traversal',
    difficulty: 'Easy',
    description: `Root → Left → Right`,
    inputExample: 'root',
    outputExample: 'preorder list',
    explanation: `Visit root first.`,
    code: {
      java: `class Main{
  static void preorder(Node root){
    if(root==null) return;

    System.out.print(root.val+" ");
    preorder(root.left);
    preorder(root.right);
  }
}`,

      python: `def preorder(root):
    if not root:
        return
    print(root.val,end=" ")
    preorder(root.left)
    preorder(root.right)`,

      c: `void preorder(struct Node* root){
  if(!root) return;

  printf("%d ",root->val);
  preorder(root->left);
  preorder(root->right);
}`,

      cpp: `void preorder(Node* root){
    if(!root) return;

    cout<<root->val<<" ";
    preorder(root->left);
    preorder(root->right);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Inorder Traversal',
    difficulty: 'Easy',
    description: `Left → Root → Right`,
    inputExample: 'root',
    outputExample: 'inorder list',
    explanation: `Gives sorted order in BST.`,
    code: {
      java: `class Main{
  static void inorder(Node root){
    if(root==null) return;

    inorder(root.left);
    System.out.print(root.val+" ");
    inorder(root.right);
  }
}`,

      python: `def inorder(root):
    if not root:
        return
    inorder(root.left)
    print(root.val,end=" ")
    inorder(root.right)`,

      c: `void inorder(struct Node* root){
  if(!root) return;

  inorder(root->left);
  printf("%d ",root->val);
  inorder(root->right);
}`,

      cpp: `void inorder(Node* root){
    if(!root) return;

    inorder(root->left);
    cout<<root->val<<" ";
    inorder(root->right);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Postorder Traversal',
    difficulty: 'Easy',
    description: `Left → Right → Root`,
    inputExample: 'root',
    outputExample: 'postorder list',
    explanation: `Visit root last.`,
    code: {
      java: `class Main{
  static void postorder(Node root){
    if(root==null) return;

    postorder(root.left);
    postorder(root.right);
    System.out.print(root.val+" ");
  }
}`,

      python: `def postorder(root):
    if not root:
        return
    postorder(root.left)
    postorder(root.right)
    print(root.val,end=" ")`,

      c: `void postorder(struct Node* root){
  if(!root) return;

  postorder(root->left);
  postorder(root->right);
  printf("%d ",root->val);
}`,

      cpp: `void postorder(Node* root){
    if(!root) return;

    postorder(root->left);
    postorder(root->right);
    cout<<root->val<<" ";
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Iterative Preorder Traversal',
    difficulty: 'Medium',
    description: `Preorder using stack.`,
    inputExample: 'root',
    outputExample: 'preorder list',
    explanation: `Use stack instead of recursion.`,
    code: {
      java: `class Main{
  static void preorder(Node root){
    if(root==null) return;

    Stack<Node> st=new Stack<>();
    st.push(root);

    while(!st.isEmpty()){
      Node node=st.pop();
      System.out.print(node.val+" ");

      if(node.right!=null) st.push(node.right);
      if(node.left!=null) st.push(node.left);
    }
  }
}`,

      python: `def preorder(root):
    if not root:
        return

    stack=[root]

    while stack:
        node=stack.pop()
        print(node.val,end=" ")

        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)`,

      c: `// use stack manually`,
      cpp: `void preorder(Node* root){
    if(!root) return;

    stack<Node*> st;
    st.push(root);

    while(!st.empty()){
        Node* node=st.top(); st.pop();
        cout<<node->val<<" ";

        if(node->right) st.push(node->right);
        if(node->left) st.push(node->left);
    }
}`
    }
  },
    {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Iterative Inorder Traversal',
    difficulty: 'Medium',
    description: `Left → Root → Right using stack.`,
    inputExample: 'root',
    outputExample: 'inorder list',
    explanation: `Use stack to simulate recursion.`,
    code: {
      java: `class Main{
  static void inorder(Node root){
    Stack<Node> st=new Stack<>();
    Node curr=root;

    while(curr!=null || !st.isEmpty()){
      while(curr!=null){
        st.push(curr);
        curr=curr.left;
      }
      curr=st.pop();
      System.out.print(curr.val+" ");
      curr=curr.right;
    }
  }
}`,

      python: `def inorder(root):
    stack=[]
    curr=root

    while curr or stack:
        while curr:
            stack.append(curr)
            curr=curr.left

        curr=stack.pop()
        print(curr.val,end=" ")
        curr=curr.right`,

      c: `// use stack`,
      cpp: `void inorder(Node* root){
    stack<Node*> st;
    Node* curr=root;

    while(curr || !st.empty()){
        while(curr){
            st.push(curr);
            curr=curr->left;
        }
        curr=st.top(); st.pop();
        cout<<curr->val<<" ";
        curr=curr->right;
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Iterative Postorder Traversal (2 Stacks)',
    difficulty: 'Medium',
    description: `Postorder using two stacks.`,
    inputExample: 'root',
    outputExample: 'postorder list',
    explanation: `Reverse preorder logic.`,
    code: {
      java: `class Main{
  static void postorder(Node root){
    if(root==null) return;

    Stack<Node> s1=new Stack<>();
    Stack<Node> s2=new Stack<>();

    s1.push(root);

    while(!s1.isEmpty()){
      Node node=s1.pop();
      s2.push(node);

      if(node.left!=null) s1.push(node.left);
      if(node.right!=null) s1.push(node.right);
    }

    while(!s2.isEmpty()){
      System.out.print(s2.pop().val+" ");
    }
  }
}`,

      python: `def postorder(root):
    if not root:
        return

    s1=[root]
    s2=[]

    while s1:
        node=s1.pop()
        s2.append(node)

        if node.left:
            s1.append(node.left)
        if node.right:
            s1.append(node.right)

    while s2:
        print(s2.pop().val,end=" ")`,

      c: `// two stacks`,
      cpp: `void postorder(Node* root){
    if(!root) return;

    stack<Node*> s1,s2;
    s1.push(root);

    while(!s1.empty()){
        Node* node=s1.top(); s1.pop();
        s2.push(node);

        if(node->left) s1.push(node->left);
        if(node->right) s1.push(node->right);
    }

    while(!s2.empty()){
        cout<<s2.top()->val<<" ";
        s2.pop();
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Iterative Postorder Traversal (1 Stack)',
    difficulty: 'Hard',
    description: `Postorder using one stack.`,
    inputExample: 'root',
    outputExample: 'postorder list',
    explanation: `Track last visited node.`,
    code: {
      java: `class Main{
  static void postorder(Node root){
    Stack<Node> st=new Stack<>();
    Node curr=root,last=null;

    while(curr!=null || !st.isEmpty()){
      if(curr!=null){
        st.push(curr);
        curr=curr.left;
      } else {
        Node peek=st.peek();

        if(peek.right!=null && last!=peek.right){
          curr=peek.right;
        } else {
          System.out.print(peek.val+" ");
          last=st.pop();
        }
      }
    }
  }
}`,

      python: `def postorder(root):
    stack=[]
    curr=root
    last=None

    while curr or stack:
        if curr:
            stack.append(curr)
            curr=curr.left
        else:
            peek=stack[-1]
            if peek.right and last!=peek.right:
                curr=peek.right
            else:
                print(peek.val,end=" ")
                last=stack.pop()`,

      c: `// single stack`,
      cpp: `void postorder(Node* root){
    stack<Node*> st;
    Node* curr=root;
    Node* last=NULL;

    while(curr || !st.empty()){
        if(curr){
            st.push(curr);
            curr=curr->left;
        } else {
            Node* peek=st.top();

            if(peek->right && last!=peek->right){
                curr=peek->right;
            } else {
                cout<<peek->val<<" ";
                last=peek;
                st.pop();
            }
        }
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Morris Inorder Traversal',
    difficulty: 'Hard',
    description: `Inorder without stack/recursion.`,
    inputExample: 'root',
    outputExample: 'inorder list',
    explanation: `Threaded binary tree.`,
    code: {
      java: `class Main{
  static void inorder(Node root){
    Node curr=root;

    while(curr!=null){
      if(curr.left==null){
        System.out.print(curr.val+" ");
        curr=curr.right;
      } else {
        Node prev=curr.left;
        while(prev.right!=null && prev.right!=curr)
          prev=prev.right;

        if(prev.right==null){
          prev.right=curr;
          curr=curr.left;
        } else {
          prev.right=null;
          System.out.print(curr.val+" ");
          curr=curr.right;
        }
      }
    }
  }
}`,

      python: `def inorder(root):
    curr=root

    while curr:
        if not curr.left:
            print(curr.val,end=" ")
            curr=curr.right
        else:
            prev=curr.left
            while prev.right and prev.right!=curr:
                prev=prev.right

            if not prev.right:
                prev.right=curr
                curr=curr.left
            else:
                prev.right=None
                print(curr.val,end=" ")
                curr=curr.right`,

      c: `// threaded tree`,
      cpp: `void inorder(Node* root){
    Node* curr=root;

    while(curr){
        if(!curr->left){
            cout<<curr->val<<" ";
            curr=curr->right;
        } else {
            Node* prev=curr->left;
            while(prev->right && prev->right!=curr)
                prev=prev->right;

            if(!prev->right){
                prev->right=curr;
                curr=curr->left;
            } else {
                prev->right=NULL;
                cout<<curr->val<<" ";
                curr=curr->right;
            }
        }
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Morris Preorder Traversal',
    difficulty: 'Hard',
    description: `Preorder without stack/recursion.`,
    inputExample: 'root',
    outputExample: 'preorder list',
    explanation: `Modify inorder logic.`,
    code: {
      java: `class Main{
  static void preorder(Node root){
    Node curr=root;

    while(curr!=null){
      if(curr.left==null){
        System.out.print(curr.val+" ");
        curr=curr.right;
      } else {
        Node prev=curr.left;
        while(prev.right!=null && prev.right!=curr)
          prev=prev.right;

        if(prev.right==null){
          System.out.print(curr.val+" ");
          prev.right=curr;
          curr=curr.left;
        } else {
          prev.right=null;
          curr=curr.right;
        }
      }
    }
  }
}`,

      python: `def preorder(root):
    curr=root

    while curr:
        if not curr.left:
            print(curr.val,end=" ")
            curr=curr.right
        else:
            prev=curr.left
            while prev.right and prev.right!=curr:
                prev=prev.right

            if not prev.right:
                print(curr.val,end=" ")
                prev.right=curr
                curr=curr.left
            else:
                prev.right=None
                curr=curr.right`,

      c: `// morris preorder`,
      cpp: `void preorder(Node* root){
    Node* curr=root;

    while(curr){
        if(!curr->left){
            cout<<curr->val<<" ";
            curr=curr->right;
        } else {
            Node* prev=curr->left;
            while(prev->right && prev->right!=curr)
                prev=prev->right;

            if(!prev->right){
                cout<<curr->val<<" ";
                prev->right=curr;
                curr=curr->left;
            } else {
                prev->right=NULL;
                curr=curr->right;
            }
        }
    }
}`
    }
  },
   {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Level Order Traversal',
    difficulty: 'Easy',
    description: `Traverse tree level by level.`,
    inputExample: 'root',
    outputExample: '[[level1],[level2],...]',
    explanation: `Use queue (BFS).`,
    code: {
      java: `class Main{
  static void levelOrder(Node root){
    if(root==null) return;

    Queue<Node> q=new LinkedList<>();
    q.add(root);

    while(!q.isEmpty()){
      int size=q.size();

      for(int i=0;i<size;i++){
        Node node=q.poll();
        System.out.print(node.val+" ");

        if(node.left!=null) q.add(node.left);
        if(node.right!=null) q.add(node.right);
      }
      System.out.println();
    }
  }
}`,

      python: `from collections import deque

def levelOrder(root):
    if not root:
        return

    q=deque([root])

    while q:
        for _ in range(len(q)):
            node=q.popleft()
            print(node.val,end=" ")

            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        print()`,

      c: `// use queue`,
      cpp: `void levelOrder(Node* root){
    if(!root) return;

    queue<Node*> q;
    q.push(root);

    while(!q.empty()){
        int size=q.size();

        for(int i=0;i<size;i++){
            Node* node=q.front(); q.pop();
            cout<<node->val<<" ";

            if(node->left) q.push(node->left);
            if(node->right) q.push(node->right);
        }
        cout<<endl;
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Reverse Level Order Traversal',
    difficulty: 'Medium',
    description: `Traverse bottom to top.`,
    inputExample: 'root',
    outputExample: 'reverse level order',
    explanation: `Use queue + stack.`,
    code: {
      java: `class Main{
  static void reverseLevel(Node root){
    if(root==null) return;

    Queue<Node> q=new LinkedList<>();
    Stack<Node> st=new Stack<>();

    q.add(root);

    while(!q.isEmpty()){
      Node node=q.poll();
      st.push(node);

      if(node.right!=null) q.add(node.right);
      if(node.left!=null) q.add(node.left);
    }

    while(!st.isEmpty()){
      System.out.print(st.pop().val+" ");
    }
  }
}`,

      python: `from collections import deque

def reverseLevel(root):
    if not root:
        return

    q=deque([root])
    st=[]

    while q:
        node=q.popleft()
        st.append(node)

        if node.right:
            q.append(node.right)
        if node.left:
            q.append(node.left)

    while st:
        print(st.pop().val,end=" ")`,

      c: `// queue + stack`,
      cpp: `void reverseLevel(Node* root){
    if(!root) return;

    queue<Node*> q;
    stack<Node*> st;

    q.push(root);

    while(!q.empty()){
        Node* node=q.front(); q.pop();
        st.push(node);

        if(node->right) q.push(node->right);
        if(node->left) q.push(node->left);
    }

    while(!st.empty()){
        cout<<st.top()->val<<" ";
        st.pop();
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Zig Zag Traversal',
    difficulty: 'Medium',
    description: `Alternate left-right traversal.`,
    inputExample: 'root',
    outputExample: 'zigzag order',
    explanation: `Use deque or reverse logic.`,
    code: {
      java: `class Main{
  static void zigzag(Node root){
    if(root==null) return;

    Queue<Node> q=new LinkedList<>();
    q.add(root);
    boolean leftToRight=true;

    while(!q.isEmpty()){
      int size=q.size();
      List<Integer> level=new ArrayList<>();

      for(int i=0;i<size;i++){
        Node node=q.poll();

        if(leftToRight)
          level.add(node.val);
        else
          level.add(0,node.val);

        if(node.left!=null) q.add(node.left);
        if(node.right!=null) q.add(node.right);
      }

      for(int v:level) System.out.print(v+" ");
      leftToRight=!leftToRight;
    }
  }
}`,

      python: `from collections import deque

def zigzag(root):
    if not root:
        return

    q=deque([root])
    leftToRight=True

    while q:
        level=[]

        for _ in range(len(q)):
            node=q.popleft()

            if leftToRight:
                level.append(node.val)
            else:
                level.insert(0,node.val)

            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)

        print(*level,end=" ")
        leftToRight=not leftToRight`,

      c: `// alternate order`,
      cpp: `void zigzag(Node* root){
    if(!root) return;

    queue<Node*> q;
    q.push(root);
    bool leftToRight=true;

    while(!q.empty()){
        int size=q.size();
        vector<int> level(size);

        for(int i=0;i<size;i++){
            Node* node=q.front(); q.pop();

            int idx=leftToRight ? i : size-1-i;
            level[idx]=node->val;

            if(node->left) q.push(node->left);
            if(node->right) q.push(node->right);
        }

        for(int v:level) cout<<v<<" ";
        leftToRight=!leftToRight;
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Diagonal Traversal',
    difficulty: 'Medium',
    description: `Traverse diagonally.`,
    inputExample: 'root',
    outputExample: 'diagonal order',
    explanation: `Use queue for left nodes.`,
    code: {
      java: `class Main{
  static void diagonal(Node root){
    if(root==null) return;

    Queue<Node> q=new LinkedList<>();
    q.add(root);

    while(!q.isEmpty()){
      Node node=q.poll();

      while(node!=null){
        System.out.print(node.val+" ");

        if(node.left!=null)
          q.add(node.left);

        node=node.right;
      }
    }
  }
}`,

      python: `from collections import deque

def diagonal(root):
    if not root:
        return

    q=deque([root])

    while q:
        node=q.popleft()

        while node:
            print(node.val,end=" ")

            if node.left:
                q.append(node.left)

            node=node.right`,

      c: `// diagonal`,
      cpp: `void diagonal(Node* root){
    if(!root) return;

    queue<Node*> q;
    q.push(root);

    while(!q.empty()){
        Node* node=q.front(); q.pop();

        while(node){
            cout<<node->val<<" ";

            if(node->left)
                q.push(node->left);

            node=node->right;
        }
    }
}`
    }
  },
    {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Vertical Order Traversal',
    difficulty: 'Medium',
    description: `Traverse nodes column-wise.`,
    inputExample: 'root',
    outputExample: 'vertical order',
    explanation: `Use BFS + horizontal distance.`,
    code: {
      java: `class Pair{
  Node node; int hd;
  Pair(Node n,int h){node=n;hd=h;}
}

class Main{
  static void vertical(Node root){
    if(root==null) return;

    Map<Integer,List<Integer>> map=new TreeMap<>();
    Queue<Pair> q=new LinkedList<>();
    q.add(new Pair(root,0));

    while(!q.isEmpty()){
      Pair p=q.poll();
      map.putIfAbsent(p.hd,new ArrayList<>());
      map.get(p.hd).add(p.node.val);

      if(p.node.left!=null)
        q.add(new Pair(p.node.left,p.hd-1));
      if(p.node.right!=null)
        q.add(new Pair(p.node.right,p.hd+1));
    }

    for(List<Integer> l:map.values()){
      for(int v:l) System.out.print(v+" ");
    }
  }
}`,

      python: `from collections import defaultdict,deque

def vertical(root):
    if not root:
        return

    mp=defaultdict(list)
    q=deque([(root,0)])

    while q:
        node,hd=q.popleft()
        mp[hd].append(node.val)

        if node.left:
            q.append((node.left,hd-1))
        if node.right:
            q.append((node.right,hd+1))

    for k in sorted(mp):
        print(*mp[k],end=" ")`,

      c: `// use map + queue`,
      cpp: `void vertical(Node* root){
    if(!root) return;

    map<int,vector<int>> mp;
    queue<pair<Node*,int>> q;
    q.push({root,0});

    while(!q.empty()){
        auto [node,hd]=q.front(); q.pop();
        mp[hd].push_back(node->val);

        if(node->left) q.push({node->left,hd-1});
        if(node->right) q.push({node->right,hd+1});
    }

    for(auto &p:mp){
        for(int v:p.second) cout<<v<<" ";
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Boundary Traversal',
    difficulty: 'Medium',
    description: `Print boundary nodes.`,
    inputExample: 'root',
    outputExample: 'boundary',
    explanation: `Left boundary + leaves + right boundary.`,
    code: {
      java: `class Main{
  static void left(Node root){
    while(root!=null){
      if(!(root.left==null && root.right==null))
        System.out.print(root.val+" ");
      root=(root.left!=null)?root.left:root.right;
    }
  }

  static void leaves(Node root){
    if(root==null) return;

    leaves(root.left);
    if(root.left==null && root.right==null)
      System.out.print(root.val+" ");
    leaves(root.right);
  }

  static void right(Node root,Stack<Integer> st){
    while(root!=null){
      if(!(root.left==null && root.right==null))
        st.push(root.val);
      root=(root.right!=null)?root.right:root.left;
    }
  }

  static void boundary(Node root){
    if(root==null) return;

    System.out.print(root.val+" ");

    left(root.left);
    leaves(root.left);
    leaves(root.right);

    Stack<Integer> st=new Stack<>();
    right(root.right,st);

    while(!st.isEmpty())
      System.out.print(st.pop()+" ");
  }
}`,

      python: `def boundary(root):
    if not root:
        return

    print(root.val,end=" ")

    def left(node):
        while node:
            if node.left or node.right:
                print(node.val,end=" ")
            node=node.left if node.left else node.right

    def leaves(node):
        if not node:
            return
        leaves(node.left)
        if not node.left and not node.right:
            print(node.val,end=" ")
        leaves(node.right)

    def right(node):
        st=[]
        while node:
            if node.left or node.right:
                st.append(node.val)
            node=node.right if node.right else node.left
        while st:
            print(st.pop(),end=" ")

    left(root.left)
    leaves(root.left)
    leaves(root.right)
    right(root.right)`,

      c: `// boundary`,
      cpp: `void left(Node* root){
    while(root){
        if(root->left || root->right)
            cout<<root->val<<" ";
        root=root->left?root->left:root->right;
    }
}

void leaves(Node* root){
    if(!root) return;
    leaves(root->left);
    if(!root->left && !root->right)
        cout<<root->val<<" ";
    leaves(root->right);
}

void right(Node* root,stack<int>& st){
    while(root){
        if(root->left || root->right)
            st.push(root->val);
        root=root->right?root->right:root->left;
    }
}

void boundary(Node* root){
    if(!root) return;

    cout<<root->val<<" ";

    left(root->left);
    leaves(root->left);
    leaves(root->right);

    stack<int> st;
    right(root->right,st);

    while(!st.empty()){
        cout<<st.top()<<" ";
        st.pop();
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Left View of Binary Tree',
    difficulty: 'Easy',
    description: `First node of each level.`,
    inputExample: 'root',
    outputExample: 'left view',
    explanation: `BFS or DFS.`,
    code: {
      java: `class Main{
  static void leftView(Node root){
    if(root==null) return;

    Queue<Node> q=new LinkedList<>();
    q.add(root);

    while(!q.isEmpty()){
      int size=q.size();

      for(int i=0;i<size;i++){
        Node node=q.poll();
        if(i==0) System.out.print(node.val+" ");

        if(node.left!=null) q.add(node.left);
        if(node.right!=null) q.add(node.right);
      }
    }
  }
}`,

      python: `from collections import deque

def leftView(root):
    if not root:
        return

    q=deque([root])

    while q:
        for i in range(len(q)):
            node=q.popleft()
            if i==0:
                print(node.val,end=" ")

            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)`,

      c: `// first of level`,
      cpp: `void leftView(Node* root){
    if(!root) return;

    queue<Node*> q;
    q.push(root);

    while(!q.empty()){
        int size=q.size();

        for(int i=0;i<size;i++){
            Node* node=q.front(); q.pop();
            if(i==0) cout<<node->val<<" ";

            if(node->left) q.push(node->left);
            if(node->right) q.push(node->right);
        }
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Right View of Binary Tree',
    difficulty: 'Easy',
    description: `Last node of each level.`,
    inputExample: 'root',
    outputExample: 'right view',
    explanation: `BFS or DFS.`,
    code: {
      java: `class Main{
  static void rightView(Node root){
    if(root==null) return;

    Queue<Node> q=new LinkedList<>();
    q.add(root);

    while(!q.isEmpty()){
      int size=q.size();

      for(int i=0;i<size;i++){
        Node node=q.poll();
        if(i==size-1) System.out.print(node.val+" ");

        if(node.left!=null) q.add(node.left);
        if(node.right!=null) q.add(node.right);
      }
    }
  }
}`,

      python: `from collections import deque

def rightView(root):
    if not root:
        return

    q=deque([root])

    while q:
        for i in range(len(q)):
            node=q.popleft()
            if i==len(q):
                print(node.val,end=" ")

            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)`,

      c: `// last of level`,
      cpp: `void rightView(Node* root){
    if(!root) return;

    queue<Node*> q;
    q.push(root);

    while(!q.empty()){
        int size=q.size();

        for(int i=0;i<size;i++){
            Node* node=q.front(); q.pop();
            if(i==size-1) cout<<node->val<<" ";

            if(node->left) q.push(node->left);
            if(node->right) q.push(node->right);
        }
    }
}`
    }
  },
   {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Top View of Binary Tree',
    difficulty: 'Medium',
    description: `Nodes visible from top.`,
    inputExample: 'root',
    outputExample: 'top view',
    explanation: `First node at each horizontal distance.`,
    code: {
      java: `class Pair{
  Node node; int hd;
  Pair(Node n,int h){node=n;hd=h;}
}

class Main{
  static void topView(Node root){
    if(root==null) return;

    Map<Integer,Integer> map=new TreeMap<>();
    Queue<Pair> q=new LinkedList<>();
    q.add(new Pair(root,0));

    while(!q.isEmpty()){
      Pair p=q.poll();

      if(!map.containsKey(p.hd))
        map.put(p.hd,p.node.val);

      if(p.node.left!=null)
        q.add(new Pair(p.node.left,p.hd-1));
      if(p.node.right!=null)
        q.add(new Pair(p.node.right,p.hd+1));
    }

    for(int v:map.values())
      System.out.print(v+" ");
  }
}`,

      python: `from collections import deque

def topView(root):
    if not root:
        return

    mp={}
    q=deque([(root,0)])

    while q:
        node,hd=q.popleft()

        if hd not in mp:
            mp[hd]=node.val

        if node.left:
            q.append((node.left,hd-1))
        if node.right:
            q.append((node.right,hd+1))

    for k in sorted(mp):
        print(mp[k],end=" ")`,

      c: `// map + bfs`,
      cpp: `void topView(Node* root){
    if(!root) return;

    map<int,int> mp;
    queue<pair<Node*,int>> q;
    q.push({root,0});

    while(!q.empty()){
        auto [node,hd]=q.front(); q.pop();

        if(!mp.count(hd))
            mp[hd]=node->val;

        if(node->left) q.push({node->left,hd-1});
        if(node->right) q.push({node->right,hd+1});
    }

    for(auto &p:mp)
        cout<<p.second<<" ";
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Bottom View of Binary Tree',
    difficulty: 'Medium',
    description: `Nodes visible from bottom.`,
    inputExample: 'root',
    outputExample: 'bottom view',
    explanation: `Last node at each horizontal distance.`,
    code: {
      java: `class Main{
  static void bottomView(Node root){
    if(root==null) return;

    Map<Integer,Integer> map=new TreeMap<>();
    Queue<Pair> q=new LinkedList<>();
    q.add(new Pair(root,0));

    while(!q.isEmpty()){
      Pair p=q.poll();
      map.put(p.hd,p.node.val);

      if(p.node.left!=null)
        q.add(new Pair(p.node.left,p.hd-1));
      if(p.node.right!=null)
        q.add(new Pair(p.node.right,p.hd+1));
    }

    for(int v:map.values())
      System.out.print(v+" ");
  }
}`,

      python: `def bottomView(root):
    if not root:
        return

    from collections import deque
    mp={}
    q=deque([(root,0)])

    while q:
        node,hd=q.popleft()
        mp[hd]=node.val

        if node.left:
            q.append((node.left,hd-1))
        if node.right:
            q.append((node.right,hd+1))

    for k in sorted(mp):
        print(mp[k],end=" ")`,

      c: `// overwrite map`,
      cpp: `void bottomView(Node* root){
    if(!root) return;

    map<int,int> mp;
    queue<pair<Node*,int>> q;
    q.push({root,0});

    while(!q.empty()){
        auto [node,hd]=q.front(); q.pop();
        mp[hd]=node->val;

        if(node->left) q.push({node->left,hd-1});
        if(node->right) q.push({node->right,hd+1});
    }

    for(auto &p:mp)
        cout<<p.second<<" ";
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Height of Binary Tree',
    difficulty: 'Easy',
    description: `Find max depth.`,
    inputExample: 'root',
    outputExample: 'height',
    explanation: `Max of left and right +1.`,
    code: {
      java: `class Main{
  static int height(Node root){
    if(root==null) return 0;

    return 1 + Math.max(height(root.left),height(root.right));
  }
}`,

      python: `def height(root):
    if not root:
        return 0
    return 1 + max(height(root.left),height(root.right))`,

      c: `int height(struct Node* root){
  if(!root) return 0;

  int l=height(root->left);
  int r=height(root->right);

  return 1 + (l>r?l:r);
}`,

      cpp: `int height(Node* root){
    if(!root) return 0;

    return 1 + max(height(root->left),height(root->right));
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Balanced Binary Tree Check',
    difficulty: 'Medium',
    description: `Check height-balanced tree.`,
    inputExample: 'root',
    outputExample: 'true/false',
    explanation: `Height difference ≤1.`,
    code: {
      java: `class Main{
  static int check(Node root){
    if(root==null) return 0;

    int l=check(root.left);
    if(l==-1) return -1;

    int r=check(root.right);
    if(r==-1) return -1;

    if(Math.abs(l-r)>1) return -1;

    return 1 + Math.max(l,r);
  }

  static boolean isBalanced(Node root){
    return check(root)!=-1;
  }
}`,

      python: `def isBalanced(root):
    def check(node):
        if not node:
            return 0

        l=check(node.left)
        if l==-1: return -1

        r=check(node.right)
        if r==-1: return -1

        if abs(l-r)>1:
            return -1

        return 1+max(l,r)

    return check(root)!=-1`,

      c: `// height check`,
      cpp: `int check(Node* root){
    if(!root) return 0;

    int l=check(root->left);
    if(l==-1) return -1;

    int r=check(root->right);
    if(r==-1) return -1;

    if(abs(l-r)>1) return -1;

    return 1 + max(l,r);
}

bool isBalanced(Node* root){
    return check(root)!=-1;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Diameter of Binary Tree',
    difficulty: 'Medium',
    description: `Longest path between any two nodes.`,
    inputExample: 'root',
    outputExample: 'diameter',
    explanation: `Track max (left height + right height).`,
    code: {
      java: `class Main{
  static int ans=0;

  static int dfs(Node root){
    if(root==null) return 0;

    int l=dfs(root.left);
    int r=dfs(root.right);

    ans=Math.max(ans,l+r);

    return 1 + Math.max(l,r);
  }
}`,

      python: `def diameter(root):
    ans=0

    def dfs(node):
        nonlocal ans
        if not node:
            return 0

        l=dfs(node.left)
        r=dfs(node.right)

        ans=max(ans,l+r)

        return 1+max(l,r)

    dfs(root)
    return ans`,

      c: `// track max`,
      cpp: `int ans=0;

int dfs(Node* root){
    if(!root) return 0;

    int l=dfs(root->left);
    int r=dfs(root->right);

    ans=max(ans,l+r);

    return 1 + max(l,r);
}`
    }
  },
   {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Maximum Width of Binary Tree',
    difficulty: 'Medium',
    description: `Find maximum width using index-based BFS.`,
    inputExample: 'root',
    outputExample: 'width',
    explanation: `Use level order with indices.`,
    code: {
      java: `class Pair{
  Node node; long idx;
  Pair(Node n,long i){node=n;idx=i;}
}

class Main{
  static int width(Node root){
    if(root==null) return 0;

    Queue<Pair> q=new LinkedList<>();
    q.add(new Pair(root,0));
    int ans=0;

    while(!q.isEmpty()){
      int size=q.size();
      long min=q.peek().idx;
      long first=0,last=0;

      for(int i=0;i<size;i++){
        Pair p=q.poll();
        long cur=p.idx-min;

        if(i==0) first=cur;
        if(i==size-1) last=cur;

        if(p.node.left!=null)
          q.add(new Pair(p.node.left,2*cur+1));
        if(p.node.right!=null)
          q.add(new Pair(p.node.right,2*cur+2));
      }

      ans=Math.max(ans,(int)(last-first+1));
    }
    return ans;
  }
}`,

      python: `from collections import deque

def width(root):
    if not root:
        return 0

    q=deque([(root,0)])
    ans=0

    while q:
        size=len(q)
        _,min_idx=q[0]
        first=last=0

        for i in range(size):
            node,idx=q.popleft()
            cur=idx-min_idx

            if i==0: first=cur
            if i==size-1: last=cur

            if node.left:
                q.append((node.left,2*cur+1))
            if node.right:
                q.append((node.right,2*cur+2))

        ans=max(ans,last-first+1)

    return ans`,

      c: `// bfs with index`,
      cpp: `int width(Node* root){
    if(!root) return 0;

    queue<pair<Node*,long long>> q;
    q.push({root,0});
    int ans=0;

    while(!q.empty()){
        int size=q.size();
        long long min=q.front().second;
        long long first=0,last=0;

        for(int i=0;i<size;i++){
            auto [node,idx]=q.front(); q.pop();
            long long cur=idx-min;

            if(i==0) first=cur;
            if(i==size-1) last=cur;

            if(node->left)
                q.push({node->left,2*cur+1});
            if(node->right)
                q.push({node->right,2*cur+2});
        }

        ans=max(ans,(int)(last-first+1));
    }
    return ans;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Maximum Path Sum',
    difficulty: 'Hard',
    description: `Find max sum path in tree.`,
    inputExample: 'root',
    outputExample: 'max sum',
    explanation: `Ignore negative paths.`,
    code: {
      java: `class Main{
  static int ans=Integer.MIN_VALUE;

  static int dfs(Node root){
    if(root==null) return 0;

    int l=Math.max(0,dfs(root.left));
    int r=Math.max(0,dfs(root.right));

    ans=Math.max(ans,l+r+root.val);

    return root.val + Math.max(l,r);
  }
}`,

      python: `def maxPath(root):
    ans=float('-inf')

    def dfs(node):
        nonlocal ans
        if not node:
            return 0

        l=max(0,dfs(node.left))
        r=max(0,dfs(node.right))

        ans=max(ans,l+r+node.val)

        return node.val + max(l,r)

    dfs(root)
    return ans`,

      c: `// ignore negative`,
      cpp: `int ans=INT_MIN;

int dfs(Node* root){
    if(!root) return 0;

    int l=max(0,dfs(root->left));
    int r=max(0,dfs(root->right));

    ans=max(ans,l+r+root->val);

    return root->val + max(l,r);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Check if Two Trees are Identical',
    difficulty: 'Easy',
    description: `Check if trees are same.`,
    inputExample: 'root1, root2',
    outputExample: 'true/false',
    explanation: `Compare structure + values.`,
    code: {
      java: `class Main{
  static boolean isSame(Node a,Node b){
    if(a==null && b==null) return true;
    if(a==null || b==null) return false;

    return a.val==b.val &&
           isSame(a.left,b.left) &&
           isSame(a.right,b.right);
  }
}`,

      python: `def isSame(a,b):
    if not a and not b:
        return True
    if not a or not b:
        return False

    return (a.val==b.val and
            isSame(a.left,b.left) and
            isSame(a.right,b.right))`,

      c: `// compare both`,
      cpp: `bool isSame(Node* a,Node* b){
    if(!a && !b) return true;
    if(!a || !b) return false;

    return a->val==b->val &&
           isSame(a->left,b->left) &&
           isSame(a->right,b->right);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Symmetric Binary Tree',
    difficulty: 'Easy',
    description: `Check mirror symmetry.`,
    inputExample: 'root',
    outputExample: 'true/false',
    explanation: `Mirror left & right.`,
    code: {
      java: `class Main{
  static boolean check(Node l,Node r){
    if(l==null && r==null) return true;
    if(l==null || r==null) return false;

    return l.val==r.val &&
           check(l.left,r.right) &&
           check(l.right,r.left);
  }

  static boolean isSymmetric(Node root){
    return check(root.left,root.right);
  }
}`,

      python: `def isSymmetric(root):
    def check(l,r):
        if not l and not r:
            return True
        if not l or not r:
            return False

        return (l.val==r.val and
                check(l.left,r.right) and
                check(l.right,r.left))

    return check(root.left,root.right)`,

      c: `// mirror check`,
      cpp: `bool check(Node* l,Node* r){
    if(!l && !r) return true;
    if(!l || !r) return false;

    return l->val==r->val &&
           check(l->left,r->right) &&
           check(l->right,r->left);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Isomorphic Trees',
    difficulty: 'Medium',
    description: `Check if trees can be made same by swapping.`,
    inputExample: 'root1, root2',
    outputExample: 'true/false',
    explanation: `Allow left-right swaps.`,
    code: {
      java: `class Main{
  static boolean iso(Node a,Node b){
    if(a==null && b==null) return true;
    if(a==null || b==null) return false;

    return a.val==b.val &&
      ((iso(a.left,b.left) && iso(a.right,b.right)) ||
       (iso(a.left,b.right) && iso(a.right,b.left)));
  }
}`,

      python: `def iso(a,b):
    if not a and not b:
        return True
    if not a or not b:
        return False

    return (a.val==b.val and
           ((iso(a.left,b.left) and iso(a.right,b.right)) or
            (iso(a.left,b.right) and iso(a.right,b.left))))`,

      c: `// swap allowed`,
      cpp: `bool iso(Node* a,Node* b){
    if(!a && !b) return true;
    if(!a || !b) return false;

    return a->val==b->val &&
      ((iso(a->left,b->left) && iso(a->right,b->right)) ||
       (iso(a->left,b->right) && iso(a->right,b->left)));
}`
    }
  },
   {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Children Sum Property',
    difficulty: 'Medium',
    description: `Modify tree so each node = sum of children.`,
    inputExample: 'root',
    outputExample: 'modified tree',
    explanation: `Push values down, then fix while backtracking.`,
    code: {
      java: `class Main{
  static void convert(Node root){
    if(root==null) return;

    int child=0;
    if(root.left!=null) child+=root.left.val;
    if(root.right!=null) child+=root.right.val;

    if(child >= root.val)
      root.val=child;
    else{
      if(root.left!=null) root.left.val=root.val;
      if(root.right!=null) root.right.val=root.val;
    }

    convert(root.left);
    convert(root.right);

    int total=0;
    if(root.left!=null) total+=root.left.val;
    if(root.right!=null) total+=root.right.val;

    if(root.left!=null || root.right!=null)
      root.val=total;
  }
}`,

      python: `def convert(root):
    if not root:
        return

    child=0
    if root.left: child+=root.left.val
    if root.right: child+=root.right.val

    if child >= root.val:
        root.val=child
    else:
        if root.left: root.left.val=root.val
        if root.right: root.right.val=root.val

    convert(root.left)
    convert(root.right)

    total=0
    if root.left: total+=root.left.val
    if root.right: total+=root.right.val

    if root.left or root.right:
        root.val=total`,

      c: `// modify tree`,
      cpp: `void convert(Node* root){
    if(!root) return;

    int child=0;
    if(root->left) child+=root->left->val;
    if(root->right) child+=root->right->val;

    if(child >= root->val)
        root->val=child;
    else{
        if(root->left) root->left->val=root->val;
        if(root->right) root->right->val=root->val;
    }

    convert(root->left);
    convert(root->right);

    int total=0;
    if(root->left) total+=root->left->val;
    if(root->right) total+=root->right->val;

    if(root->left || root->right)
        root->val=total;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Sum Tree',
    difficulty: 'Medium',
    description: `Check if tree is Sum Tree.`,
    inputExample: 'root',
    outputExample: 'true/false',
    explanation: `Node = sum of left + right subtree.`,
    code: {
      java: `class Main{
  static int check(Node root){
    if(root==null) return 0;
    if(root.left==null && root.right==null)
      return root.val;

    int l=check(root.left);
    int r=check(root.right);

    if(l==-1 || r==-1 || root.val!=l+r)
      return -1;

    return root.val + l + r;
  }

  static boolean isSumTree(Node root){
    return check(root)!=-1;
  }
}`,

      python: `def isSumTree(root):
    def check(node):
        if not node:
            return 0
        if not node.left and not node.right:
            return node.val

        l=check(node.left)
        r=check(node.right)

        if l==-1 or r==-1 or node.val!=l+r:
            return -1

        return node.val+l+r

    return check(root)!=-1`,

      c: `// sum check`,
      cpp: `int check(Node* root){
    if(!root) return 0;
    if(!root->left && !root->right)
        return root->val;

    int l=check(root->left);
    int r=check(root->right);

    if(l==-1 || r==-1 || root->val!=l+r)
        return -1;

    return root->val + l + r;
}

bool isSumTree(Node* root){
    return check(root)!=-1;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Leaves at Same Level',
    difficulty: 'Easy',
    description: `Check if all leaves are at same depth.`,
    inputExample: 'root',
    outputExample: 'true/false',
    explanation: `Track first leaf level.`,
    code: {
      java: `class Main{
  static int level=-1;

  static boolean check(Node root,int l){
    if(root==null) return true;

    if(root.left==null && root.right==null){
      if(level==-1) level=l;
      return level==l;
    }

    return check(root.left,l+1) &&
           check(root.right,l+1);
  }
}`,

      python: `def sameLevel(root):
    level=[-1]

    def dfs(node,l):
        if not node:
            return True

        if not node.left and not node.right:
            if level[0]==-1:
                level[0]=l
            return level[0]==l

        return dfs(node.left,l+1) and dfs(node.right,l+1)

    return dfs(root,0)`,

      c: `// track level`,
      cpp: `int level=-1;

bool check(Node* root,int l){
    if(!root) return true;

    if(!root->left && !root->right){
        if(level==-1) level=l;
        return level==l;
    }

    return check(root->left,l+1) &&
           check(root->right,l+1);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Mirror Binary Tree',
    difficulty: 'Easy',
    description: `Convert tree to its mirror.`,
    inputExample: 'root',
    outputExample: 'mirrored tree',
    explanation: `Swap left and right.`,
    code: {
      java: `class Main{
  static void mirror(Node root){
    if(root==null) return;

    Node temp=root.left;
    root.left=root.right;
    root.right=temp;

    mirror(root.left);
    mirror(root.right);
  }
}`,

      python: `def mirror(root):
    if not root:
        return

    root.left,root.right=root.right,root.left
    mirror(root.left)
    mirror(root.right)`,

      c: `// swap`,
      cpp: `void mirror(Node* root){
    if(!root) return;

    swap(root->left,root->right);

    mirror(root->left);
    mirror(root->right);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Construct Tree from Inorder & Preorder',
    difficulty: 'Medium',
    description: `Build tree from inorder and preorder.`,
    inputExample: 'in[], pre[]',
    outputExample: 'root',
    explanation: `Preorder gives root, inorder splits tree.`,
    code: {
      java: `class Main{
  static int i=0;

  static Node build(int[] in,int[] pre,int l,int r,Map<Integer,Integer> map){
    if(l>r) return null;

    Node root=new Node(pre[i++]);
    int idx=map.get(root.val);

    root.left=build(in,pre,l,idx-1,map);
    root.right=build(in,pre,idx+1,r,map);

    return root;
  }
}`,

      python: `def build(inorder,preorder):
    mp={v:i for i,v in enumerate(inorder)}
    i=0

    def helper(l,r):
        nonlocal i
        if l>r:
            return None

        root=Node(preorder[i])
        i+=1
        idx=mp[root.val]

        root.left=helper(l,idx-1)
        root.right=helper(idx+1,r)

        return root

    return helper(0,len(inorder)-1)`,

      c: `// use map`,
      cpp: `Node* build(vector<int>& in,vector<int>& pre,int& i,int l,int r,unordered_map<int,int>& mp){
    if(l>r) return NULL;

    Node* root=new Node(pre[i++]);
    int idx=mp[root->val];

    root->left=build(in,pre,i,l,idx-1,mp);
    root->right=build(in,pre,i,idx+1,r,mp);

    return root;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Construct Tree from Postorder & Inorder',
    difficulty: 'Medium',
    description: `Build tree using postorder.`,
    inputExample: 'in[], post[]',
    outputExample: 'root',
    explanation: `Postorder gives root at end.`,
    code: {
      java: `class Main{
  static int i;

  static Node build(int[] in,int[] post,int l,int r,Map<Integer,Integer> map){
    if(l>r) return null;

    Node root=new Node(post[i--]);
    int idx=map.get(root.val);

    root.right=build(in,post,idx+1,r,map);
    root.left=build(in,post,l,idx-1,map);

    return root;
  }
}`,

      python: `def build(inorder,postorder):
    mp={v:i for i,v in enumerate(inorder)}
    i=len(postorder)-1

    def helper(l,r):
        nonlocal i
        if l>r:
            return None

        root=Node(postorder[i])
        i-=1
        idx=mp[root.val]

        root.right=helper(idx+1,r)
        root.left=helper(l,idx-1)

        return root

    return helper(0,len(inorder)-1)`,

      c: `// reverse build`,
      cpp: `Node* build(vector<int>& in,vector<int>& post,int& i,int l,int r,unordered_map<int,int>& mp){
    if(l>r) return NULL;

    Node* root=new Node(post[i--]);
    int idx=mp[root->val];

    root->right=build(in,post,i,idx+1,r,mp);
    root->left=build(in,post,i,l,idx-1,mp);

    return root;
}`
    }
  },
   {
    subject: 'Concept',
    category: 'Binary Trees',
    title: 'Requirements for Unique Binary Tree Construction',
    difficulty: 'Easy',
    description: `When can a binary tree be uniquely constructed?`,
    inputExample: 'Traversal arrays',
    outputExample: 'Yes/No',
    explanation: `
Unique tree is possible when:
1. Inorder + Preorder → YES
2. Inorder + Postorder → YES
3. Preorder + Postorder → NO (unless full binary tree)
4. Only one traversal → NO
`
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Construct Tree from String Bracket Representation',
    difficulty: 'Medium',
    description: `Build tree from string like "4(2(3)(1))(6(5))"`,
    inputExample: '"4(2(3)(1))(6(5))"',
    outputExample: 'root',
    explanation: `Use recursion + index tracking.`,
    code: {
      java: `class Main{
  static int i=0;

  static Node build(String s){
    if(i>=s.length()) return null;

    int num=0;
    while(i<s.length() && Character.isDigit(s.charAt(i))){
      num=num*10+(s.charAt(i++)-'0');
    }

    Node root=new Node(num);

    if(i<s.length() && s.charAt(i)=='('){
      i++;
      root.left=build(s);
      i++;
    }

    if(i<s.length() && s.charAt(i)=='('){
      i++;
      root.right=build(s);
      i++;
    }

    return root;
  }
}`,

      python: `def build(s):
    i=[0]

    def helper():
        if i[0]>=len(s):
            return None

        num=0
        while i[0]<len(s) and s[i[0]].isdigit():
            num=num*10+int(s[i[0]])
            i[0]+=1

        root=Node(num)

        if i[0]<len(s) and s[i[0]]=='(':
            i[0]+=1
            root.left=helper()
            i[0]+=1

        if i[0]<len(s) and s[i[0]]=='(':
            i[0]+=1
            root.right=helper()
            i[0]+=1

        return root

    return helper()`,

      c: `// recursion + index`,
      cpp: `Node* build(string &s,int &i){
    if(i>=s.size()) return NULL;

    int num=0;
    while(i<s.size() && isdigit(s[i])){
        num=num*10+(s[i++]-'0');
    }

    Node* root=new Node(num);

    if(i<s.size() && s[i]=='('){
        i++;
        root->left=build(s,i);
        i++;
    }

    if(i<s.size() && s[i]=='('){
        i++;
        root->right=build(s,i);
        i++;
    }

    return root;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Binary Tree to DLL',
    difficulty: 'Medium',
    description: `Convert tree to doubly linked list (inorder).`,
    inputExample: 'root',
    outputExample: 'DLL head',
    explanation: `Inorder traversal + pointer linking.`,
    code: {
      java: `class Main{
  static Node prev=null,head=null;

  static void convert(Node root){
    if(root==null) return;

    convert(root.left);

    if(prev==null) head=root;
    else{
      root.left=prev;
      prev.right=root;
    }
    prev=root;

    convert(root.right);
  }
}`,

      python: `def convert(root):
    prev=[None]
    head=[None]

    def dfs(node):
        if not node:
            return

        dfs(node.left)

        if not prev[0]:
            head[0]=node
        else:
            node.left=prev[0]
            prev[0].right=node

        prev[0]=node
        dfs(node.right)

    dfs(root)
    return head[0]`,

      c: `// inorder linking`,
      cpp: `Node* prev=NULL;
Node* head=NULL;

void convert(Node* root){
    if(!root) return;

    convert(root->left);

    if(!prev) head=root;
    else{
        root->left=prev;
        prev->right=root;
    }
    prev=root;

    convert(root->right);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Transform to Sum Tree',
    difficulty: 'Medium',
    description: `Replace node with sum of subtree.`,
    inputExample: 'root',
    outputExample: 'sum tree',
    explanation: `Postorder traversal.`,
    code: {
      java: `class Main{
  static int toSumTree(Node root){
    if(root==null) return 0;

    int old=root.val;

    root.val=toSumTree(root.left)+toSumTree(root.right);

    return root.val + old;
  }
}`,

      python: `def toSumTree(root):
    if not root:
        return 0

    old=root.val
    root.val=toSumTree(root.left)+toSumTree(root.right)

    return root.val + old`,

      c: `// postorder`,
      cpp: `int toSumTree(Node* root){
    if(!root) return 0;

    int old=root->val;

    root->val=toSumTree(root->left)+toSumTree(root->right);

    return root->val + old;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Lowest Common Ancestor (LCA)',
    difficulty: 'Medium',
    description: `Find lowest common ancestor of two nodes.`,
    inputExample: 'root, p, q',
    outputExample: 'LCA node',
    explanation: `If both sides return non-null → root is LCA.`,
    code: {
      java: `class Main{
  static Node lca(Node root,Node p,Node q){
    if(root==null || root==p || root==q)
      return root;

    Node left=lca(root.left,p,q);
    Node right=lca(root.right,p,q);

    if(left!=null && right!=null)
      return root;

    return (left!=null)?left:right;
  }
}`,

      python: `def lca(root,p,q):
    if not root or root==p or root==q:
        return root

    left=lca(root.left,p,q)
    right=lca(root.right,p,q)

    if left and right:
        return root

    return left if left else right`,

      c: `// recursion`,
      cpp: `Node* lca(Node* root,Node* p,Node* q){
    if(!root || root==p || root==q)
        return root;

    Node* left=lca(root->left,p,q);
    Node* right=lca(root->right,p,q);

    if(left && right)
        return root;

    return left?left:right;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Minimum Distance Between Two Nodes',
    difficulty: 'Medium',
    description: `Distance = edges between two nodes.`,
    inputExample: 'root, a, b',
    outputExample: 'distance',
    explanation: `distance(a,b) = dist(root,a) + dist(root,b) - 2*dist(root,lca)`,
    code: {
      java: `class Main{
  static int dist(Node root,int x){
    if(root==null) return -1;
    if(root.val==x) return 0;

    int l=dist(root.left,x);
    int r=dist(root.right,x);

    if(l==-1 && r==-1) return -1;
    return (l!=-1?l:r)+1;
  }

  static int solve(Node root,int a,int b){
    Node lca=lca(root,new Node(a),new Node(b));
    return dist(lca,a)+dist(lca,b);
  }
}`,

      python: `def distance(root,a,b):
    def lca(root,p,q):
        if not root or root.val==p or root.val==q:
            return root
        l=lca(root.left,p,q)
        r=lca(root.right,p,q)
        if l and r: return root
        return l if l else r

    def dist(node,x):
        if not node: return -1
        if node.val==x: return 0
        l=dist(node.left,x)
        r=dist(node.right,x)
        if l==-1 and r==-1: return -1
        return (l if l!=-1 else r)+1

    node=lca(root,a,b)
    return dist(node,a)+dist(node,b)`,

      c: `// use lca`,
      cpp: `int dist(Node* root,int x){
    if(!root) return -1;
    if(root->val==x) return 0;

    int l=dist(root->left,x);
    int r=dist(root->right,x);

    if(l==-1 && r==-1) return -1;
    return (l!=-1?l:r)+1;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Kth Ancestor of Node',
    difficulty: 'Medium',
    description: `Find k-th ancestor of a node.`,
    inputExample: 'root, target, k',
    outputExample: 'ancestor',
    explanation: `Backtrack and reduce k.`,
    code: {
      java: `class Main{
  static int k;

  static Node dfs(Node root,int target){
    if(root==null) return null;
    if(root.val==target) return root;

    Node left=dfs(root.left,target);
    Node right=dfs(root.right,target);

    if(left!=null || right!=null){
      if(k>0) k--;
      else if(k==0){
        k=-1;
        return root;
      }
      return (left!=null)?left:right;
    }
    return null;
  }
}`,

      python: `def kthAncestor(root,target,k):
    ans=[-1]

    def dfs(node):
        if not node:
            return None
        if node.val==target:
            return node

        l=dfs(node.left)
        r=dfs(node.right)

        if l or r:
            if k[0]>0:
                k[0]-=1
            elif k[0]==0:
                ans[0]=node.val
                k[0]=-1
            return node

        return None

    dfs(root)
    return ans[0]`,

      c: `// backtracking`,
      cpp: `int k;

Node* dfs(Node* root,int target){
    if(!root) return NULL;
    if(root->val==target) return root;

    Node* left=dfs(root->left,target);
    Node* right=dfs(root->right,target);

    if(left || right){
        if(k>0) k--;
        else if(k==0){
            k=-1;
            return root;
        }
        return left?left:right;
    }
    return NULL;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Nodes at Distance K',
    difficulty: 'Hard',
    description: `Find all nodes at distance K from target.`,
    inputExample: 'root, target, k',
    outputExample: 'list of nodes',
    explanation: `Convert to graph + BFS.`,
    code: {
      java: `class Main{
  static void markParent(Node root,Map<Node,Node> map){
    Queue<Node> q=new LinkedList<>();
    q.add(root);

    while(!q.isEmpty()){
      Node node=q.poll();

      if(node.left!=null){
        map.put(node.left,node);
        q.add(node.left);
      }
      if(node.right!=null){
        map.put(node.right,node);
        q.add(node.right);
      }
    }
  }

  static void nodesK(Node root,Node target,int k){
    Map<Node,Node> parent=new HashMap<>();
    markParent(root,parent);

    Set<Node> vis=new HashSet<>();
    Queue<Node> q=new LinkedList<>();

    q.add(target);
    vis.add(target);

    int dist=0;

    while(!q.isEmpty()){
      if(dist==k) break;
      int size=q.size();

      for(int i=0;i<size;i++){
        Node node=q.poll();

        if(node.left!=null && !vis.contains(node.left)){
          vis.add(node.left);
          q.add(node.left);
        }
        if(node.right!=null && !vis.contains(node.right)){
          vis.add(node.right);
          q.add(node.right);
        }
        if(parent.containsKey(node) && !vis.contains(parent.get(node))){
          vis.add(parent.get(node));
          q.add(parent.get(node));
        }
      }
      dist++;
    }

    while(!q.isEmpty())
      System.out.print(q.poll().val+" ");
  }
}`,

      python: `from collections import deque

def nodesK(root,target,k):
    parent={}

    def mark(node):
        q=deque([node])
        while q:
            cur=q.popleft()
            if cur.left:
                parent[cur.left]=cur
                q.append(cur.left)
            if cur.right:
                parent[cur.right]=cur
                q.append(cur.right)

    mark(root)

    q=deque([target])
    vis=set([target])
    dist=0

    while q:
        if dist==k:
            break
        for _ in range(len(q)):
            node=q.popleft()

            for nei in [node.left,node.right,parent.get(node)]:
                if nei and nei not in vis:
                    vis.add(nei)
                    q.append(nei)
        dist+=1

    return [n.val for n in q]`,

      c: `// graph + bfs`,
      cpp: `void markParent(Node* root,unordered_map<Node*,Node*>& parent){
    queue<Node*> q;
    q.push(root);

    while(!q.empty()){
        Node* node=q.front(); q.pop();

        if(node->left){
            parent[node->left]=node;
            q.push(node->left);
        }
        if(node->right){
            parent[node->right]=node;
            q.push(node->right);
        }
    }
}`
    }
  },
   {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Sum of Nodes on Longest Path',
    difficulty: 'Medium',
    description: `Find sum of nodes on the longest root-to-leaf path.`,
    inputExample: 'root',
    outputExample: 'max sum',
    explanation: `If same length → take max sum.`,
    code: {
      java: `class Main{
  static int maxLen=0, maxSum=0;

  static void dfs(Node root,int len,int sum){
    if(root==null){
      if(len>maxLen || (len==maxLen && sum>maxSum)){
        maxLen=len;
        maxSum=sum;
      }
      return;
    }

    dfs(root.left,len+1,sum+root.val);
    dfs(root.right,len+1,sum+root.val);
  }
}`,

      python: `def longestPath(root):
    maxLen=[0]
    maxSum=[0]

    def dfs(node,len_,sum_):
        if not node:
            if len_>maxLen[0] or (len_==maxLen[0] and sum_>maxSum[0]):
                maxLen[0]=len_
                maxSum[0]=sum_
            return

        dfs(node.left,len_+1,sum_+node.val)
        dfs(node.right,len_+1,sum_+node.val)

    dfs(root,0,0)
    return maxSum[0]`,

      c: `// track len & sum`,
      cpp: `int maxLen=0,maxSum=0;

void dfs(Node* root,int len,int sum){
    if(!root){
        if(len>maxLen || (len==maxLen && sum>maxSum)){
            maxLen=len;
            maxSum=sum;
        }
        return;
    }

    dfs(root->left,len+1,sum+root->val);
    dfs(root->right,len+1,sum+root->val);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Print K Sum Paths',
    difficulty: 'Medium',
    description: `Print all paths with sum K.`,
    inputExample: 'root, K',
    outputExample: 'paths',
    explanation: `Use path array and check all suffix sums.`,
    code: {
      java: `class Main{
  static void solve(Node root,int k,List<Integer> path){
    if(root==null) return;

    path.add(root.val);

    int sum=0;
    for(int i=path.size()-1;i>=0;i--){
      sum+=path.get(i);
      if(sum==k){
        for(int j=i;j<path.size();j++)
          System.out.print(path.get(j)+" ");
        System.out.println();
      }
    }

    solve(root.left,k,path);
    solve(root.right,k,path);

    path.remove(path.size()-1);
  }
}`,

      python: `def kPaths(root,k):
    path=[]

    def dfs(node):
        if not node:
            return

        path.append(node.val)

        s=0
        for i in range(len(path)-1,-1,-1):
            s+=path[i]
            if s==k:
                print(path[i:])

        dfs(node.left)
        dfs(node.right)

        path.pop()

    dfs(root)`,

      c: `// path array`,
      cpp: `void solve(Node* root,int k,vector<int>& path){
    if(!root) return;

    path.push_back(root->val);

    int sum=0;
    for(int i=path.size()-1;i>=0;i--){
        sum+=path[i];
        if(sum==k){
            for(int j=i;j<path.size();j++)
                cout<<path[j]<<" ";
            cout<<endl;
        }
    }

    solve(root->left,k,path);
    solve(root->right,k,path);

    path.pop_back();
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Burn Binary Tree from a Node',
    difficulty: 'Hard',
    description: `Time to burn entire tree from target node.`,
    inputExample: 'root, target',
    outputExample: 'time',
    explanation: `Convert to graph + BFS level count.`,
    code: {
      java: `class Main{
  static int burn(Node root,Node target){
    Map<Node,Node> parent=new HashMap<>();

    Queue<Node> q=new LinkedList<>();
    q.add(root);

    while(!q.isEmpty()){
      Node node=q.poll();

      if(node.left!=null){
        parent.put(node.left,node);
        q.add(node.left);
      }
      if(node.right!=null){
        parent.put(node.right,node);
        q.add(node.right);
      }
    }

    Set<Node> vis=new HashSet<>();
    q.add(target);
    vis.add(target);

    int time=0;

    while(!q.isEmpty()){
      int size=q.size();
      boolean flag=false;

      for(int i=0;i<size;i++){
        Node node=q.poll();

        if(node.left!=null && !vis.contains(node.left)){
          vis.add(node.left);
          q.add(node.left);
          flag=true;
        }
        if(node.right!=null && !vis.contains(node.right)){
          vis.add(node.right);
          q.add(node.right);
          flag=true;
        }
        if(parent.containsKey(node) && !vis.contains(parent.get(node))){
          vis.add(parent.get(node));
          q.add(parent.get(node));
          flag=true;
        }
      }

      if(flag) time++;
    }
    return time;
  }
}`,

      python: `from collections import deque

def burn(root,target):
    parent={}

    def mark(node):
        q=deque([node])
        while q:
            cur=q.popleft()
            if cur.left:
                parent[cur.left]=cur
                q.append(cur.left)
            if cur.right:
                parent[cur.right]=cur
                q.append(cur.right)

    mark(root)

    q=deque([target])
    vis=set([target])
    time=0

    while q:
        flag=False
        for _ in range(len(q)):
            node=q.popleft()

            for nei in [node.left,node.right,parent.get(node)]:
                if nei and nei not in vis:
                    vis.add(nei)
                    q.append(nei)
                    flag=True
        if flag:
            time+=1

    return time`,

      c: `// bfs spread`,
      cpp: `int burn(Node* root,Node* target){
    unordered_map<Node*,Node*> parent;
    queue<Node*> q;
    q.push(root);

    while(!q.empty()){
        Node* node=q.front(); q.pop();

        if(node->left){
            parent[node->left]=node;
            q.push(node->left);
        }
        if(node->right){
            parent[node->right]=node;
            q.push(node->right);
        }
    }

    unordered_set<Node*> vis;
    q.push(target);
    vis.insert(target);

    int time=0;

    while(!q.empty()){
        int size=q.size();
        bool flag=false;

        for(int i=0;i<size;i++){
            Node* node=q.front(); q.pop();

            for(Node* nei : {node->left,node->right,parent[node]}){
                if(nei && !vis.count(nei)){
                    vis.insert(nei);
                    q.push(nei);
                    flag=true;
                }
            }
        }
        if(flag) time++;
    }
    return time;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Count Nodes in Complete Binary Tree',
    difficulty: 'Medium',
    description: `Count nodes faster than O(n).`,
    inputExample: 'root',
    outputExample: 'count',
    explanation: `Use height of left & right.`,
    code: {
      java: `class Main{
  static int leftH(Node root){
    int h=0;
    while(root!=null){
      h++;
      root=root.left;
    }
    return h;
  }

  static int rightH(Node root){
    int h=0;
    while(root!=null){
      h++;
      root=root.right;
    }
    return h;
  }

  static int count(Node root){
    if(root==null) return 0;

    int lh=leftH(root);
    int rh=rightH(root);

    if(lh==rh)
      return (1<<lh)-1;

    return 1 + count(root.left) + count(root.right);
  }
}`,

      python: `def count(root):
    def leftH(node):
        h=0
        while node:
            h+=1
            node=node.left
        return h

    def rightH(node):
        h=0
        while node:
            h+=1
            node=node.right
        return h

    if not root:
        return 0

    lh=leftH(root)
    rh=rightH(root)

    if lh==rh:
        return (1<<lh)-1

    return 1 + count(root.left) + count(root.right)`,

      c: `// optimized count`,
      cpp: `int leftH(Node* root){
    int h=0;
    while(root){
        h++;
        root=root->left;
    }
    return h;
}

int rightH(Node* root){
    int h=0;
    while(root){
        h++;
        root=root->right;
    }
    return h;
}

int count(Node* root){
    if(!root) return 0;

    int lh=leftH(root);
    int rh=rightH(root);

    if(lh==rh)
        return (1<<lh)-1;

    return 1 + count(root->left) + count(root->right);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Minimum Swaps to Convert Binary Tree to BST',
    difficulty: 'Medium',
    description: `Min swaps using inorder.`,
    inputExample: 'tree',
    outputExample: 'swaps',
    explanation: `Convert to array → min swaps to sort.`,
    code: {
      java: `class Main{
  static void inorder(Node root,List<Integer> arr){
    if(root==null) return;
    inorder(root.left,arr);
    arr.add(root.val);
    inorder(root.right,arr);
  }

  static int minSwaps(List<Integer> arr){
    int n=arr.size();
    List<Pair> list=new ArrayList<>();

    for(int i=0;i<n;i++)
      list.add(new Pair(arr.get(i),i));

    Collections.sort(list,(a,b)->a.val-b.val);

    boolean[] vis=new boolean[n];
    int swaps=0;

    for(int i=0;i<n;i++){
      if(vis[i] || list.get(i).idx==i) continue;

      int cycle=0,j=i;
      while(!vis[j]){
        vis[j]=true;
        j=list.get(j).idx;
        cycle++;
      }
      if(cycle>1) swaps+=cycle-1;
    }
    return swaps;
  }
}`,

      python: `def minSwaps(root):
    arr=[]

    def inorder(node):
        if not node: return
        inorder(node.left)
        arr.append(node.val)
        inorder(node.right)

    inorder(root)

    n=len(arr)
    temp=sorted([(v,i) for i,v in enumerate(arr)])
    vis=[False]*n
    swaps=0

    for i in range(n):
        if vis[i] or temp[i][1]==i:
            continue

        cycle=0
        j=i
        while not vis[j]:
            vis[j]=True
            j=temp[j][1]
            cycle+=1

        if cycle>1:
            swaps+=cycle-1

    return swaps`,

      c: `// array + cycle`,
      cpp: `int minSwaps(vector<int>& arr){
    int n=arr.size();
    vector<pair<int,int>> v;

    for(int i=0;i<n;i++)
        v.push_back({arr[i],i});

    sort(v.begin(),v.end());

    vector<bool> vis(n,false);
    int swaps=0;

    for(int i=0;i<n;i++){
        if(vis[i] || v[i].second==i) continue;

        int cycle=0,j=i;
        while(!vis[j]){
            vis[j]=true;
            j=v[j].second;
            cycle++;
        }

        if(cycle>1) swaps+=cycle-1;
    }
    return swaps;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Duplicate Subtree',
    difficulty: 'Medium',
    description: `Check if duplicate subtree exists.`,
    inputExample: 'root',
    outputExample: 'true/false',
    explanation: `Serialize subtree + hashmap.`,
    code: {
      java: `class Main{
  static Map<String,Integer> map=new HashMap<>();

  static String dfs(Node root){
    if(root==null) return "#";

    String s=root.val + "," + dfs(root.left) + "," + dfs(root.right);

    map.put(s,map.getOrDefault(s,0)+1);

    return s;
  }

  static boolean hasDup(Node root){
    dfs(root);
    for(int v:map.values())
      if(v>1) return true;
    return false;
  }
}`,

      python: `def hasDuplicate(root):
    mp={}

    def dfs(node):
        if not node:
            return "#"

        s=str(node.val)+","+dfs(node.left)+","+dfs(node.right)
        mp[s]=mp.get(s,0)+1
        return s

    dfs(root)
    return any(v>1 for v in mp.values())`,

      c: `// serialize`,
      cpp: `unordered_map<string,int> mp;

string dfs(Node* root){
    if(!root) return "#";

    string s=to_string(root->val)+","+dfs(root->left)+","+dfs(root->right);
    mp[s]++;
    return s;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Duplicate Subtrees',
    difficulty: 'Medium',
    description: `Return all duplicate subtrees.`,
    inputExample: 'root',
    outputExample: 'list of roots',
    explanation: `Store subtree strings with count.`,
    code: {
      java: `class Main{
  static Map<String,Integer> map=new HashMap<>();
  static List<Node> res=new ArrayList<>();

  static String dfs(Node root){
    if(root==null) return "#";

    String s=root.val+","+dfs(root.left)+","+dfs(root.right);

    map.put(s,map.getOrDefault(s,0)+1);

    if(map.get(s)==2)
      res.add(root);

    return s;
  }
}`,

      python: `def duplicateSubtrees(root):
    mp={}
    res=[]

    def dfs(node):
        if not node:
            return "#"

        s=str(node.val)+","+dfs(node.left)+","+dfs(node.right)
        mp[s]=mp.get(s,0)+1

        if mp[s]==2:
            res.append(node)

        return s

    dfs(root)
    return res`,

      c: `// collect nodes`,
      cpp: `unordered_map<string,int> mp;
vector<Node*> res;

string dfs(Node* root){
    if(!root) return "#";

    string s=to_string(root->val)+","+dfs(root->left)+","+dfs(root->right);
    mp[s]++;

    if(mp[s]==2)
        res.push_back(root);

    return s;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Largest Subtree Sum',
    difficulty: 'Medium',
    description: `Find subtree with maximum sum.`,
    inputExample: 'root',
    outputExample: 'max sum',
    explanation: `Postorder + track max.`,
    code: {
      java: `class Main{
  static int maxSum=Integer.MIN_VALUE;

  static int dfs(Node root){
    if(root==null) return 0;

    int sum=root.val + dfs(root.left) + dfs(root.right);
    maxSum=Math.max(maxSum,sum);

    return sum;
  }
}`,

      python: `def largestSum(root):
    maxSum=[float('-inf')]

    def dfs(node):
        if not node:
            return 0

        s=node.val + dfs(node.left) + dfs(node.right)
        maxSum[0]=max(maxSum[0],s)

        return s

    dfs(root)
    return maxSum[0]`,

      c: `// postorder sum`,
      cpp: `int maxSum=INT_MIN;

int dfs(Node* root){
    if(!root) return 0;

    int sum=root->val + dfs(root->left) + dfs(root->right);
    maxSum=max(maxSum,sum);

    return sum;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Maximum Sum of Non-Adjacent Nodes',
    difficulty: 'Medium',
    description: `Pick nodes such that no two adjacent are selected.`,
    inputExample: 'root',
    outputExample: 'max sum',
    explanation: `Include vs Exclude DP.`,
    code: {
      java: `class Pair{
  int inc,exc;
  Pair(int i,int e){inc=i;exc=e;}
}

class Main{
  static Pair dfs(Node root){
    if(root==null) return new Pair(0,0);

    Pair l=dfs(root.left);
    Pair r=dfs(root.right);

    int inc=root.val + l.exc + r.exc;
    int exc=Math.max(l.inc,l.exc) + Math.max(r.inc,r.exc);

    return new Pair(inc,exc);
  }
}`,

      python: `def maxSum(root):
    def dfs(node):
        if not node:
            return (0,0)

        l=dfs(node.left)
        r=dfs(node.right)

        inc=node.val + l[1] + r[1]
        exc=max(l)+max(r)

        return (inc,exc)

    return max(dfs(root))`,

      c: `// tree dp`,
      cpp: `pair<int,int> dfs(Node* root){
    if(!root) return {0,0};

    auto l=dfs(root->left);
    auto r=dfs(root->right);

    int inc=root->val + l.second + r.second;
    int exc=max(l.first,l.second) + max(r.first,r.second);

    return {inc,exc};
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Check Mirror in N-ary Tree',
    difficulty: 'Medium',
    description: `Check if two N-ary trees are mirror.`,
    inputExample: 'edges1, edges2',
    outputExample: 'true/false',
    explanation: `Stack vs Queue comparison.`,
    code: {
      java: `class Main{
  static boolean mirror(List<List<Integer>> t1,List<List<Integer>> t2,int n){
    for(int i=1;i<=n;i++){
      Stack<Integer> st=new Stack<>();
      Queue<Integer> q=new LinkedList<>();

      for(int x:t1.get(i)) st.push(x);
      for(int x:t2.get(i)) q.add(x);

      while(!st.isEmpty()){
        if(st.pop()!=q.poll())
          return false;
      }
    }
    return true;
  }
}`,

      python: `def mirror(t1,t2,n):
    for i in range(1,n+1):
        st=t1[i][:]
        q=t2[i][:]

        if st[::-1]!=q:
            return False
    return True`,

      c: `// stack vs queue`,
      cpp: `bool mirror(vector<vector<int>>& t1,vector<vector<int>>& t2,int n){
    for(int i=1;i<=n;i++){
        stack<int> st;
        queue<int> q;

        for(int x:t1[i]) st.push(x);
        for(int x:t2[i]) q.push(x);

        while(!st.empty()){
            if(st.top()!=q.front())
                return false;
            st.pop(); q.pop();
        }
    }
    return true;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Binary Trees',
    title: 'Check Given Graph is Tree',
    difficulty: 'Easy',
    description: `Check if graph is tree.`,
    inputExample: 'n, edges',
    outputExample: 'true/false',
    explanation: `Connected + no cycle.`,
    code: {
      java: `class Main{
  static boolean isTree(int n,List<List<Integer>> adj){
    boolean[] vis=new boolean[n];

    if(dfs(0,-1,adj,vis)) return false;

    for(boolean v:vis)
      if(!v) return false;

    return true;
  }

  static boolean dfs(int u,int p,List<List<Integer>> adj,boolean[] vis){
    vis[u]=true;

    for(int v:adj.get(u)){
      if(!vis[v]){
        if(dfs(v,u,adj,vis)) return true;
      } else if(v!=p) return true;
    }
    return false;
  }
}`,

      python: `def isTree(n,adj):
    vis=[False]*n

    def dfs(u,p):
        vis[u]=True
        for v in adj[u]:
            if not vis[v]:
                if dfs(v,u): return True
            elif v!=p:
                return True
        return False

    if dfs(0,-1):
        return False

    return all(vis)`,

      c: `// cycle + connected`,
      cpp: `bool dfs(int u,int p,vector<vector<int>>& adj,vector<bool>& vis){
    vis[u]=true;

    for(int v:adj[u]){
        if(!vis[v]){
            if(dfs(v,u,adj,vis)) return true;
        } else if(v!=p) return true;
    }
    return false;
}

bool isTree(int n,vector<vector<int>>& adj){
    vector<bool> vis(n,false);

    if(dfs(0,-1,adj,vis))
        return false;

    for(bool v:vis)
        if(!v) return false;

    return true;
}`
    }
  }
]

const seed = async () => {
    try {
        await mongoose.connect((process.env.MONGO_URI || process.env.MONGODB_URI))
        console.log('Connected to MongoDB')
        
        const ops = problems.map(p => ({
            updateOne: {
                filter: { title: p.title },
                update: { $setOnInsert: p },
                upsert: true
            }
        }))

        const result = await CodeProblem.bulkWrite(ops)
        console.log(`Successfully processed ${problems.length} problems for Binary Trees`)
        
        await mongoose.disconnect()
        process.exit(0)
    } catch (error) {
        console.error('Seed failed:', error)
        process.exit(1)
    }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  seed()
}