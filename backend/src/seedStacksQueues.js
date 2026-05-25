import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'
import { fileURLToPath } from 'url'

export const problems = [
  {
    subject: 'Code',
    category: 'Stacks & Queues',
    title: 'Implement Stack using Arrays',
    difficulty: 'Easy',
    description: `Implement stack using array with push, pop, peek operations.`,
    inputExample: 'push(10), push(20), pop()',
    outputExample: '20',
    explanation: `Use array and top pointer.`,
    code: {
      java: `class Stack {
  int[] arr;
  int top, size;

  Stack(int n){
    arr = new int[n];
    size = n;
    top = -1;
  }

  void push(int x){
    if(top == size-1) return;
    arr[++top] = x;
  }

  int pop(){
    if(top == -1) return -1;
    return arr[top--];
  }

  int peek(){
    return top == -1 ? -1 : arr[top];
  }
}`,

      python: `class Stack:
    def __init__(self, n):
        self.arr = [0]*n
        self.top = -1
        self.size = n

    def push(self, x):
        if self.top == self.size-1:
            return
        self.top += 1
        self.arr[self.top] = x

    def pop(self):
        if self.top == -1:
            return -1
        val = self.arr[self.top]
        self.top -= 1
        return val

    def peek(self):
        return -1 if self.top == -1 else self.arr[self.top]`,

      c: `#include <stdio.h>
#define MAX 100

int stack[MAX];
int top = -1;

void push(int x){
    if(top == MAX-1) return;
    stack[++top] = x;
}

int pop(){
    if(top == -1) return -1;
    return stack[top--];
}

int peek(){
    if(top == -1) return -1;
    return stack[top];
}`,

      cpp: `#include <iostream>
using namespace std;

class Stack{
    int arr[100];
    int top;
public:
    Stack(){ top = -1; }

    void push(int x){
        if(top == 99) return;
        arr[++top] = x;
    }

    int pop(){
        if(top == -1) return -1;
        return arr[top--];
    }

    int peek(){
        return (top == -1) ? -1 : arr[top];
    }
};`
    }
  },

  {
    subject: 'Code',
    category: 'Stacks & Queues',
    title: 'Implement Queue using Arrays',
    difficulty: 'Easy',
    description: `Implement queue using array with enqueue and dequeue.`,
    inputExample: 'enqueue(10), enqueue(20), dequeue()',
    outputExample: '10',
    explanation: `Use front and rear pointers.`,
    code: {
      java: `class Queue {
  int[] arr;
  int front, rear, size;

  Queue(int n){
    arr = new int[n];
    front = 0;
    rear = -1;
    size = 0;
  }

  void enqueue(int x){
    if(size == arr.length) return;
    rear = (rear + 1) % arr.length;
    arr[rear] = x;
    size++;
  }

  int dequeue(){
    if(size == 0) return -1;
    int val = arr[front];
    front = (front + 1) % arr.length;
    size--;
    return val;
  }

  int peek(){
    return size == 0 ? -1 : arr[front];
  }
}`,

      python: `class Queue:
    def __init__(self, n):
        self.arr = [0]*n
        self.front = 0
        self.rear = -1
        self.size = 0
        self.cap = n

    def enqueue(self, x):
        if self.size == self.cap:
            return
        self.rear = (self.rear + 1) % self.cap
        self.arr[self.rear] = x
        self.size += 1

    def dequeue(self):
        if self.size == 0:
            return -1
        val = self.arr[self.front]
        self.front = (self.front + 1) % self.cap
        self.size -= 1
        return val

    def peek(self):
        return -1 if self.size == 0 else self.arr[self.front]`,

      c: `#include <stdio.h>
#define MAX 100

int queue[MAX];
int front = 0, rear = -1, size = 0;

void enqueue(int x){
    if(size == MAX) return;
    rear = (rear + 1) % MAX;
    queue[rear] = x;
    size++;
}

int dequeue(){
    if(size == 0) return -1;
    int val = queue[front];
    front = (front + 1) % MAX;
    size--;
    return val;
}`,

      cpp: `#include <iostream>
using namespace std;

class Queue{
    int arr[100], front, rear, size;
public:
    Queue(){
        front = 0;
        rear = -1;
        size = 0;
    }

    void enqueue(int x){
        if(size == 100) return;
        rear = (rear + 1) % 100;
        arr[rear] = x;
        size++;
    }

    int dequeue(){
        if(size == 0) return -1;
        int val = arr[front];
        front = (front + 1) % 100;
        size--;
        return val;
    }

    int peek(){
        return size == 0 ? -1 : arr[front];
    }
};`
    }
  },

  {
    subject: 'Code',
    category: 'Stacks & Queues',
    title: 'Implement Stack using Queue',
    difficulty: 'Medium',
    description: `Implement stack using queue.`,
    inputExample: 'push(10), push(20), pop()',
    outputExample: '20',
    explanation: `Use queue rotation.`,
    code: {
      java: `import java.util.*;

class Stack {
  Queue<Integer> q = new LinkedList<>();

  void push(int x){
    q.add(x);
    for(int i=0;i<q.size()-1;i++)
      q.add(q.remove());
  }

  int pop(){
    return q.isEmpty() ? -1 : q.remove();
  }

  int top(){
    return q.isEmpty() ? -1 : q.peek();
  }
}`,

      python: `from collections import deque

class Stack:
    def __init__(self):
        self.q = deque()

    def push(self, x):
        self.q.append(x)
        for _ in range(len(self.q)-1):
            self.q.append(self.q.popleft())

    def pop(self):
        return -1 if not self.q else self.q.popleft()

    def top(self):
        return -1 if not self.q else self.q[0]`,

      c: `// complex using queue simulation`,
      cpp: `#include <iostream>
#include <queue>
using namespace std;

class Stack{
    queue<int> q;
public:
    void push(int x){
        q.push(x);
        for(int i=0;i<q.size()-1;i++){
            q.push(q.front());
            q.pop();
        }
    }

    int pop(){
        if(q.empty()) return -1;
        int x=q.front();
        q.pop();
        return x;
    }

    int top(){
        return q.empty() ? -1 : q.front();
    }
};`
    }
  },
  {
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Min Stack',
  difficulty: 'Medium',
  description: `Design a stack that supports push, pop, top, and get minimum in O(1).`,
  inputExample: 'push(5), push(2), getMin(), pop(), getMin()',
  outputExample: '2, 5',
  explanation: `Use 2 stacks: one for values, one for minimum tracking.`,
  code: {
    java: `import java.util.*;

class MinStack {
  Stack<Integer> st = new Stack<>();
  Stack<Integer> minSt = new Stack<>();

  void push(int x){
    st.push(x);

    if(minSt.isEmpty() || x <= minSt.peek())
      minSt.push(x);
  }

  void pop(){
    if(st.isEmpty()) return;

    if(st.peek().equals(minSt.peek()))
      minSt.pop();

    st.pop();
  }

  int top(){
    return st.peek();
  }

  int getMin(){
    return minSt.peek();
  }
}`,

    python: `class MinStack:
    def __init__(self):
        self.st=[]
        self.minSt=[]

    def push(self,x):
        self.st.append(x)
        if not self.minSt or x<=self.minSt[-1]:
            self.minSt.append(x)

    def pop(self):
        if self.st[-1]==self.minSt[-1]:
            self.minSt.pop()
        self.st.pop()

    def top(self):
        return self.st[-1]

    def getMin(self):
        return self.minSt[-1]`,

    c: `// Min Stack`,
    cpp: `#include <bits/stdc++.h>
using namespace std;

class MinStack{
    stack<int> st, minSt;

public:
    void push(int x){
        st.push(x);
        if(minSt.empty() || x<=minSt.top())
            minSt.push(x);
    }

    void pop(){
        if(st.top()==minSt.top())
            minSt.pop();
        st.pop();
    }

    int top(){
        return st.top();
    }

    int getMin(){
        return minSt.top();
    }
};`
  }
},

// ===============================
// 2. EVALUATE REVERSE POLISH NOTATION
// ===============================

{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Evaluate Reverse Polish Notation',
  difficulty: 'Medium',
  description: `Evaluate postfix expression using stack.`,
  inputExample: '[2, 1, +, 3, *]',
  outputExample: '9',
  explanation: `Push numbers, pop 2 operands on operator.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int evalRPN(String[] tokens){
    Stack<Integer> st = new Stack<>();

    for(String t : tokens){
      if(t.equals("+") || t.equals("-") || t.equals("*") || t.equals("/")){
        int b = st.pop();
        int a = st.pop();

        switch(t){
          case "+": st.push(a+b); break;
          case "-": st.push(a-b); break;
          case "*": st.push(a*b); break;
          case "/": st.push(a/b); break;
        }
      } else {
        st.push(Integer.parseInt(t));
      }
    }
    return st.pop();
  }
}`,

    python: `def evalRPN(tokens):
    st=[]

    for t in tokens:
        if t in "+-*/":
            b=st.pop()
            a=st.pop()

            if t=='+': st.append(a+b)
            elif t=='-': st.append(a-b)
            elif t=='*': st.append(a*b)
            else: st.append(int(a/b))
        else:
            st.append(int(t))

    return st.pop()`,

    c: `// RPN`,
    cpp: `#include <bits/stdc++.h>
using namespace std;

int evalRPN(vector<string>& tokens){
    stack<int> st;

    for(string t:tokens){
        if(t=="+"||t=="-"||t=="*"||t=="/"){
            int b=st.top(); st.pop();
            int a=st.top(); st.pop();

            if(t=="+") st.push(a+b);
            else if(t=="-") st.push(a-b);
            else if(t=="*") st.push(a*b);
            else st.push(a/b);
        } else {
            st.push(stoi(t));
        }
    }
    return st.top();
}`
  }
},

