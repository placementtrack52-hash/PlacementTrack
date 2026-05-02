import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'

const problems = [
  {
    subject: 'Code',
    category: 'Heap',
    title: 'Min Heap and Max Heap Implementation',
    difficulty: 'Medium',
    description: `Implement Min Heap and Max Heap with insert and delete operations.`,
    inputExample: 'insert(10), insert(5), extractMin()',
    outputExample: '5',
    explanation: `Use array-based heap and heapify operations.`,
    code: {
      java: `import java.util.*;

class MinHeap {
  PriorityQueue<Integer> pq = new PriorityQueue<>();

  void insert(int x){ pq.add(x); }
  int extractMin(){ return pq.isEmpty() ? -1 : pq.poll(); }
}

class MaxHeap {
  PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());

  void insert(int x){ pq.add(x); }
  int extractMax(){ return pq.isEmpty() ? -1 : pq.poll(); }
}`,

      python: `import heapq

class MinHeap:
    def __init__(self):
        self.h = []

    def insert(self, x):
        heapq.heappush(self.h, x)

    def extract_min(self):
        return heapq.heappop(self.h) if self.h else -1

class MaxHeap:
    def __init__(self):
        self.h = []

    def insert(self, x):
        heapq.heappush(self.h, -x)

    def extract_max(self):
        return -heapq.heappop(self.h) if self.h else -1`,

      c: `#include <stdio.h>
#define MAX 100

int heap[MAX], size=0;

void swap(int *a,int *b){
    int t=*a; *a=*b; *b=t;
}

void insert(int x){
    heap[size]=x;
    int i=size;
    size++;

    while(i>0 && heap[(i-1)/2] > heap[i]){
        swap(&heap[i], &heap[(i-1)/2]);
        i=(i-1)/2;
    }
}

int extractMin(){
    if(size==0) return -1;
    int root=heap[0];
    heap[0]=heap[--size];

    int i=0;
    while(2*i+1 < size){
        int smallest=i;
        int l=2*i+1, r=2*i+2;

        if(l<size && heap[l]<heap[smallest]) smallest=l;
        if(r<size && heap[r]<heap[smallest]) smallest=r;

        if(smallest!=i){
            swap(&heap[i], &heap[smallest]);
            i=smallest;
        } else break;
    }
    return root;
}`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

int main(){
    priority_queue<int> maxh;
    priority_queue<int, vector<int>, greater<int>> minh;

    minh.push(10);
    minh.push(5);
    cout<<minh.top(); // 5
}`
    }
  },

  {
    subject: 'Code',
    category: 'Heap',
    title: 'Check if an Array Represents a Min Heap',
    difficulty: 'Easy',
    description: `Check if given array satisfies min heap property.`,
    inputExample: '[1,3,5,7,9]',
    outputExample: 'true',
    explanation: `Parent <= children.`,
    code: {
      java: `public class Main {
  public static boolean isMinHeap(int[] arr){
    int n=arr.length;
    for(int i=0;i<=n/2-1;i++){
      if(arr[i] > arr[2*i+1]) return false;
      if(2*i+2<n && arr[i] > arr[2*i+2]) return false;
    }
    return true;
  }
}`,

      python: `def is_min_heap(arr):
    n=len(arr)
    for i in range(n//2):
        if arr[i] > arr[2*i+1]:
            return False
        if 2*i+2 < n and arr[i] > arr[2*i+2]:
            return False
    return True`,

      c: `int isMinHeap(int arr[], int n){
    for(int i=0;i<=n/2-1;i++){
        if(arr[i] > arr[2*i+1]) return 0;
        if(2*i+2<n && arr[i] > arr[2*i+2]) return 0;
    }
    return 1;
}`,

      cpp: `bool isMinHeap(vector<int>& arr){
    int n=arr.size();
    for(int i=0;i<=n/2-1;i++){
        if(arr[i] > arr[2*i+1]) return false;
        if(2*i+2<n && arr[i] > arr[2*i+2]) return false;
    }
    return true;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Heap',
    title: 'Convert Min Heap to Max Heap',
    difficulty: 'Medium',
    description: `Convert given min heap array into max heap.`,
    inputExample: '[1,3,5,7,9]',
    outputExample: '[9,7,5,1,3]',
    explanation: `Apply heapify from bottom.`,
    code: {
      java: `public class Main {
  static void heapify(int[] arr,int n,int i){
    int largest=i;
    int l=2*i+1, r=2*i+2;

    if(l<n && arr[l]>arr[largest]) largest=l;
    if(r<n && arr[r]>arr[largest]) largest=r;

    if(largest!=i){
      int t=arr[i]; arr[i]=arr[largest]; arr[largest]=t;
      heapify(arr,n,largest);
    }
  }

  public static void convert(int[] arr){
    int n=arr.length;
    for(int i=n/2-1;i>=0;i--)
      heapify(arr,n,i);
  }
}`,

      python: `def heapify(arr,n,i):
    largest=i
    l=2*i+1
    r=2*i+2

    if l<n and arr[l]>arr[largest]:
        largest=l
    if r<n and arr[r]>arr[largest]:
        largest=r

    if largest!=i:
        arr[i],arr[largest]=arr[largest],arr[i]
        heapify(arr,n,largest)

def convert(arr):
    n=len(arr)
    for i in range(n//2-1,-1,-1):
        heapify(arr,n,i)`,

      c: `void heapify(int arr[],int n,int i){
    int largest=i;
    int l=2*i+1, r=2*i+2;

    if(l<n && arr[l]>arr[largest]) largest=l;
    if(r<n && arr[r]>arr[largest]) largest=r;

    if(largest!=i){
        int t=arr[i]; arr[i]=arr[largest]; arr[largest]=t;
        heapify(arr,n,largest);
    }
}

void convert(int arr[],int n){
    for(int i=n/2-1;i>=0;i--)
        heapify(arr,n,i);
}`,

      cpp: `void heapify(vector<int>& arr,int n,int i){
    int largest=i;
    int l=2*i+1, r=2*i+2;

    if(l<n && arr[l]>arr[largest]) largest=l;
    if(r<n && arr[r]>arr[largest]) largest=r;

    if(largest!=i){
        swap(arr[i],arr[largest]);
        heapify(arr,n,largest);
    }
}

void convert(vector<int>& arr){
    int n=arr.size();
    for(int i=n/2-1;i>=0;i--)
        heapify(arr,n,i);
}`
    }
  },
    {
    subject: 'Code',
    category: 'Heap',
    title: 'Kth Largest Element in an Array',
    difficulty: 'Medium',
    description: `Find kth largest using priority queue.`,
    inputExample: 'arr=[3,2,1,5,6,4], k=2',
    outputExample: '5',
    explanation: `Use min heap of size k.`,
    code: {
      java: `import java.util.*;
class Main{
  static int kthLargest(int[] arr,int k){
    PriorityQueue<Integer> pq=new PriorityQueue<>();
    for(int x:arr){
      pq.add(x);
      if(pq.size()>k) pq.poll();
    }
    return pq.peek();
  }
}`,

      python: `import heapq
def kth_largest(arr,k):
    pq=[]
    for x in arr:
        heapq.heappush(pq,x)
        if len(pq)>k:
            heapq.heappop(pq)
    return pq[0]`,

      c: `// use min heap (priority queue manually)`,
      cpp: `int kthLargest(vector<int>& arr,int k){
    priority_queue<int, vector<int>, greater<int>> pq;
    for(int x:arr){
        pq.push(x);
        if(pq.size()>k) pq.pop();
    }
    return pq.top();
}`
    }
  },

  {
    subject: 'Code',
    category: 'Heap',
    title: 'Kth Smallest Element in an Array',
    difficulty: 'Medium',
    description: `Find kth smallest using max heap.`,
    inputExample: 'arr=[7,10,4,3,20,15], k=3',
    outputExample: '7',
    explanation: `Use max heap of size k.`,
    code: {
      java: `import java.util.*;
class Main{
  static int kthSmallest(int[] arr,int k){
    PriorityQueue<Integer> pq=new PriorityQueue<>(Collections.reverseOrder());
    for(int x:arr){
      pq.add(x);
      if(pq.size()>k) pq.poll();
    }
    return pq.peek();
  }
}`,

      python: `import heapq
def kth_smallest(arr,k):
    pq=[]
    for x in arr:
        heapq.heappush(pq,-x)
        if len(pq)>k:
            heapq.heappop(pq)
    return -pq[0]`,

      c: `// max heap manually`,
      cpp: `int kthSmallest(vector<int>& arr,int k){
    priority_queue<int> pq;
    for(int x:arr){
        pq.push(x);
        if(pq.size()>k) pq.pop();
    }
    return pq.top();
}`
    }
  },

  {
    subject: 'Code',
    category: 'Heap',
    title: 'Sort K Sorted Array',
    difficulty: 'Medium',
    description: `Sort nearly sorted array.`,
    inputExample: '[6,5,3,2,8,10,9]',
    outputExample: '[2,3,5,6,8,9,10]',
    explanation: `Use heap of size k.`,
    code: {
      java: `import java.util.*;
class Main{
  static void sortK(int[] arr,int k){
    PriorityQueue<Integer> pq=new PriorityQueue<>();
    int i=0;

    for(;i<=k;i++) pq.add(arr[i]);

    int idx=0;
    for(;i<arr.length;i++){
      arr[idx++]=pq.poll();
      pq.add(arr[i]);
    }

    while(!pq.isEmpty())
      arr[idx++]=pq.poll();
  }
}`,

      python: `import heapq
def sort_k(arr,k):
    pq=arr[:k+1]
    heapq.heapify(pq)
    idx=0

    for i in range(k+1,len(arr)):
        arr[idx]=heapq.heappop(pq)
        heapq.heappush(pq,arr[i])
        idx+=1

    while pq:
        arr[idx]=heapq.heappop(pq)
        idx+=1
    return arr`,

      c: `// min heap logic`,
      cpp: `void sortK(vector<int>& arr,int k){
    priority_queue<int, vector<int>, greater<int>> pq;
    int i=0;

    for(;i<=k;i++) pq.push(arr[i]);

    int idx=0;
    for(;i<arr.size();i++){
        arr[idx++]=pq.top(); pq.pop();
        pq.push(arr[i]);
    }

    while(!pq.empty()){
        arr[idx++]=pq.top(); pq.pop();
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Heap',
    title: 'Merge M Sorted Lists',
    difficulty: 'Hard',
    description: `Merge multiple sorted lists.`,
    inputExample: '[[1,4,5],[1,3,4],[2,6]]',
    outputExample: '[1,1,2,3,4,4,5,6]',
    explanation: `Use min heap.`,
    code: {
      java: `import java.util.*;
class Main{
  static List<Integer> merge(List<List<Integer>> lists){
    PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->a[0]-b[0]);
    List<Integer> res=new ArrayList<>();

    for(int i=0;i<lists.size();i++)
      if(!lists.get(i).isEmpty())
        pq.add(new int[]{lists.get(i).get(0),i,0});

    while(!pq.isEmpty()){
      int[] cur=pq.poll();
      res.add(cur[0]);

      int li=cur[1], idx=cur[2];
      if(idx+1<lists.get(li).size())
        pq.add(new int[]{lists.get(li).get(idx+1),li,idx+1});
    }
    return res;
  }
}`,

      python: `import heapq
def merge(lists):
    pq=[]
    res=[]

    for i,l in enumerate(lists):
        if l:
            heapq.heappush(pq,(l[0],i,0))

    while pq:
        val,i,j=heapq.heappop(pq)
        res.append(val)
        if j+1 < len(lists[i]):
            heapq.heappush(pq,(lists[i][j+1],i,j+1))
    return res`,

      c: `// complex heap`,
      cpp: `vector<int> merge(vector<vector<int>>& lists){
    priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> pq;
    vector<int> res;

    for(int i=0;i<lists.size();i++)
        if(!lists[i].empty())
            pq.push({lists[i][0],i,0});

    while(!pq.empty()){
        auto cur=pq.top(); pq.pop();
        res.push_back(cur[0]);

        if(cur[2]+1 < lists[cur[1]].size())
            pq.push({lists[cur[1]][cur[2]+1],cur[1],cur[2]+1});
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Heap',
    title: 'Replace Each Element by Rank',
    difficulty: 'Easy',
    description: `Replace each element with its rank.`,
    inputExample: '[20,15,26,2,98,6]',
    outputExample: '[4,3,5,1,6,2]',
    explanation: `Sort and map.`,
    code: {
      java: `import java.util.*;
class Main{
  static int[] rank(int[] arr){
    int[] sorted=arr.clone();
    Arrays.sort(sorted);

    Map<Integer,Integer> map=new HashMap<>();
    int r=1;

    for(int x:sorted)
      if(!map.containsKey(x))
        map.put(x,r++);

    for(int i=0;i<arr.length;i++)
      arr[i]=map.get(arr[i]);

    return arr;
  }
}`,

      python: `def rank(arr):
    sorted_arr=sorted(arr)
    mp={}
    r=1
    for x in sorted_arr:
        if x not in mp:
            mp[x]=r
            r+=1
    return [mp[x] for x in arr]`,

      c: `// sorting + mapping`,
      cpp: `vector<int> rank(vector<int>& arr){
    vector<int> sorted=arr;
    sort(sorted.begin(),sorted.end());

    map<int,int> mp;
    int r=1;

    for(int x:sorted)
        if(mp.find(x)==mp.end())
            mp[x]=r++;

    for(int &x:arr)
        x=mp[x];

    return arr;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Heap',
    title: 'Design Twitter',
    difficulty: 'Hard',
    description: `Design a simplified Twitter where users can post tweets, follow/unfollow, and get news feed.`,
    inputExample: 'postTweet(1,5), getNewsFeed(1)',
    outputExample: '[5]',
    explanation: `Use hashmap + max heap for feed.`,
    code: {
      java: `import java.util.*;

class Twitter {
  private int time = 0;
  private Map<Integer, Set<Integer>> followMap = new HashMap<>();
  private Map<Integer, List<int[]>> tweetMap = new HashMap<>();

  public void postTweet(int userId, int tweetId){
    tweetMap.putIfAbsent(userId, new ArrayList<>());
    tweetMap.get(userId).add(new int[]{time++, tweetId});
  }

  public List<Integer> getNewsFeed(int userId){
    PriorityQueue<int[]> pq = new PriorityQueue<>((a,b)->b[0]-a[0]);

    followMap.putIfAbsent(userId,new HashSet<>());
    followMap.get(userId).add(userId);

    for(int u : followMap.get(userId)){
      if(tweetMap.containsKey(u)){
        List<int[]> tweets = tweetMap.get(u);
        for(int i=tweets.size()-1;i>=Math.max(0,tweets.size()-10);i--)
          pq.add(tweets.get(i));
      }
    }

    List<Integer> res = new ArrayList<>();
    while(!pq.isEmpty() && res.size()<10)
      res.add(pq.poll()[1]);

    return res;
  }

  public void follow(int followerId,int followeeId){
    followMap.putIfAbsent(followerId,new HashSet<>());
    followMap.get(followerId).add(followeeId);
  }

  public void unfollow(int followerId,int followeeId){
    if(followMap.containsKey(followerId) && followeeId!=followerId)
      followMap.get(followerId).remove(followeeId);
  }
}`,

      python: `import heapq
from collections import defaultdict

class Twitter:
    def __init__(self):
        self.time = 0
        self.followMap = defaultdict(set)
        self.tweetMap = defaultdict(list)

    def postTweet(self, userId, tweetId):
        self.tweetMap[userId].append((self.time, tweetId))
        self.time += 1

    def getNewsFeed(self, userId):
        self.followMap[userId].add(userId)
        pq = []

        for u in self.followMap[userId]:
            if u in self.tweetMap:
                for t in self.tweetMap[u][-10:]:
                    heapq.heappush(pq, (-t[0], t[1]))

        res = []
        while pq and len(res) < 10:
            res.append(heapq.heappop(pq)[1])
        return res

    def follow(self, followerId, followeeId):
        self.followMap[followerId].add(followeeId)

    def unfollow(self, followerId, followeeId):
        if followeeId != followerId:
            self.followMap[followerId].discard(followeeId)`,

      c: `// very complex in C (hashmap + heap), usually skipped in interviews`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Twitter {
    int time = 0;
    unordered_map<int, set<int>> followMap;
    unordered_map<int, vector<pair<int,int>>> tweetMap;

public:
    void postTweet(int userId,int tweetId){
        tweetMap[userId].push_back({time++,tweetId});
    }

    vector<int> getNewsFeed(int userId){
        priority_queue<pair<int,int>> pq;
        followMap[userId].insert(userId);

        for(int u:followMap[userId]){
            for(auto &t:tweetMap[u])
                pq.push(t);
        }

        vector<int> res;
        while(!pq.empty() && res.size()<10){
            res.push_back(pq.top().second);
            pq.pop();
        }
        return res;
    }

    void follow(int a,int b){
        followMap[a].insert(b);
    }

    void unfollow(int a,int b){
        if(a!=b) followMap[a].erase(b);
    }
};`
    }
  },

  {
    subject: 'Code',
    category: 'Heap',
    title: 'Connect N Ropes with Minimal Cost',
    difficulty: 'Easy',
    description: `Connect ropes with minimum total cost.`,
    inputExample: '[4,3,2,6]',
    outputExample: '29',
    explanation: `Use min heap, always pick two smallest.`,
    code: {
      java: `import java.util.*;

class Main{
  static int minCost(int[] arr){
    PriorityQueue<Integer> pq=new PriorityQueue<>();
    for(int x:arr) pq.add(x);

    int cost=0;
    while(pq.size()>1){
      int a=pq.poll();
      int b=pq.poll();
      int sum=a+b;
      cost+=sum;
      pq.add(sum);
    }
    return cost;
  }
}`,

      python: `import heapq
def min_cost(arr):
    heapq.heapify(arr)
    cost=0

    while len(arr)>1:
        a=heapq.heappop(arr)
        b=heapq.heappop(arr)
        s=a+b
        cost+=s
        heapq.heappush(arr,s)
    return cost`,

      c: `// use min heap`,
      cpp: `int minCost(vector<int>& arr){
    priority_queue<int, vector<int>, greater<int>> pq(arr.begin(),arr.end());
    int cost=0;

    while(pq.size()>1){
        int a=pq.top(); pq.pop();
        int b=pq.top(); pq.pop();
        int s=a+b;
        cost+=s;
        pq.push(s);
    }
    return cost;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Heap',
    title: 'Kth Largest Element in a Stream',
    difficulty: 'Medium',
    description: `Maintain kth largest element in running stream.`,
    inputExample: 'k=3, stream=[4,5,8,2]',
    outputExample: '[4,5,5,8]',
    explanation: `Use min heap of size k.`,
    code: {
      java: `import java.util.*;

class KthLargest {
  PriorityQueue<Integer> pq = new PriorityQueue<>();
  int k;

  KthLargest(int k){
    this.k = k;
  }

  int add(int val){
    pq.add(val);
    if(pq.size()>k) pq.poll();
    return pq.peek();
  }
}`,

      python: `import heapq

class KthLargest:
    def __init__(self,k):
        self.k=k
        self.pq=[]

    def add(self,val):
        heapq.heappush(self.pq,val)
        if len(self.pq)>self.k:
            heapq.heappop(self.pq)
        return self.pq[0]`,

      c: `// use min heap manually`,
      cpp: `class KthLargest{
    priority_queue<int, vector<int>, greater<int>> pq;
    int k;
public:
    KthLargest(int k):k(k){}

    int add(int val){
        pq.push(val);
        if(pq.size()>k) pq.pop();
        return pq.top();
    }
};`
    }
  },
   {
    subject: 'Code',
    category: 'Heap',
    title: 'Maximum Sum Combination',
    difficulty: 'Hard',
    description: `Find top K maximum sum combinations from two arrays.`,
    inputExample: 'A=[1,4,2,3], B=[2,5,1,6], k=4',
    outputExample: '[10,9,9,8]',
    explanation: `Use max heap + set to track visited pairs.`,
    code: {
      java: `import java.util.*;

class Main {
  static List<Integer> maxCombinations(int[] A,int[] B,int k){
    Arrays.sort(A);
    Arrays.sort(B);

    int n=A.length;
    PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->b[0]-a[0]);
    Set<String> set=new HashSet<>();

    pq.add(new int[]{A[n-1]+B[n-1], n-1, n-1});
    set.add((n-1)+"#"+(n-1));

    List<Integer> res=new ArrayList<>();

    while(k-- > 0){
      int[] cur=pq.poll();
      res.add(cur[0]);

      int i=cur[1], j=cur[2];

      if(i-1>=0 && !set.contains((i-1)+"#"+j)){
        pq.add(new int[]{A[i-1]+B[j], i-1, j});
        set.add((i-1)+"#"+j);
      }

      if(j-1>=0 && !set.contains(i+"#"+(j-1))){
        pq.add(new int[]{A[i]+B[j-1], i, j-1});
        set.add(i+"#"+(j-1));
      }
    }
    return res;
  }
}`,

      python: `import heapq

def max_combinations(A,B,k):
    A.sort()
    B.sort()
    n=len(A)

    pq=[]
    visited=set()

    heapq.heappush(pq,(-(A[n-1]+B[n-1]),n-1,n-1))
    visited.add((n-1,n-1))

    res=[]
    for _ in range(k):
        s,i,j=heapq.heappop(pq)
        res.append(-s)

        if i-1>=0 and (i-1,j) not in visited:
            heapq.heappush(pq,(-(A[i-1]+B[j]),i-1,j))
            visited.add((i-1,j))

        if j-1>=0 and (i,j-1) not in visited:
            heapq.heappush(pq,(-(A[i]+B[j-1]),i,j-1))
            visited.add((i,j-1))
    return res`,

      c: `// complex heap + set`,
      cpp: `vector<int> maxCombinations(vector<int>& A, vector<int>& B, int k){
    sort(A.begin(),A.end());
    sort(B.begin(),B.end());

    int n=A.size();
    priority_queue<vector<int>> pq;
    set<pair<int,int>> vis;

    pq.push({A[n-1]+B[n-1], n-1, n-1});
    vis.insert({n-1,n-1});

    vector<int> res;

    while(k--){
        auto cur=pq.top(); pq.pop();
        int sum=cur[0], i=cur[1], j=cur[2];
        res.push_back(sum);

        if(i-1>=0 && !vis.count({i-1,j})){
            pq.push({A[i-1]+B[j],i-1,j});
            vis.insert({i-1,j});
        }

        if(j-1>=0 && !vis.count({i,j-1})){
            pq.push({A[i]+B[j-1],i,j-1});
            vis.insert({i,j-1});
        }
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Heap',
    title: 'Find Median from Data Stream',
    difficulty: 'Hard',
    description: `Maintain median dynamically.`,
    inputExample: '[1,2,3]',
    outputExample: '[1,1.5,2]',
    explanation: `Use two heaps (max + min).`,
    code: {
      java: `import java.util.*;

class MedianFinder {
  PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder());
  PriorityQueue<Integer> large = new PriorityQueue<>();

  public void addNum(int num){
    small.add(num);
    large.add(small.poll());

    if(small.size() < large.size())
      small.add(large.poll());
  }

  public double findMedian(){
    if(small.size() > large.size())
      return small.peek();
    return (small.peek()+large.peek())/2.0;
  }
}`,

      python: `import heapq

class MedianFinder:
    def __init__(self):
        self.small=[]
        self.large=[]

    def addNum(self,num):
        heapq.heappush(self.small,-num)
        heapq.heappush(self.large,-heapq.heappop(self.small))

        if len(self.small)<len(self.large):
            heapq.heappush(self.small,-heapq.heappop(self.large))

    def findMedian(self):
        if len(self.small)>len(self.large):
            return -self.small[0]
        return (-self.small[0]+self.large[0])/2`,

      c: `// two heap implementation`,
      cpp: `class MedianFinder{
    priority_queue<int> small;
    priority_queue<int, vector<int>, greater<int>> large;

public:
    void addNum(int num){
        small.push(num);
        large.push(small.top());
        small.pop();

        if(small.size()<large.size()){
            small.push(large.top());
            large.pop();
        }
    }

    double findMedian(){
        if(small.size()>large.size())
            return small.top();
        return (small.top()+large.top())/2.0;
    }
};`
    }
  },

  {
    subject: 'Code',
    category: 'Heap',
    title: 'K Most Frequent Elements',
    difficulty: 'Medium',
    description: `Find k most frequent elements.`,
    inputExample: '[1,1,1,2,2,3], k=2',
    outputExample: '[1,2]',
    explanation: `Use hashmap + heap.`,
    code: {
      java: `import java.util.*;

class Main{
  static List<Integer> topK(int[] nums,int k){
    Map<Integer,Integer> map=new HashMap<>();
    for(int x:nums) map.put(x,map.getOrDefault(x,0)+1);

    PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->a[1]-b[1]);

    for(int key:map.keySet()){
      pq.add(new int[]{key,map.get(key)});
      if(pq.size()>k) pq.poll();
    }

    List<Integer> res=new ArrayList<>();
    while(!pq.isEmpty())
      res.add(pq.poll()[0]);
    return res;
  }
}`,

      python: `import heapq
from collections import Counter

def top_k(nums,k):
    count=Counter(nums)
    return [x for x,_ in heapq.nlargest(k,count.items(), key=lambda x:x[1])]`,

      c: `// hashmap + heap`,
      cpp: `vector<int> topK(vector<int>& nums,int k){
    unordered_map<int,int> mp;
    for(int x:nums) mp[x]++;

    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;

    for(auto &p:mp){
        pq.push({p.second,p.first});
        if(pq.size()>k) pq.pop();
    }

    vector<int> res;
    while(!pq.empty()){
        res.push_back(pq.top().second);
        pq.pop();
    }
    return res;
}`
    }
  },
    {
    subject: 'Code',
    category: 'Heap',
    title: 'Heap Sort',
    difficulty: 'Medium',
    description: `Sort an array using heap sort.`,
    inputExample: '[4,10,3,5,1]',
    outputExample: '[1,3,4,5,10]',
    explanation: `Build max heap and repeatedly extract max.`,
    code: {
      java: `public class Main {
  static void heapify(int[] arr,int n,int i){
    int largest=i;
    int l=2*i+1, r=2*i+2;

    if(l<n && arr[l]>arr[largest]) largest=l;
    if(r<n && arr[r]>arr[largest]) largest=r;

    if(largest!=i){
      int t=arr[i]; arr[i]=arr[largest]; arr[largest]=t;
      heapify(arr,n,largest);
    }
  }

  static void heapSort(int[] arr){
    int n=arr.length;

    for(int i=n/2-1;i>=0;i--)
      heapify(arr,n,i);

    for(int i=n-1;i>0;i--){
      int t=arr[0]; arr[0]=arr[i]; arr[i]=t;
      heapify(arr,i,0);
    }
  }
}`,

      python: `def heapify(arr,n,i):
    largest=i
    l=2*i+1
    r=2*i+2

    if l<n and arr[l]>arr[largest]:
        largest=l
    if r<n and arr[r]>arr[largest]:
        largest=r

    if largest!=i:
        arr[i],arr[largest]=arr[largest],arr[i]
        heapify(arr,n,largest)

def heap_sort(arr):
    n=len(arr)

    for i in range(n//2-1,-1,-1):
        heapify(arr,n,i)

    for i in range(n-1,0,-1):
        arr[0],arr[i]=arr[i],arr[0]
        heapify(arr,i,0)`,

      c: `#include <stdio.h>

void heapify(int arr[],int n,int i){
    int largest=i;
    int l=2*i+1, r=2*i+2;

    if(l<n && arr[l]>arr[largest]) largest=l;
    if(r<n && arr[r]>arr[largest]) largest=r;

    if(largest!=i){
        int t=arr[i]; arr[i]=arr[largest]; arr[largest]=t;
        heapify(arr,n,largest);
    }
}

void heapSort(int arr[],int n){
    for(int i=n/2-1;i>=0;i--)
        heapify(arr,n,i);

    for(int i=n-1;i>0;i--){
        int t=arr[0]; arr[0]=arr[i]; arr[i]=t;
        heapify(arr,i,0);
    }
}`,

      cpp: `void heapify(vector<int>& arr,int n,int i){
    int largest=i;
    int l=2*i+1, r=2*i+2;

    if(l<n && arr[l]>arr[largest]) largest=l;
    if(r<n && arr[r]>arr[largest]) largest=r;

    if(largest!=i){
        swap(arr[i],arr[largest]);
        heapify(arr,n,largest);
    }
}

void heapSort(vector<int>& arr){
    int n=arr.size();

    for(int i=n/2-1;i>=0;i--)
        heapify(arr,n,i);

    for(int i=n-1;i>0;i--){
        swap(arr[0],arr[i]);
        heapify(arr,i,0);
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Heap',
    title: 'Reorganize String',
    difficulty: 'Medium',
    description: `Rearrange string so no two adjacent characters are same.`,
    inputExample: '"aab"',
    outputExample: '"aba"',
    explanation: `Use max heap based on frequency.`,
    code: {
      java: `import java.util.*;

class Main{
  static String reorganize(String s){
    Map<Character,Integer> map=new HashMap<>();
    for(char c:s.toCharArray())
      map.put(c,map.getOrDefault(c,0)+1);

    PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->b[1]-a[1]);

    for(char c:map.keySet())
      pq.add(new int[]{c,map.get(c)});

    StringBuilder res=new StringBuilder();
    int[] prev=null;

    while(!pq.isEmpty()){
      int[] cur=pq.poll();
      res.append((char)cur[0]);
      cur[1]--;

      if(prev!=null && prev[1]>0)
        pq.add(prev);

      prev=cur;
    }

    return res.length()==s.length()?res.toString():"";
  }
}`,

      python: `import heapq
from collections import Counter

def reorganize(s):
    count=Counter(s)
    pq=[(-v,k) for k,v in count.items()]
    heapq.heapify(pq)

    res=""
    prev=(0,'')

    while pq:
        v,k=heapq.heappop(pq)
        res+=k
        if prev[0]<0:
            heapq.heappush(pq,prev)
        prev=(v+1,k)

    return res if len(res)==len(s) else ""`,

      c: `// complex heap`,
      cpp: `string reorganize(string s){
    unordered_map<char,int> mp;
    for(char c:s) mp[c]++;

    priority_queue<pair<int,char>> pq;
    for(auto &p:mp) pq.push({p.second,p.first});

    string res="";
    pair<int,char> prev={0,'#'};

    while(!pq.empty()){
        auto cur=pq.top(); pq.pop();
        res+=cur.second;
        cur.first--;

        if(prev.first>0) pq.push(prev);
        prev=cur;
    }

    return res.size()==s.size()?res:"";
}`
    }
  },

  {
    subject: 'Code',
    category: 'Heap',
    title: 'Build Heap from Array',
    difficulty: 'Easy',
    description: `Convert array into heap.`,
    inputExample: '[4,10,3,5,1]',
    outputExample: 'Min/Max heap array',
    explanation: `Use bottom-up heapify.`,
    code: {
      java: `public class Main {
  static void heapify(int[] arr,int n,int i){
    int largest=i;
    int l=2*i+1, r=2*i+2;

    if(l<n && arr[l]>arr[largest]) largest=l;
    if(r<n && arr[r]>arr[largest]) largest=r;

    if(largest!=i){
      int t=arr[i]; arr[i]=arr[largest]; arr[largest]=t;
      heapify(arr,n,largest);
    }
  }

  static void buildHeap(int[] arr){
    int n=arr.length;
    for(int i=n/2-1;i>=0;i--)
      heapify(arr,n,i);
  }
}`,

      python: `def heapify(arr,n,i):
    largest=i
    l=2*i+1
    r=2*i+2

    if l<n and arr[l]>arr[largest]:
        largest=l
    if r<n and arr[r]>arr[largest]:
        largest=r

    if largest!=i:
        arr[i],arr[largest]=arr[largest],arr[i]
        heapify(arr,n,largest)

def build_heap(arr):
    n=len(arr)
    for i in range(n//2-1,-1,-1):
        heapify(arr,n,i)`,

      c: `void heapify(int arr[],int n,int i){
    int largest=i;
    int l=2*i+1, r=2*i+2;

    if(l<n && arr[l]>arr[largest]) largest=l;
    if(r<n && arr[r]>arr[largest]) largest=r;

    if(largest!=i){
        int t=arr[i]; arr[i]=arr[largest]; arr[largest]=t;
        heapify(arr,n,largest);
    }
}

void buildHeap(int arr[],int n){
    for(int i=n/2-1;i>=0;i--)
        heapify(arr,n,i);
}`,

      cpp: `void heapify(vector<int>& arr,int n,int i){
    int largest=i;
    int l=2*i+1, r=2*i+2;

    if(l<n && arr[l]>arr[largest]) largest=l;
    if(r<n && arr[r]>arr[largest]) largest=r;

    if(largest!=i){
        swap(arr[i],arr[largest]);
        heapify(arr,n,largest);
    }
}

void buildHeap(vector<int>& arr){
    int n=arr.size();
    for(int i=n/2-1;i>=0;i--)
        heapify(arr,n,i);
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
        console.log(`Successfully processed ${problems.length} problems for Heap`)
        
        await mongoose.disconnect()
        process.exit(0)
    } catch (error) {
        console.error('Seed failed:', error)
        process.exit(1)
    }
}

seed()
