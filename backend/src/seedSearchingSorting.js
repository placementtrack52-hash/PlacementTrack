import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'

const problems = [
 {
    subject: 'Code',
    category: 'Searching & Sorting',
    title: 'Search in Rotated Sorted Array',
    difficulty: 'Medium',
    description: `Search target in rotated sorted array.`,
    inputExample: 'arr=[4,5,6,7,0,1,2], target=0',
    outputExample: '4',
    explanation: `Use modified binary search.`,
    code: {
      java: `public class Main {
  public static int search(int[] arr, int target){
    int l=0, r=arr.length-1;

    while(l<=r){
      int mid=(l+r)/2;

      if(arr[mid]==target) return mid;

      if(arr[l]<=arr[mid]){
        if(target>=arr[l] && target<arr[mid])
          r=mid-1;
        else l=mid+1;
      } else {
        if(target>arr[mid] && target<=arr[r])
          l=mid+1;
        else r=mid-1;
      }
    }
    return -1;
  }
}`,

      python: `def search(arr, target):
    l, r = 0, len(arr)-1
    while l <= r:
        mid = (l+r)//2
        if arr[mid] == target:
            return mid

        if arr[l] <= arr[mid]:
            if arr[l] <= target < arr[mid]:
                r = mid - 1
            else:
                l = mid + 1
        else:
            if arr[mid] < target <= arr[r]:
                l = mid + 1
            else:
                r = mid - 1
    return -1`,

      c: `int search(int arr[], int n, int target){
    int l=0,r=n-1;
    while(l<=r){
        int mid=(l+r)/2;
        if(arr[mid]==target) return mid;

        if(arr[l]<=arr[mid]){
            if(target>=arr[l] && target<arr[mid])
                r=mid-1;
            else l=mid+1;
        } else {
            if(target>arr[mid] && target<=arr[r])
                l=mid+1;
            else r=mid-1;
        }
    }
    return -1;
}`,

      cpp: `int search(vector<int>& arr, int target){
    int l=0,r=arr.size()-1;
    while(l<=r){
        int mid=(l+r)/2;
        if(arr[mid]==target) return mid;

        if(arr[l]<=arr[mid]){
            if(target>=arr[l] && target<arr[mid])
                r=mid-1;
            else l=mid+1;
        } else {
            if(target>arr[mid] && target<=arr[r])
                l=mid+1;
            else r=mid-1;
        }
    }
    return -1;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Searching & Sorting',
    title: 'First and Last Occurrences',
    difficulty: 'Medium',
    description: `Find first and last position of element.`,
    inputExample: 'arr=[1,2,2,2,3], x=2',
    outputExample: '[1,3]',
    explanation: `Use two binary searches.`,
    code: {
      java: `public class Main {
  static int first(int[] arr,int x){
    int l=0,r=arr.length-1,res=-1;
    while(l<=r){
      int m=(l+r)/2;
      if(arr[m]>=x){
        if(arr[m]==x) res=m;
        r=m-1;
      } else l=m+1;
    }
    return res;
  }

  static int last(int[] arr,int x){
    int l=0,r=arr.length-1,res=-1;
    while(l<=r){
      int m=(l+r)/2;
      if(arr[m]<=x){
        if(arr[m]==x) res=m;
        l=m+1;
      } else r=m-1;
    }
    return res;
  }
}`,

      python: `def first(arr,x):
    l,r,res=0,len(arr)-1,-1
    while l<=r:
        m=(l+r)//2
        if arr[m]>=x:
            if arr[m]==x: res=m
            r=m-1
        else: l=m+1
    return res

def last(arr,x):
    l,r,res=0,len(arr)-1,-1
    while l<=r:
        m=(l+r)//2
        if arr[m]<=x:
            if arr[m]==x: res=m
            l=m+1
        else: r=m-1
    return res`,

      c: `// Similar logic as Java`,

      cpp: `// Similar logic as Java`
    }
  },

  {
    subject: 'Code',
    category: 'Searching & Sorting',
    title: 'K-th Element of Two Sorted Arrays',
    difficulty: 'Hard',
    description: `Find the k-th element from two sorted arrays.`,
    inputExample: 'arr1=[2,3,6,7,9], arr2=[1,4,8,10], k=5',
    outputExample: '6',
    explanation: `Binary search on smaller array partition.`,
    code: {
      java: `public class Main {
  public static int kth(int[] A,int[] B,int k){
    int n=A.length,m=B.length;
    if(n>m) return kth(B,A,k);

    int l=Math.max(0,k-m), r=Math.min(k,n);

    while(l<=r){
      int cut1=(l+r)/2;
      int cut2=k-cut1;

      int l1=cut1==0?Integer.MIN_VALUE:A[cut1-1];
      int l2=cut2==0?Integer.MIN_VALUE:B[cut2-1];
      int r1=cut1==n?Integer.MAX_VALUE:A[cut1];
      int r2=cut2==m?Integer.MAX_VALUE:B[cut2];

      if(l1<=r2 && l2<=r1)
        return Math.max(l1,l2);
      else if(l1>r2)
        r=cut1-1;
      else l=cut1+1;
    }
    return -1;
  }
}`,

      python: `def kth(A,B,k):
    if len(A)>len(B):
        return kth(B,A,k)

    n,m=len(A),len(B)
    l,r=max(0,k-m),min(k,n)

    while l<=r:
        cut1=(l+r)//2
        cut2=k-cut1

        l1=A[cut1-1] if cut1>0 else float('-inf')
        l2=B[cut2-1] if cut2>0 else float('-inf')
        r1=A[cut1] if cut1<n else float('inf')
        r2=B[cut2] if cut2<m else float('inf')

        if l1<=r2 and l2<=r1:
            return max(l1,l2)
        elif l1>r2:
            r=cut1-1
        else:
            l=cut1+1`,

      c: `// complex partition logic`,
      cpp: `// same as java`
    }
  },

  {
    subject: 'Code',
    category: 'Searching & Sorting',
    title: 'Allocate Minimum Pages',
    difficulty: 'Hard',
    description: `Allocate books minimizing maximum pages.`,
    inputExample: 'arr=[12,34,67,90], students=2',
    outputExample: '113',
    explanation: `Binary search on answer.`,
    code: {
      java: `public class Main {
  static boolean can(int[] arr,int k,int max){
    int sum=0, count=1;

    for(int x:arr){
      if(sum+x>max){
        count++;
        sum=x;
        if(count>k) return false;
      } else sum+=x;
    }
    return true;
  }

  public static int findPages(int[] arr,int k){
    int l=0,r=0;
    for(int x:arr){
      l=Math.max(l,x);
      r+=x;
    }

    int res=r;
    while(l<=r){
      int mid=(l+r)/2;
      if(can(arr,k,mid)){
        res=mid;
        r=mid-1;
      } else l=mid+1;
    }
    return res;
  }
}`,

      python: `def find_pages(arr,k):
    def can(maxp):
        students=1
        s=0
        for x in arr:
            if s+x>maxp:
                students+=1
                s=x
                if students>k: return False
            else:
                s+=x
        return True

    l,r=max(arr),sum(arr)
    res=r

    while l<=r:
        mid=(l+r)//2
        if can(mid):
            res=mid
            r=mid-1
        else:
            l=mid+1
    return res`,

      c: `// binary search answer`,
      cpp: `// same`
    }
  },

  {
    subject: 'Code',
    category: 'Searching & Sorting',
    title: 'Smallest Number with at Least N Trailing Zeroes in Factorial',
    difficulty: 'Hard',
    description: `Find the smallest number whose factorial contains at least n trailing zeroes.`,
    inputExample: 'n = 6',
    outputExample: '25',
    explanation: `Use binary search with trailing zero formula.`,
    code: {
      java: `public class Main {
  static int countZero(int x){
    int count=0;
    while(x>0){
      x/=5;
      count+=x;
    }
    return count;
  }

  public static int findNum(int n){
    int l=0,r=5*n,res=-1;

    while(l<=r){
      int mid=(l+r)/2;

      if(countZero(mid)>=n){
        res=mid;
        r=mid-1;
      } else l=mid+1;
    }
    return res;
  }
}`,

      python: `def count_zero(x):
    count=0
    while x>0:
        x//=5
        count+=x
    return count

def find_num(n):
    l,r=0,5*n
    res=-1
    while l<=r:
        mid=(l+r)//2
        if count_zero(mid)>=n:
            res=mid
            r=mid-1
        else:
            l=mid+1
    return res`,

      c: `int countZero(int x){
    int count=0;
    while(x){
        x/=5;
        count+=x;
    }
    return count;
}

int findNum(int n){
    int l=0,r=5*n,res=-1;
    while(l<=r){
        int mid=(l+r)/2;
        if(countZero(mid)>=n){
            res=mid;
            r=mid-1;
        } else l=mid+1;
    }
    return res;
}`,

      cpp: `int countZero(int x){
    int count=0;
    while(x){
        x/=5;
        count+=x;
    }
    return count;
}

int findNum(int n){
    int l=0,r=5*n,res=-1;
    while(l<=r){
        int mid=(l+r)/2;
        if(countZero(mid)>=n){
            res=mid;
            r=mid-1;
        } else l=mid+1;
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Searching & Sorting',
    title: 'Capacity To Ship Packages Within D Days',
    difficulty: 'Hard',
    description: `Minimum capacity to ship all packages in D days.`,
    inputExample: 'weights=[1,2,3,4,5], D=3',
    outputExample: '6',
    explanation: `Binary search on capacity.`,
    code: {
      java: `public class Main {
  static boolean can(int[] w,int D,int cap){
    int days=1,sum=0;
    for(int x:w){
      if(sum+x>cap){
        days++;
        sum=x;
        if(days>D) return false;
      } else sum+=x;
    }
    return true;
  }

  public static int shipWithinDays(int[] w,int D){
    int l=0,r=0;
    for(int x:w){
      l=Math.max(l,x);
      r+=x;
    }

    int res=r;
    while(l<=r){
      int mid=(l+r)/2;
      if(can(w,D,mid)){
        res=mid;
        r=mid-1;
      } else l=mid+1;
    }
    return res;
  }
}`,

      python: `def shipWithinDays(w,D):
    def can(cap):
        days=1
        s=0
        for x in w:
            if s+x>cap:
                days+=1
                s=x
                if days>D: return False
            else:
                s+=x
        return True

    l=max(w)
    r=sum(w)
    res=r

    while l<=r:
        mid=(l+r)//2
        if can(mid):
            res=mid
            r=mid-1
        else:
            l=mid+1
    return res`,

      c: `// binary search answer`,
      cpp: `// binary search answer`
    }
  },
   {
    subject: 'Code',
    category: 'Searching & Sorting',
    title: 'Selection Sort',
    difficulty: 'Easy',
    description: `Select minimum and swap.`,
    inputExample: '[64,25,12,22,11]',
    outputExample: '[11,12,22,25,64]',
    explanation: `Find min in remaining array and swap.`,
    code: {
      java: `class Main{
  static void selectionSort(int[] arr){
    int n=arr.length;

    for(int i=0;i<n-1;i++){
      int min=i;

      for(int j=i+1;j<n;j++){
        if(arr[j]<arr[min])
          min=j;
      }

      int temp=arr[i];
      arr[i]=arr[min];
      arr[min]=temp;
    }
  }
}`,

      python: `def selectionSort(arr):
    n=len(arr)

    for i in range(n-1):
        min_idx=i

        for j in range(i+1,n):
            if arr[j]<arr[min_idx]:
                min_idx=j

        arr[i],arr[min_idx]=arr[min_idx],arr[i]

    return arr`,

      c: `// selection sort`,
      cpp: `void selectionSort(vector<int>& arr){
    int n=arr.size();

    for(int i=0;i<n-1;i++){
        int minIdx=i;

        for(int j=i+1;j<n;j++){
            if(arr[j]<arr[minIdx])
                minIdx=j;
        }

        swap(arr[i],arr[minIdx]);
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Searching & Sorting',
    title: 'Bubble Sort',
    difficulty: 'Easy',
    description: `Swap adjacent if out of order.`,
    inputExample: '[5,1,4,2,8]',
    outputExample: '[1,2,4,5,8]',
    explanation: `Largest element bubbles to end.`,
    code: {
      java: `class Main{
  static void bubbleSort(int[] arr){
    int n=arr.length;

    for(int i=0;i<n-1;i++){
      boolean swapped=false;

      for(int j=0;j<n-i-1;j++){
        if(arr[j]>arr[j+1]){
          int temp=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=temp;
          swapped=true;
        }
      }

      if(!swapped) break;
    }
  }
}`,

      python: `def bubbleSort(arr):
    n=len(arr)

    for i in range(n-1):
        swapped=False

        for j in range(n-i-1):
            if arr[j]>arr[j+1]:
                arr[j],arr[j+1]=arr[j+1],arr[j]
                swapped=True

        if not swapped:
            break

    return arr`,

      c: `// bubble sort`,
      cpp: `void bubbleSort(vector<int>& arr){
    int n=arr.size();

    for(int i=0;i<n-1;i++){
        bool swapped=false;

        for(int j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr[j],arr[j+1]);
                swapped=true;
            }
        }

        if(!swapped) break;
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Searching & Sorting',
    title: 'Insertion Sort',
    difficulty: 'Easy',
    description: `Insert element in sorted part.`,
    inputExample: '[12,11,13,5,6]',
    outputExample: '[5,6,11,12,13]',
    explanation: `Build sorted array one element at a time.`,
    code: {
      java: `class Main{
  static void insertionSort(int[] arr){
    int n=arr.length;

    for(int i=1;i<n;i++){
      int key=arr[i];
      int j=i-1;

      while(j>=0 && arr[j]>key){
        arr[j+1]=arr[j];
        j--;
      }

      arr[j+1]=key;
    }
  }
}`,

      python: `def insertionSort(arr):
    n=len(arr)

    for i in range(1,n):
        key=arr[i]
        j=i-1

        while j>=0 and arr[j]>key:
            arr[j+1]=arr[j]
            j-=1

        arr[j+1]=key

    return arr`,

      c: `// insertion sort`,
      cpp: `void insertionSort(vector<int>& arr){
    int n=arr.size();

    for(int i=1;i<n;i++){
        int key=arr[i];
        int j=i-1;

        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }

        arr[j+1]=key;
    }
}`
    }
  },
   {
    subject: 'Code',
    category: 'Searching & Sorting',
    title: 'Merge Sort',
    difficulty: 'Medium',
    description: `Divide and merge sorted halves.`,
    inputExample: '[5,2,3,1]',
    outputExample: '[1,2,3,5]',
    explanation: `Divide array → sort halves → merge.`,
    code: {
      java: `class Main{
  static void mergeSort(int[] arr,int l,int r){
    if(l>=r) return;

    int mid=(l+r)/2;
    mergeSort(arr,l,mid);
    mergeSort(arr,mid+1,r);
    merge(arr,l,mid,r);
  }

  static void merge(int[] arr,int l,int m,int r){
    int[] temp=new int[r-l+1];
    int i=l,j=m+1,k=0;

    while(i<=m && j<=r){
      if(arr[i]<=arr[j]) temp[k++]=arr[i++];
      else temp[k++]=arr[j++];
    }

    while(i<=m) temp[k++]=arr[i++];
    while(j<=r) temp[k++]=arr[j++];

    for(int x=0;x<temp.length;x++)
      arr[l+x]=temp[x];
  }
}`,

      python: `def mergeSort(arr):
    if len(arr)<=1:
        return arr

    mid=len(arr)//2
    left=mergeSort(arr[:mid])
    right=mergeSort(arr[mid:])

    return merge(left,right)

def merge(l,r):
    res=[]
    i=j=0

    while i<len(l) and j<len(r):
        if l[i]<=r[j]:
            res.append(l[i]); i+=1
        else:
            res.append(r[j]); j+=1

    res.extend(l[i:])
    res.extend(r[j:])
    return res`,

      c: `// merge sort`,
      cpp: `void merge(vector<int>& arr,int l,int m,int r){
    vector<int> temp;
    int i=l,j=m+1;

    while(i<=m && j<=r){
        if(arr[i]<=arr[j]) temp.push_back(arr[i++]);
        else temp.push_back(arr[j++]);
    }

    while(i<=m) temp.push_back(arr[i++]);
    while(j<=r) temp.push_back(arr[j++]);

    for(int k=0;k<temp.size();k++)
        arr[l+k]=temp[k];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Searching & Sorting',
    title: 'Recursive Bubble Sort',
    difficulty: 'Easy',
    description: `Bubble sort using recursion.`,
    inputExample: '[5,1,4]',
    outputExample: '[1,4,5]',
    explanation: `Push largest to end each recursion.`,
    code: {
      java: `class Main{
  static void bubble(int[] arr,int n){
    if(n==1) return;

    for(int i=0;i<n-1;i++){
      if(arr[i]>arr[i+1]){
        int temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
      }
    }
    bubble(arr,n-1);
  }
}`,

      python: `def bubble(arr,n):
    if n==1:
        return arr

    for i in range(n-1):
        if arr[i]>arr[i+1]:
            arr[i],arr[i+1]=arr[i+1],arr[i]

    return bubble(arr,n-1)`,

      c: `// recursive bubble`,
      cpp: `void bubble(vector<int>& arr,int n){
    if(n==1) return;

    for(int i=0;i<n-1;i++){
        if(arr[i]>arr[i+1])
            swap(arr[i],arr[i+1]);
    }
    bubble(arr,n-1);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Searching & Sorting',
    title: 'Recursive Insertion Sort',
    difficulty: 'Easy',
    description: `Insertion sort using recursion.`,
    inputExample: '[12,11,13]',
    outputExample: '[11,12,13]',
    explanation: `Sort n-1 then insert nth.`,
    code: {
      java: `class Main{
  static void insertion(int[] arr,int n){
    if(n<=1) return;

    insertion(arr,n-1);

    int last=arr[n-1];
    int j=n-2;

    while(j>=0 && arr[j]>last){
      arr[j+1]=arr[j];
      j--;
    }
    arr[j+1]=last;
  }
}`,

      python: `def insertion(arr,n):
    if n<=1:
        return arr

    insertion(arr,n-1)

    last=arr[n-1]
    j=n-2

    while j>=0 and arr[j]>last:
        arr[j+1]=arr[j]
        j-=1

    arr[j+1]=last
    return arr`,

      c: `// recursive insertion`,
      cpp: `void insertion(vector<int>& arr,int n){
    if(n<=1) return;

    insertion(arr,n-1);

    int last=arr[n-1];
    int j=n-2;

    while(j>=0 && arr[j]>last){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=last;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Searching & Sorting',
    title: 'Quick Sort',
    difficulty: 'Medium',
    description: `Partition and sort.`,
    inputExample: '[10,7,8,9,1,5]',
    outputExample: '[1,5,7,8,9,10]',
    explanation: `Choose pivot → partition → recurse.`,
    code: {
      java: `class Main{
  static void quick(int[] arr,int low,int high){
    if(low<high){
      int pi=partition(arr,low,high);
      quick(arr,low,pi-1);
      quick(arr,pi+1,high);
    }
  }

  static int partition(int[] arr,int low,int high){
    int pivot=arr[high];
    int i=low-1;

    for(int j=low;j<high;j++){
      if(arr[j]<pivot){
        i++;
        int temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }

    int temp=arr[i+1];
    arr[i+1]=arr[high];
    arr[high]=temp;

    return i+1;
  }
}`,

      python: `def quick(arr,low,high):
    if low<high:
        pi=partition(arr,low,high)
        quick(arr,low,pi-1)
        quick(arr,pi+1,high)

def partition(arr,low,high):
    pivot=arr[high]
    i=low-1

    for j in range(low,high):
        if arr[j]<pivot:
            i+=1
            arr[i],arr[j]=arr[j],arr[i]

    arr[i+1],arr[high]=arr[high],arr[i+1]
    return i+1`,

      c: `// quick sort`,
      cpp: `int partition(vector<int>& arr,int low,int high){
    int pivot=arr[high];
    int i=low-1;

    for(int j=low;j<high;j++){
        if(arr[j]<pivot){
            i++;
            swap(arr[i],arr[j]);
        }
    }

    swap(arr[i+1],arr[high]);
    return i+1;
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
        console.log(`Successfully processed ${problems.length} problems for Searching & Sorting`)
        
        await mongoose.disconnect()
        process.exit(0)
    } catch (error) {
        console.error('Seed failed:', error)
        process.exit(1)
    }
}

seed()