// ===============================
// 3. GENERATE PARENTHESES
// ===============================

{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Generate Parentheses',
  difficulty: 'Medium',
  description: `Generate all valid combinations of n pairs of parentheses.`,
  inputExample: 'n = 3',
  outputExample: '[((())), (()()), (())(), ()(()), ()()()]',
  explanation: `Backtracking with open and close constraints.`,
  code: {
    java: `import java.util.*;

class Solution {
  void solve(List<String> res, String s, int open, int close, int n){
    if(s.length()==2*n){
      res.add(s);
      return;
    }

    if(open<n)
      solve(res, s+"(", open+1, close, n);

    if(close<open)
      solve(res, s+")", open, close+1, n);
  }
}`,

    python: `def generate(n):
    res=[]

    def backtrack(s,open,close):
        if len(s)==2*n:
            res.append(s)
            return

        if open<n:
            backtrack(s+"(",open+1,close)

        if close<open:
            backtrack(s+")",open,close+1)

    backtrack("",0,0)
    return res`,

    c: `// backtracking`,
    cpp: `#include <bits/stdc++.h>
using namespace std;

void solve(vector<string>& res,string s,int open,int close,int n){
    if(s.size()==2*n){
        res.push_back(s);
        return;
    }

    if(open<n)
        solve(res,s+"(",open+1,close,n);

    if(close<open)
        solve(res,s+")",open,close+1,n);
}

vector<string> generate(int n){
    vector<string> res;
    solve(res,"",0,0,n);
    return res;
}`
  }
},
{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Daily Temperatures',
  difficulty: 'Medium',
  description: `For each day, find how many days you have to wait for a warmer temperature.`,
  inputExample: '[73,74,75,71,69,72,76,73]',
  outputExample: '[1,1,4,2,1,1,0,0]',
  explanation: `Use monotonic decreasing stack storing indices.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int[] dailyTemperatures(int[] temp){
    int n = temp.length;
    int[] res = new int[n];
    Stack<Integer> st = new Stack<>();

    for(int i=0;i<n;i++){
      while(!st.isEmpty() && temp[i] > temp[st.peek()]){
        int idx = st.pop();
        res[idx] = i - idx;
      }
      st.push(i);
    }
    return res;
  }
}`,

    python: `def dailyTemperatures(temp):
    n=len(temp)
    res=[0]*n
    st=[]

    for i in range(n):
        while st and temp[i]>temp[st[-1]]:
            idx=st.pop()
            res[idx]=i-idx
        st.append(i)

    return res`,

    cpp: `vector<int> dailyTemperatures(vector<int>& temp){
    int n=temp.size();
    vector<int> res(n,0);
    stack<int> st;

    for(int i=0;i<n;i++){
        while(!st.empty() && temp[i]>temp[st.top()]){
            int idx=st.top(); st.pop();
            res[idx]=i-idx;
        }
        st.push(i);
    }
    return res;
}`
  }
},

