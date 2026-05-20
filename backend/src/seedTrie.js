import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'

const problems = [
  {
    subject: 'Code',
    category: 'Trie',
    title: 'Implement Trie (Insert, Search, StartsWith)',
    difficulty: 'Medium',
    description: `Implement Trie with insert, search, and startsWith operations.`,
    inputExample: 'insert("apple"), search("apple"), startsWith("app")',
    outputExample: 'true, true',
    explanation: `Use Trie node with 26 children.`,
    code: {
      java: `class TrieNode {
  TrieNode[] child = new TrieNode[26];
  boolean end;
}

public class Trie {
  TrieNode root = new TrieNode();

  public void insert(String word) {
    TrieNode node = root;
    for(char c : word.toCharArray()){
      int i = c - 'a';
      if(node.child[i] == null)
        node.child[i] = new TrieNode();
      node = node.child[i];
    }
    node.end = true;
  }

  public boolean search(String word){
    TrieNode node = root;
    for(char c : word.toCharArray()){
      int i = c - 'a';
      if(node.child[i] == null) return false;
      node = node.child[i];
    }
    return node.end;
  }

  public boolean startsWith(String prefix){
    TrieNode node = root;
    for(char c : prefix.toCharArray()){
      int i = c - 'a';
      if(node.child[i] == null) return false;
      node = node.child[i];
    }
    return true;
  }
}`,

      python: `class TrieNode:
    def __init__(self):
        self.child = {}
        self.end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for c in word:
            if c not in node.child:
                node.child[c] = TrieNode()
            node = node.child[c]
        node.end = True

    def search(self, word):
        node = self.root
        for c in word:
            if c not in node.child:
                return False
            node = node.child[c]
        return node.end

    def startsWith(self, prefix):
        node = self.root
        for c in prefix:
            if c not in node.child:
                return False
            node = node.child[c]
        return True`,

      c: `#include <stdio.h>
#include <stdlib.h>

struct Trie {
    struct Trie* child[26];
    int end;
};

struct Trie* create(){
    struct Trie* node = (struct Trie*)malloc(sizeof(struct Trie));
    node->end = 0;
    for(int i=0;i<26;i++) node->child[i]=NULL;
    return node;
}

void insert(struct Trie* root, char* word){
    struct Trie* node = root;
    for(int i=0;word[i];i++){
        int idx = word[i]-'a';
        if(!node->child[idx])
            node->child[idx] = create();
        node = node->child[idx];
    }
    node->end = 1;
}`,

      cpp: `#include <iostream>
using namespace std;

struct Trie {
    Trie* child[26];
    bool end;

    Trie(){
        end=false;
        for(int i=0;i<26;i++) child[i]=NULL;
    }
};

class TrieTree {
public:
    Trie* root;

    TrieTree(){ root = new Trie(); }

    void insert(string word){
        Trie* node=root;
        for(char c:word){
            int i=c-'a';
            if(!node->child[i])
                node->child[i]=new Trie();
            node=node->child[i];
        }
        node->end=true;
    }

    bool search(string word){
        Trie* node=root;
        for(char c:word){
            int i=c-'a';
            if(!node->child[i]) return false;
            node=node->child[i];
        }
        return node->end;
    }

    bool startsWith(string pre){
        Trie* node=root;
        for(char c:pre){
            int i=c-'a';
            if(!node->child[i]) return false;
            node=node->child[i];
        }
        return true;
    }
};`
    }
  },

  {
    subject: 'Code',
    category: 'Trie',
    title: 'Implement Trie II (Count Words & Prefix)',
    difficulty: 'Hard',
    description: `Implement Trie with countWordsEqualTo and countWordsStartingWith.`,
    inputExample: 'insert("apple"), countWordsEqualTo("apple")',
    outputExample: '1',
    explanation: `Maintain prefix and end counters.`,
    code: {
      java: `class Node {
  Node[] child = new Node[26];
  int prefix=0,end=0;
}

public class Trie {
  Node root=new Node();

  public void insert(String word){
    Node node=root;
    for(char c:word.toCharArray()){
      int i=c-'a';
      if(node.child[i]==null)
        node.child[i]=new Node();
      node=node.child[i];
      node.prefix++;
    }
    node.end++;
  }

  public int countEqual(String word){
    Node node=root;
    for(char c:word.toCharArray()){
      int i=c-'a';
      if(node.child[i]==null) return 0;
      node=node.child[i];
    }
    return node.end;
  }
}`,

      python: `class Node:
    def __init__(self):
        self.child={}
        self.prefix=0
        self.end=0

class Trie:
    def __init__(self):
        self.root=Node()

    def insert(self,word):
        node=self.root
        for c in word:
            if c not in node.child:
                node.child[c]=Node()
            node=node.child[c]
            node.prefix+=1
        node.end+=1

    def countEqual(self,word):
        node=self.root
        for c in word:
            if c not in node.child:
                return 0
            node=node.child[c]
        return node.end`,

      c: `// Similar extension with prefix & end count`,

      cpp: `// Similar extension with prefix & end count`
    }
  },

  {
    subject: 'Code',
    category: 'Trie',
    title: 'Longest String with All Prefixes',
    difficulty: 'Medium',
    description: `Find longest word where all prefixes exist.`,
    inputExample: '["n","ni","nin","ninj","ninja"]',
    outputExample: '"ninja"',
    explanation: `Check all prefixes in Trie.`,
    code: {
      java: `// Build Trie and check all prefixes exist`,
      python: `# Build Trie and check prefixes`,
      c: `// Implement using Trie`,
      cpp: `// Implement using Trie`
    }
  },

  {
    subject: 'Code',
    category: 'Trie',
    title: 'Number of Distinct Substrings',
    difficulty: 'Hard',
    description: `Count distinct substrings using Trie.`,
    inputExample: '"abc"',
    outputExample: '6',
    explanation: `Insert all suffixes into Trie.`,
    code: {
      java: `// Insert all suffixes into Trie`,
      python: `# Insert all suffixes into Trie`,
      c: `// Trie suffix insertion`,
      cpp: `// Trie suffix insertion`
    }
  },
   {
    subject: 'Code',
    category: 'Trie',
    title: 'Bit Prerequisites for Trie (Binary Representation)',
    difficulty: 'Easy',
    description: `Understand bit manipulation needed for XOR Trie problems.`,
    inputExample: 'num = 5',
    outputExample: '101',
    explanation: `Convert number to binary and extract bits.`,
    code: {
      java: `public class Main {
  public static void printBits(int num){
    for(int i=31;i>=0;i--){
      System.out.print((num>>i)&1);
    }
  }
}`,

      python: `def print_bits(num):
    for i in range(31,-1,-1):
        print((num>>i)&1, end="")`,

      c: `#include <stdio.h>

void printBits(int num){
    for(int i=31;i>=0;i--){
        printf("%d",(num>>i)&1);
    }
}`,

      cpp: `#include <iostream>
using namespace std;

void printBits(int num){
    for(int i=31;i>=0;i--){
        cout<<((num>>i)&1);
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Trie',
    title: 'Maximum XOR of Two Numbers in an Array',
    difficulty: 'Medium',
    description: `Find maximum XOR of any two numbers in array using Trie.`,
    inputExample: 'arr = [3,10,5,25,2,8]',
    outputExample: '28',
    explanation: `Use bitwise Trie to maximize XOR.`,
    code: {
      java: `class Node{
  Node[] child=new Node[2];
}

public class Main {
  static Node root=new Node();

  static void insert(int num){
    Node node=root;
    for(int i=31;i>=0;i--){
      int bit=(num>>i)&1;
      if(node.child[bit]==null)
        node.child[bit]=new Node();
      node=node.child[bit];
    }
  }

  static int maxXor(int num){
    Node node=root;
    int max=0;

    for(int i=31;i>=0;i--){
      int bit=(num>>i)&1;
      if(node.child[1-bit]!=null){
        max |= (1<<i);
        node=node.child[1-bit];
      } else node=node.child[bit];
    }
    return max;
  }

  public static int findMax(int[] arr){
    for(int x:arr) insert(x);
    int res=0;
    for(int x:arr)
      res=Math.max(res,maxXor(x));
    return res;
  }
}`,

      python: `class Node:
    def __init__(self):
        self.child=[None,None]

class Trie:
    def __init__(self):
        self.root=Node()

    def insert(self,num):
        node=self.root
        for i in range(31,-1,-1):
            bit=(num>>i)&1
            if not node.child[bit]:
                node.child[bit]=Node()
            node=node.child[bit]

    def max_xor(self,num):
        node=self.root
        res=0
        for i in range(31,-1,-1):
            bit=(num>>i)&1
            if node.child[1-bit]:
                res |= (1<<i)
                node=node.child[1-bit]
            else:
                node=node.child[bit]
        return res

def find_max(arr):
    trie=Trie()
    for x in arr:
        trie.insert(x)
    return max(trie.max_xor(x) for x in arr)`,

      c: `#include <stdio.h>
#include <stdlib.h>

struct Node{
    struct Node* child[2];
};

struct Node* create(){
    struct Node* node=(struct Node*)malloc(sizeof(struct Node));
    node->child[0]=node->child[1]=NULL;
    return node;
}

void insert(struct Node* root,int num){
    struct Node* node=root;
    for(int i=31;i>=0;i--){
        int bit=(num>>i)&1;
        if(!node->child[bit])
            node->child[bit]=create();
        node=node->child[bit];
    }
}

int maxXor(struct Node* root,int num){
    struct Node* node=root;
    int res=0;
    for(int i=31;i>=0;i--){
        int bit=(num>>i)&1;
        if(node->child[1-bit]){
            res|=(1<<i);
            node=node->child[1-bit];
        } else node=node->child[bit];
    }
    return res;
}`,

      cpp: `#include <iostream>
using namespace std;

struct Node{
    Node* child[2]={NULL,NULL};
};

class Trie{
public:
    Node* root=new Node();

    void insert(int num){
        Node* node=root;
        for(int i=31;i>=0;i--){
            int bit=(num>>i)&1;
            if(!node->child[bit])
                node->child[bit]=new Node();
            node=node->child[bit];
        }
    }

    int maxXor(int num){
        Node* node=root;
        int res=0;
        for(int i=31;i>=0;i--){
            int bit=(num>>i)&1;
            if(node->child[1-bit]){
                res|=(1<<i);
                node=node->child[1-bit];
            } else node=node->child[bit];
        }
        return res;
    }
};`
    }
  },

  {
    subject: 'Code',
    category: 'Trie',
    title: 'Maximum XOR With an Element From Array',
    difficulty: 'Hard',
    description: `Given queries (xi, mi), find max XOR of xi with elements <= mi.`,
    inputExample: 'arr=[0,1,2,3,4], queries=[[3,1],[1,3],[5,6]]',
    outputExample: '[3,3,7]',
    explanation: `Sort queries and insert elements <= mi into Trie.`,
    code: {
      java: `// Offline queries + Trie implementation`,
      python: `# Offline queries + Trie`,
      c: `// Implement using sorting + Trie`,
      cpp: `// Implement using sorting + Trie`
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
        console.log(`Successfully processed ${problems.length} problems for Trie`)
        
        await mongoose.disconnect()
        process.exit(0)
    } catch (error) {
        console.error('Seed failed:', error)
        process.exit(1)
    }
}

seed()