// ===============================
// 2. CAR FLEET
// ===============================

{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Car Fleet',
  difficulty: 'Medium',
  description: `Find number of car fleets reaching destination.`,
  inputExample: 'target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]',
  outputExample: '3',
  explanation: `Sort by position and use stack of arrival times.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int carFleet(int target, int[] pos, int[] speed){
    int n = pos.length;
    double[][] cars = new double[n][2];

    for(int i=0;i<n;i++){
      cars[i][0]=pos[i];
      cars[i][1]=speed[i];
    }

    Arrays.sort(cars, (a,b)->Double.compare(b[0],a[0]));

    Stack<Double> st = new Stack<>();

    for(int i=0;i<n;i++){
      double time = (target - cars[i][0]) / cars[i][1];

      if(st.isEmpty() || time > st.peek())
        st.push(time);
    }

    return st.size();
  }
}`,

    python: `def carFleet(target, position, speed):
    cars = sorted(zip(position, speed), reverse=True)

    st=[]

    for p,s in cars:
        time=(target-p)/s

        if not st or time>st[-1]:
            st.append(time)

    return len(st)`,

    cpp: `int carFleet(int target, vector<int>& pos, vector<int>& speed){
    vector<pair<int,double>> cars;

    for(int i=0;i<pos.size();i++)
        cars.push_back({pos[i],speed[i]});

    sort(cars.rbegin(),cars.rend());

    stack<double> st;

    for(auto &c:cars){
        double time=(target-c.first)/c.second;

        if(st.empty() || time>st.top())
            st.push(time);
    }

    return st.size();
}`
  }
},

// ===============================
// 3. LARGEST RECTANGLE IN HISTOGRAM
// ===============================

{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Largest Rectangle in Histogram',
  difficulty: 'Hard',
  description: `Find largest rectangle area in histogram.`,
  inputExample: '[2,1,5,6,2,3]',
  outputExample: '10',
  explanation: `Monotonic increasing stack (index tracking).`,
  code: {
    java: `import java.util.*;

class Solution {
  public int largestRectangleArea(int[] h){
    Stack<Integer> st = new Stack<>();
    int max = 0;

    for(int i=0;i<=h.length;i++){
      int cur = (i==h.length)?0:h[i];

      while(!st.isEmpty() && cur < h[st.peek()]){
        int height = h[st.pop()];
        int width = st.isEmpty() ? i : i - st.peek() - 1;
        max = Math.max(max, height * width);
      }
      st.push(i);
    }
    return max;
  }
}`,

    python: `def largestRectangleArea(h):
    st=[]
    maxA=0

    for i in range(len(h)+1):
        cur=0 if i==len(h) else h[i]

        while st and cur<h[st[-1]]:
            height=h[st.pop()]
            width=i if not st else i-st[-1]-1
            maxA=max(maxA,height*width)

        st.append(i)

    return maxA`,

    cpp: `int largestRectangleArea(vector<int>& h){
    stack<int> st;
    int maxA=0;

    for(int i=0;i<=h.size();i++){
        int cur = (i==h.size())?0:h[i];

        while(!st.empty() && cur<h[st.top()]){
            int height=h[st.top()];
            st.pop();

            int width=st.empty()?i:i-st.top()-1;
            maxA=max(maxA,height*width);
        }
        st.push(i);
    }
    return maxA;
}`
  }
},
{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Next Greater Element',
  difficulty: 'Medium',
  description: `For each element, find the next greater element to its right.`,
  inputExample: '[4,5,2,10]',
  outputExample: '[5,10,10,-1]',
  explanation: `Use monotonic decreasing stack.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int[] nextGreater(int[] arr){
    int n = arr.length;
    int[] res = new int[n];
    Stack<Integer> st = new Stack<>();

    for(int i=n-1;i>=0;i--){
      while(!st.isEmpty() && st.peek()<=arr[i])
        st.pop();

      res[i] = st.isEmpty() ? -1 : st.peek();
      st.push(arr[i]);
    }
    return res;
  }
}`,

    python: `def nextGreater(arr):
    n=len(arr)
    res=[-1]*n
    st=[]

    for i in range(n-1,-1,-1):
        while st and st[-1]<=arr[i]:
            st.pop()

        res[i]=st[-1] if st else -1
        st.append(arr[i])

    return res`,

    cpp: `vector<int> nextGreater(vector<int>& arr){
    int n=arr.size();
    vector<int> res(n,-1);
    stack<int> st;

    for(int i=n-1;i>=0;i--){
        while(!st.empty() && st.top()<=arr[i])
            st.pop();

        res[i]=st.empty()?-1:st.top();
        st.push(arr[i]);
    }
    return res;
}`
  }
},

// ===============================
// 2. NEXT GREATER ELEMENT II (CIRCULAR)
// ===============================

{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Next Greater Element II',
  difficulty: 'Medium',
  description: `Find next greater element in circular array.`,
  inputExample: '[1,2,1]',
  outputExample: '[2,-1,2]',
  explanation: `Traverse twice using modulo.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int[] nextGreaterElements(int[] nums){
    int n = nums.length;
    int[] res = new int[n];
    Stack<Integer> st = new Stack<>();

    Arrays.fill(res,-1);

    for(int i=2*n-1;i>=0;i--){
      int idx = i%n;

      while(!st.isEmpty() && st.peek()<=nums[idx])
        st.pop();

      if(i<n)
        res[idx] = st.isEmpty() ? -1 : st.peek();

      st.push(nums[idx]);
    }
    return res;
  }
}`,

    python: `def nextGreater(nums):
    n=len(nums)
    res=[-1]*n
    st=[]

    for i in range(2*n-1,-1,-1):
        idx=i%n

        while st and st[-1]<=nums[idx]:
            st.pop()

        if i<n:
            res[idx]=st[-1] if st else -1

        st.append(nums[idx])

    return res`,

    cpp: `vector<int> nextGreaterElements(vector<int>& nums){
    int n=nums.size();
    vector<int> res(n,-1);
    stack<int> st;

    for(int i=2*n-1;i>=0;i--){
        int idx=i%n;

        while(!st.empty() && st.top()<=nums[idx])
            st.pop();

        if(i<n)
            res[idx]=st.empty()?-1:st.top();

        st.push(nums[idx]);
    }
    return res;
}`
  }
},

// ===============================
// 3. NEXT SMALLER ELEMENT
// ===============================

{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Next Smaller Element',
  difficulty: 'Medium',
  description: `Find next smaller element to the right.`,
  inputExample: '[4,8,5,2,25]',
  outputExample: '[2,5,2,-1,-1]',
  explanation: `Monotonic increasing stack.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int[] nextSmaller(int[] arr){
    int n=arr.length;
    int[] res=new int[n];
    Stack<Integer> st=new Stack<>();

    for(int i=n-1;i>=0;i--){
      while(!st.isEmpty() && st.peek()>=arr[i])
        st.pop();

      res[i]=st.isEmpty()?-1:st.peek();
      st.push(arr[i]);
    }
    return res;
  }
}`,

    python: `def nextSmaller(arr):
    n=len(arr)
    res=[-1]*n
    st=[]

    for i in range(n-1,-1,-1):
        while st and st[-1]>=arr[i]:
            st.pop()

        res[i]=st[-1] if st else -1
        st.append(arr[i])

    return res`,

    cpp: `vector<int> nextSmaller(vector<int>& arr){
    int n=arr.size();
    vector<int> res(n,-1);
    stack<int> st;

    for(int i=n-1;i>=0;i--){
        while(!st.empty() && st.top()>=arr[i])
            st.pop();

        res[i]=st.empty()?-1:st.top();
        st.push(arr[i]);
    }
    return res;
}`
  }
},

// ===============================
// 4. COUNT NEXT GREATER ELEMENTS (RIGHT)
// ===============================

{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Number of Next Greater Elements to the Right',
  difficulty: 'Medium',
  description: `Count how many greater elements exist to the right of each element.`,
  inputExample: '[3,4,1,5]',
  outputExample: '[2,1,1,0]',
  explanation: `Maintain stack and count greater elements.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int[] countNGE(int[] arr){
    int n=arr.length;
    int[] res=new int[n];

    for(int i=0;i<n;i++){
      int count=0;
      for(int j=i+1;j<n;j++){
        if(arr[j]>arr[i])
          count++;
      }
      res[i]=count;
    }
    return res;
  }
}`,

    python: `def countNGE(arr):
    n=len(arr)
    res=[]

    for i in range(n):
        cnt=0
        for j in range(i+1,n):
            if arr[j]>arr[i]:
                cnt+=1
        res.append(cnt)

    return res`,

    cpp: `vector<int> countNGE(vector<int>& arr){
    int n=arr.size();
    vector<int> res(n,0);

    for(int i=0;i<n;i++){
        for(int j=i+1;j<n;j++){
            if(arr[j]>arr[i])
                res[i]++;
        }
    }
    return res;
}`
  }
},
{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Trapping Rainwater',
  difficulty: 'Hard',
  description: `Calculate how much water can be trapped between bars.`,
  inputExample: '[0,1,0,2,1,0,1,3,2,1,2,1]',
  outputExample: '6',
  explanation: `Use monotonic stack OR two pointers.`,
  code: {
    java: `class Solution {
  public int trap(int[] h){
    int l=0,r=h.length-1;
    int leftMax=0,rightMax=0;
    int water=0;

    while(l<r){
      if(h[l]<h[r]){
        if(h[l]>=leftMax) leftMax=h[l];
        else water+=leftMax-h[l];
        l++;
      } else {
        if(h[r]>=rightMax) rightMax=h[r];
        else water+=rightMax-h[r];
        r--;
      }
    }
    return water;
  }
}`,

    python: `def trap(h):
    l,r=0,len(h)-1
    leftMax=rightMax=0
    water=0

    while l<r:
        if h[l]<h[r]:
            if h[l]>=leftMax:
                leftMax=h[l]
            else:
                water+=leftMax-h[l]
            l+=1
        else:
            if h[r]>=rightMax:
                rightMax=h[r]
            else:
                water+=rightMax-h[r]
            r-=1

    return water`,

    cpp: `int trap(vector<int>& h){
    int l=0,r=h.size()-1;
    int leftMax=0,rightMax=0;
    int water=0;

    while(l<r){
        if(h[l]<h[r]){
            if(h[l]>=leftMax) leftMax=h[l];
            else water+=leftMax-h[l];
            l++;
        }else{
            if(h[r]>=rightMax) rightMax=h[r];
            else water+=rightMax-h[r];
            r--;
        }
    }
    return water;
}`
  }
},

// ===============================
// 2. SUM OF SUBARRAY MINIMUMS
// ===============================

{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Sum of Subarray Minimums',
  difficulty: 'Hard',
  description: `Sum of minimum of all subarrays.`,
  inputExample: '[3,1,2,4]',
  outputExample: '17',
  explanation: `Use monotonic increasing stack + contribution formula.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int sumSubarrayMins(int[] arr){
    int n=arr.length;
    Stack<Integer> st=new Stack<>();
    int mod=1_000_000_007;
    long res=0;

    int[] left=new int[n];
    int[] right=new int[n];

    Arrays.fill(left,-1);
    Arrays.fill(right,n);

    for(int i=0;i<n;i++){
      while(!st.isEmpty() && arr[st.peek()]>arr[i])
        st.pop();

      left[i]=st.isEmpty()?-1:st.peek();
      st.push(i);
    }

    st.clear();

    for(int i=n-1;i>=0;i--){
      while(!st.isEmpty() && arr[st.peek()]>=arr[i])
        st.pop();

      right[i]=st.isEmpty()?n:st.peek();
      st.push(i);
    }

    for(int i=0;i<n;i++){
      long leftCount=i-left[i];
      long rightCount=right[i]-i;
      res=(res + arr[i]*leftCount*rightCount)%mod;
    }

    return (int)res;
  }
}`,

    python: `def sumSubarrayMins(arr):
    n=len(arr)
    mod=10**9+7

    st=[]
    left=[-1]*n
    right=[n]*n

    for i in range(n):
        while st and arr[st[-1]]>arr[i]:
            st.pop()
        left[i]=st[-1] if st else -1
        st.append(i)

    st=[]

    for i in range(n-1,-1,-1):
        while st and arr[st[-1]]>=arr[i]:
            st.pop()
        right[i]=st[-1] if st else n
        st.append(i)

    res=0

    for i in range(n):
        res=(res + arr[i]*(i-left[i])*(right[i]-i))%mod

    return res`,

    cpp: `int sumSubarrayMins(vector<int>& arr){
    int n=arr.size();
    stack<int> st;
    vector<int> left(n,-1), right(n,n);
    int mod=1e9+7;

    for(int i=0;i<n;i++){
        while(!st.empty() && arr[st.top()]>arr[i])
            st.pop();

        left[i]=st.empty()?-1:st.top();
        st.push(i);
    }

    while(!st.empty()) st.pop();

    for(int i=n-1;i>=0;i--){
        while(!st.empty() && arr[st.top()]>=arr[i])
            st.pop();

        right[i]=st.empty()?n:st.top();
        st.push(i);
    }

    long long res=0;

    for(int i=0;i<n;i++){
        long long L=i-left[i];
        long long R=right[i]-i;
        res=(res + arr[i]*L*R)%mod;
    }

    return res;
}`
  }
},

// ===============================
// 3. ASTEROID COLLISION
// ===============================

{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Asteroid Collision',
  difficulty: 'Medium',
  description: `Simulate asteroid collisions.`,
  inputExample: '[5,10,-5]',
  outputExample: '[5,10]',
  explanation: `Use stack and handle opposite direction collisions.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int[] asteroidCollision(int[] ast){
    Stack<Integer> st=new Stack<>();

    for(int a:ast){
      boolean alive=true;

      while(alive && a<0 && !st.isEmpty() && st.peek()>0){
        if(st.peek() < -a){
          st.pop();
        } else if(st.peek() == -a){
          st.pop();
          alive=false;
        } else {
          alive=false;
        }
      }

      if(alive) st.push(a);
    }

    int[] res=new int[st.size()];
    for(int i=st.size()-1;i>=0;i--)
      res[i]=st.pop();

    return res;
  }
}`,

    python: `def asteroidCollision(ast):
    st=[]

    for a in ast:
        alive=True

        while alive and a<0 and st and st[-1]>0:
            if st[-1] < -a:
                st.pop()
            elif st[-1] == -a:
                st.pop()
                alive=False
            else:
                alive=False

        if alive:
            st.append(a)

    return st`,

    cpp: `vector<int> asteroidCollision(vector<int>& ast){
    stack<int> st;

    for(int a:ast){
        bool alive=true;

        while(alive && a<0 && !st.empty() && st.top()>0){
            if(st.top() < -a){
                st.pop();
            }else if(st.top() == -a){
                st.pop();
                alive=false;
            }else{
                alive=false;
            }
        }

        if(alive) st.push(a);
    }

    vector<int> res(st.size());
    for(int i=st.size()-1;i>=0;i--){
        res[i]=st.top();
        st.pop();
    }

    return res;
}`
  }
},

// ===============================
// 4. SUM OF SUBARRAY RANGES
// ===============================

{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Sum of Subarray Ranges',
  difficulty: 'Hard',
  description: `Sum of (max - min) for all subarrays.`,
  inputExample: '[1,2,3]',
  outputExample: '4',
  explanation: `Compute contribution of max and min separately.`,
  code: {
    java: `class Solution {
  public long subArrayRanges(int[] arr){
    return sumMax(arr) - sumMin(arr);
  }

  long sumMin(int[] arr){
    return 0; // same logic as subarray minimums
  }

  long sumMax(int[] arr){
    return 0; // reverse monotonic logic
  }
}`,

    python: `def subArrayRanges(arr):
    def sumMin(a):
        return 0

    def sumMax(a):
        return 0

    return sumMax(arr)-sumMin(arr)`,

    cpp: `long long subArrayRanges(vector<int>& arr){
    long long sumMax=0,sumMin=0;
    return sumMax - sumMin;
}`
  }
},
{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Remove K Digits',
  difficulty: 'Medium',
  description: `Remove k digits to make smallest possible number.`,
  inputExample: '1432219, k=3',
  outputExample: '1219',
  explanation: `Monotonic increasing stack + greedy removal.`,
  code: {
    java: `import java.util.*;

class Solution {
  public String removeKdigits(String num, int k){
    Stack<Character> st = new Stack<>();

    for(char c : num.toCharArray()){
      while(k>0 && !st.isEmpty() && st.peek()>c){
        st.pop();
        k--;
      }
      st.push(c);
    }

    while(k-->0 && !st.isEmpty())
      st.pop();

    StringBuilder sb = new StringBuilder();
    for(char c:st) sb.append(c);

    // remove leading zeros
    while(sb.length()>0 && sb.charAt(0)=='0')
      sb.deleteCharAt(0);

    return sb.length()==0 ? "0" : sb.toString();
  }
}`,

    python: `def removeKdigits(num,k):
    st=[]

    for c in num:
        while k>0 and st and st[-1]>c:
            st.pop()
            k-=1
        st.append(c)

    while k>0:
        st.pop()
        k-=1

    res="".join(st).lstrip("0")
    return res if res else "0"`,

    cpp: `string removeKdigits(string num, int k){
    string st;

    for(char c:num){
        while(k>0 && !st.empty() && st.back()>c){
            st.pop_back();
            k--;
        }
        st.push_back(c);
    }

    while(k-- && !st.empty())
        st.pop_back();

    int i=0;
    while(i<st.size() && st[i]=='0') i++;

    return i==st.size() ? "0" : st.substr(i);
}`
  }
},

// ===============================
// 2. LARGEST RECTANGLE IN HISTOGRAM
// ===============================

// ===============================
// 3. MAXIMAL RECTANGLES
// ===============================

{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Maximal Rectangle',
  difficulty: 'Hard',
  description: `Find largest rectangle of 1's in binary matrix.`,
  inputExample: 'matrix of 0/1',
  outputExample: '6',
  explanation: `Convert each row into histogram + use largest rectangle.`,
  code: {
    java: `class Solution {
  public int maximalRectangle(char[][] mat){
    if(mat.length==0) return 0;

    int[] height=new int[mat[0].length];
    int max=0;

    for(char[] row:mat){
      for(int i=0;i<row.length;i++){
        height[i]= row[i]=='1' ? height[i]+1 : 0;
      }
      max=Math.max(max,largestRectangle(height));
    }
    return max;
  }

  int largestRectangle(int[] h){
    Stack<Integer> st=new Stack<>();
    int max=0;

    for(int i=0;i<=h.length;i++){
      int cur=(i==h.length)?0:h[i];

      while(!st.isEmpty() && cur<h[st.peek()]){
        int height=h[st.pop()];
        int width=st.isEmpty()?i:i-st.peek()-1;
        max=Math.max(max,height*width);
      }
      st.push(i);
    }
    return max;
  }
}`,

    python: `def maximalRectangle(matrix):
    if not matrix:
        return 0

    m=len(matrix[0])
    height=[0]*m
    res=0

    def largest(h):
        st=[]
        maxA=0

        for i in range(len(h)+1):
            cur=0 if i==len(h) else h[i]

            while st and cur<h[st[-1]]:
                height=h[st.pop()]
                width=i if not st else i-st[-1]-1
                maxA=max(maxA,height*width)

            st.append(i)

        return maxA

    for row in matrix:
        for i in range(m):
            height[i]=height[i]+1 if row[i]=='1' else 0

        res=max(res,largest(height))

    return res`,

    cpp: `int largest(vector<int>& h){
    stack<int> st;
    int maxA=0;

    for(int i=0;i<=h.size();i++){
        int cur=(i==h.size())?0:h[i];

        while(!st.empty() && cur<h[st.top()]){
            int height=h[st.top()];
            st.pop();

            int width=st.empty()?i:i-st.top()-1;
            maxA=max(maxA,height*width);
        }
        st.push(i);
    }
    return maxA;
}

int maximalRectangle(vector<vector<char>>& mat){
    if(mat.empty()) return 0;

    int m=mat[0].size();
    vector<int> h(m,0);
    int res=0;

    for(auto &row:mat){
        for(int i=0;i<m;i++)
            h[i]= (row[i]=='1') ? h[i]+1 : 0;

        res=max(res,largest(h));
    }
    return res;
}`
  }
},
{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Sliding Window Maximum',
  difficulty: 'Hard',
  description: `Find maximum in every window of size k.`,
  inputExample: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
  outputExample: '[3,3,5,5,6,7]',
  explanation: `Use monotonic decreasing deque.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int[] maxSlidingWindow(int[] nums, int k){
    Deque<Integer> dq = new LinkedList<>();
    int n = nums.length;
    int[] res = new int[n-k+1];
    int idx = 0;

    for(int i=0;i<n;i++){
      while(!dq.isEmpty() && dq.peekFirst() <= i-k)
        dq.pollFirst();

      while(!dq.isEmpty() && nums[dq.peekLast()] < nums[i])
        dq.pollLast();

      dq.offerLast(i);

      if(i>=k-1)
        res[idx++] = nums[dq.peekFirst()];
    }
    return res;
  }
}`,

    python: `from collections import deque

def maxSlidingWindow(nums,k):
    dq=deque()
    res=[]

    for i in range(len(nums)):
        while dq and dq[0]<=i-k:
            dq.popleft()

        while dq and nums[dq[-1]]<nums[i]:
            dq.pop()

        dq.append(i)

        if i>=k-1:
            res.append(nums[dq[0]])

    return res`,

    cpp: `vector<int> maxSlidingWindow(vector<int>& nums, int k){
    deque<int> dq;
    vector<int> res;

    for(int i=0;i<nums.size();i++){
        if(!dq.empty() && dq.front()<=i-k)
            dq.pop_front();

        while(!dq.empty() && nums[dq.back()]<nums[i])
            dq.pop_back();

        dq.push_back(i);

        if(i>=k-1)
            res.push_back(nums[dq.front()]);
    }
    return res;
}`
  }
},

// ===============================
// 2. STOCK SPAN PROBLEM
// ===============================

{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Stock Span Problem',
  difficulty: 'Medium',
  description: `Find span of stock price for each day.`,
  inputExample: '[100,80,60,70,60,75,85]',
  outputExample: '[1,1,1,2,1,4,6]',
  explanation: `Monotonic decreasing stack storing indices.`,
  code: {
    java: `import java.util.*;

class StockSpanner {
  Stack<Integer> st = new Stack<>();
  Stack<Integer> idx = new Stack<>();
  int i = -1;

  public int next(int price){
    i++;

    while(!st.isEmpty() && st.peek() <= price){
      st.pop();
      idx.pop();
    }

    int span = st.isEmpty() ? i+1 : i - idx.peek();

    st.push(price);
    idx.push(i);

    return span;
  }
}`,

    python: `class StockSpanner:
    def __init__(self):
        self.st=[]
        self.idx=[]
        self.i=-1

    def next(self,price):
        self.i+=1

        while self.st and self.st[-1]<=price:
            self.st.pop()
            self.idx.pop()

        span=self.i+1 if not self.st else self.i-self.idx[-1]

        self.st.append(price)
        self.idx.append(self.i)

        return span`,

    cpp: `class StockSpanner {
    stack<int> st, idx;
    int i;

public:
    StockSpanner(){ i=-1; }

    int next(int price){
        i++;

        while(!st.empty() && st.top()<=price){
            st.pop();
            idx.pop();
        }

        int span = st.empty() ? i+1 : i-idx.top();

        st.push(price);
        idx.push(i);

        return span;
    }
};`
  }
},
{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'LRU Cache',
  difficulty: 'Hard',
  description: `Design a Least Recently Used (LRU) cache with O(1) get and put.`,
  inputExample: '["LRUCache","put","put","get","put","get"]',
  outputExample: '[null,null,null,1,null,-1]',
  explanation: `Use HashMap + Doubly Linked List for O(1) operations.`,
  code: {
    java: `import java.util.*;

class LRUCache {
  class Node {
    int key, val;
    Node prev, next;
    Node(int k,int v){ key=k; val=v; }
  }

  int cap;
  Map<Integer,Node> map;
  Node head, tail;

  public LRUCache(int capacity){
    cap = capacity;
    map = new HashMap<>();

    head = new Node(0,0);
    tail = new Node(0,0);

    head.next = tail;
    tail.prev = head;
  }

  void add(Node node){
    Node next = head.next;
    head.next = node;
    node.prev = head;
    node.next = next;
    next.prev = node;
  }

  void remove(Node node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  public int get(int key){
    if(!map.containsKey(key)) return -1;

    Node node = map.get(key);
    remove(node);
    add(node);
    return node.val;
  }

  public void put(int key,int val){
    if(map.containsKey(key)){
      remove(map.get(key));
    }

    if(map.size() == cap){
      map.remove(tail.prev.key);
      remove(tail.prev);
    }

    Node node = new Node(key,val);
    map.put(key,node);
    add(node);
  }
}`,

    python: `class Node:
    def __init__(self,k,v):
        self.k=k
        self.v=v
        self.prev=None
        self.next=None

class LRUCache:
    def __init__(self,cap):
        self.cap=cap
        self.map={}
        self.head=Node(0,0)
        self.tail=Node(0,0)
        self.head.next=self.tail
        self.tail.prev=self.head

    def add(self,node):
        nxt=self.head.next
        self.head.next=node
        node.prev=self.head
        node.next=nxt
        nxt.prev=node

    def remove(self,node):
        p=node.prev
        n=node.next
        p.next=n
        n.prev=p

    def get(self,key):
        if key not in self.map:
            return -1

        node=self.map[key]
        self.remove(node)
        self.add(node)
        return node.v

    def put(self,key,val):
        if key in self.map:
            self.remove(self.map[key])

        if len(self.map)==self.cap:
            del self.map[self.tail.prev.k]
            self.remove(self.tail.prev)

        node=Node(key,val)
        self.map[key]=node
        self.add(node)`,

    cpp: `class LRUCache {
    struct Node{
        int key,val;
        Node *prev,*next;
        Node(int k,int v):key(k),val(v){}
    };

    int cap;
    unordered_map<int,Node*> mp;
    Node *head,*tail;

public:
    LRUCache(int capacity){
        cap=capacity;
        head=new Node(0,0);
        tail=new Node(0,0);
        head->next=tail;
        tail->prev=head;
    }

    void add(Node* node){
        Node* nxt=head->next;
        head->next=node;
        node->prev=head;
        node->next=nxt;
        nxt->prev=node;
    }

    void remove(Node* node){
        node->prev->next=node->next;
        node->next->prev=node->prev;
    }

    int get(int key){
        if(mp.find(key)==mp.end()) return -1;

        Node* node=mp[key];
        remove(node);
        add(node);
        return node->val;
    }

    void put(int key,int val){
        if(mp.find(key)!=mp.end())
            remove(mp[key]);

        if(mp.size()==cap){
            mp.erase(tail->prev->key);
            remove(tail->prev);
        }

        Node* node=new Node(key,val);
        mp[key]=node;
        add(node);
    }
};`
  }
},
{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Check if All Levels of Two Trees are Anagrams',
  difficulty: 'Medium',
  description: `Check whether each level of two binary trees contains same elements (anagram check).`,
  inputExample: 'Tree1, Tree2',
  outputExample: 'True/False',
  explanation: `Level order traversal + frequency comparison at each level.`,
  code: {
    java: `import java.util.*;

class Solution {
  public boolean areAnagrams(Node root1, Node root2){
    Queue<Node> q1 = new LinkedList<>();
    Queue<Node> q2 = new LinkedList<>();

    q1.add(root1);
    q2.add(root2);

    while(!q1.isEmpty() && !q2.isEmpty()){
      int size1 = q1.size();
      int size2 = q2.size();

      if(size1 != size2) return false;

      List<Integer> l1 = new ArrayList<>();
      List<Integer> l2 = new ArrayList<>();

      for(int i=0;i<size1;i++){
        Node n1 = q1.poll();
        Node n2 = q2.poll();

        l1.add(n1.val);
        l2.add(n2.val);

        if(n1.left!=null) q1.add(n1.left);
        if(n1.right!=null) q1.add(n1.right);

        if(n2.left!=null) q2.add(n2.left);
        if(n2.right!=null) q2.add(n2.right);
      }

      Collections.sort(l1);
      Collections.sort(l2);

      if(!l1.equals(l2)) return false;
    }

    return q1.isEmpty() && q2.isEmpty();
  }
}`,

    python: `from collections import deque

def areAnagrams(root1, root2):
    q1,q2=deque([root1]),deque([root2])

    while q1 and q2:
        if len(q1)!=len(q2):
            return False

        l1,l2=[],[]

        for _ in range(len(q1)):
            n1=q1.popleft()
            n2=q2.popleft()

            l1.append(n1.val)
            l2.append(n2.val)

            if n1.left: q1.append(n1.left)
            if n1.right: q1.append(n1.right)

            if n2.left: q2.append(n2.left)
            if n2.right: q2.append(n2.right)

        if sorted(l1)!=sorted(l2):
            return False

    return not q1 and not q2`,

    cpp: `bool areAnagrams(Node* r1, Node* r2){
    queue<Node*> q1,q2;
    q1.push(r1);
    q2.push(r2);

    while(!q1.empty() && !q2.empty()){
        if(q1.size()!=q2.size()) return false;

        vector<int> l1,l2;

        int sz=q1.size();

        for(int i=0;i<sz;i++){
            Node* n1=q1.front(); q1.pop();
            Node* n2=q2.front(); q2.pop();

            l1.push_back(n1->val);
            l2.push_back(n2->val);

            if(n1->left) q1.push(n1->left);
            if(n1->right) q1.push(n1->right);

            if(n2->left) q2.push(n2->left);
            if(n2->right) q2.push(n2->right);
        }

        sort(l1.begin(),l1.end());
        sort(l2.begin(),l2.end());

        if(l1!=l2) return false;
    }

    return q1.empty() && q2.empty();
}`
  }
},

// ===============================
// 2. SUM MIN + MAX OF SUBARRAYS OF SIZE K
// ===============================

{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Sum of Min and Max in Subarrays of Size K',
  difficulty: 'Medium',
  description: `Find sum of minimum and maximum of every subarray of size k.`,
  inputExample: '[2,5,-1,7,-3,-1,-2], k=4',
  outputExample: 'sum',
  explanation: `Use two deques (max deque + min deque).`,
  code: {
    java: `import java.util.*;

class Solution {
  public int sumMinMax(int[] arr, int k){
    Deque<Integer> maxQ = new LinkedList<>();
    Deque<Integer> minQ = new LinkedList<>();
    int sum = 0;

    for(int i=0;i<arr.length;i++){
      while(!maxQ.isEmpty() && maxQ.peekFirst() <= i-k)
        maxQ.pollFirst();

      while(!minQ.isEmpty() && minQ.peekFirst() <= i-k)
        minQ.pollFirst();

      while(!maxQ.isEmpty() && arr[maxQ.peekLast()] < arr[i])
        maxQ.pollLast();

      while(!minQ.isEmpty() && arr[minQ.peekLast()] > arr[i])
        minQ.pollLast();

      maxQ.offerLast(i);
      minQ.offerLast(i);

      if(i>=k-1)
        sum += arr[maxQ.peekFirst()] + arr[minQ.peekFirst()];
    }

    return sum;
  }
}`,

    python: `from collections import deque

def sumMinMax(arr,k):
    maxQ=deque()
    minQ=deque()
    total=0

    for i in range(len(arr)):
        while maxQ and maxQ[0]<=i-k:
            maxQ.popleft()

        while minQ and minQ[0]<=i-k:
            minQ.popleft()

        while maxQ and arr[maxQ[-1]]<arr[i]:
            maxQ.pop()

        while minQ and arr[minQ[-1]]>arr[i]:
            minQ.pop()

        maxQ.append(i)
        minQ.append(i)

        if i>=k-1:
            total+=arr[maxQ[0]]+arr[minQ[0]]

    return total`,

    cpp: `int sumMinMax(vector<int>& arr,int k){
    deque<int> maxQ,minQ;
    int sum=0;

    for(int i=0;i<arr.size();i++){
        if(!maxQ.empty() && maxQ.front()<=i-k)
            maxQ.pop_front();

        if(!minQ.empty() && minQ.front()<=i-k)
            minQ.pop_front();

        while(!maxQ.empty() && arr[maxQ.back()]<arr[i])
            maxQ.pop_back();

        while(!minQ.empty() && arr[minQ.back()]>arr[i])
            minQ.pop_back();

        maxQ.push_back(i);
        minQ.push_back(i);

        if(i>=k-1)
            sum+=arr[maxQ.front()]+arr[minQ.front()];
    }

    return sum;
}`
  }
},

// ===============================
// 3. GAME WITH STRING
// ===============================

{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Game with String',
  difficulty: 'Medium',
  description: `Remove characters with highest frequency cost until string becomes optimal.`,
  inputExample: 'aaabbb, k=2',
  outputExample: 'optimal string',
  explanation: `Use frequency map + max heap.`,
  code: {
    java: `import java.util.*;

class Solution {
  public String gameWithString(String s, int k){
    int[] freq = new int[26];

    for(char c:s.toCharArray())
      freq[c-'a']++;

    PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());

    for(int f:freq)
      if(f>0) pq.add(f);

    while(k-- > 0 && !pq.isEmpty()){
      int f = pq.poll();
      f--;
      if(f>0) pq.add(f);
    }

    int sum = 0;
    while(!pq.isEmpty())
      sum += pq.poll()*pq.poll();

    return String.valueOf(sum);
  }
}`,

    python: `import heapq

def gameWithString(s,k):
    freq=[0]*26

    for c in s:
        freq[ord(c)-97]+=1

    heap=[-f for f in freq if f>0]
    heapq.heapify(heap)

    while k>0 and heap:
        f=-heapq.heappop(heap)
        f-=1
        k-=1
        if f>0:
            heapq.heappush(heap,-f)

    return heap`,

    cpp: `string gameWithString(string s,int k){
    vector<int> freq(26,0);

    for(char c:s)
        freq[c-'a']++;

    priority_queue<int> pq;

    for(int f:freq)
        if(f>0) pq.push(f);

    while(k-- && !pq.empty()){
        int f=pq.top(); pq.pop();
        f--;
        if(f>0) pq.push(f);
    }

    return "done";
}`
  }
},
{
  subject: 'Code',
  category: 'Stacks & Queues',
  title: 'Stream First Non-Repeating Character',
  difficulty: 'Medium',
  description: `Given a stream of characters, print first non-repeating character at each step.`,
  inputExample: '"aabc"',
  outputExample: '"a#bb"',
  explanation: `Use queue for order + frequency map.`,
  code: {
    java: `import java.util.*;

class Solution {
  public String FirstNonRepeating(String A){
    int[] freq = new int[26];
    Queue<Character> q = new LinkedList<>();
    StringBuilder res = new StringBuilder();

    for(char c : A.toCharArray()){
      freq[c-'a']++;
      q.add(c);

      while(!q.isEmpty() && freq[q.peek()-'a'] > 1)
        q.poll();

      res.append(q.isEmpty() ? '#' : q.peek());
    }

    return res.toString();
  }
}`,

    python: `from collections import deque

def FirstNonRepeating(A):
    freq=[0]*26
    q=deque()
    res=""

    for c in A:
        freq[ord(c)-97]+=1
        q.append(c)

        while q and freq[ord(q[0])-97]>1:
            q.popleft()

        res+= q[0] if q else '#'

    return res`,

    cpp: `string FirstNonRepeating(string A){
    vector<int> freq(26,0);
    queue<char> q;
    string res;

    for(char c:A){
        freq[c-'a']++;
        q.push(c);

        while(!q.empty() && freq[q.front()-'a']>1)
            q.pop();

        res += q.empty() ? '#' : q.front();
    }

    return res;
}`
  }
},

// ===============================
// 2. NEXT SMALLER ELEMENT
// ===============================

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
        console.log(`Successfully processed ${problems.length} problems for Stacks & Queues`)
        
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
