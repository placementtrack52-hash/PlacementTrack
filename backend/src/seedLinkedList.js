import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'
import { fileURLToPath } from 'url'

export const problems = [
 {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Reverse Linked List',
    difficulty: 'Easy',
    description: `Reverse a singly linked list.`,
    inputExample: '1->2->3->4',
    outputExample: '4->3->2->1',
    explanation: `Iterative pointer reversal.`,
    code: {
      java: `class Main{
  static Node reverse(Node head){
    Node prev=null, curr=head;

    while(curr!=null){
      Node next=curr.next;
      curr.next=prev;
      prev=curr;
      curr=next;
    }
    return prev;
  }
}`,

      python: `def reverse(head):
    prev=None
    curr=head

    while curr:
        nxt=curr.next
        curr.next=prev
        prev=curr
        curr=nxt

    return prev`,

      c: `// pointer reverse`,
      cpp: `Node* reverse(Node* head){
    Node* prev=NULL;
    Node* curr=head;

    while(curr){
        Node* nxt=curr->next;
        curr->next=prev;
        prev=curr;
        curr=nxt;
    }
    return prev;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Reorder List',
    difficulty: 'Medium',
    description: `Reorder L0→Ln→L1→Ln-1...`,
    inputExample: '1->2->3->4',
    outputExample: '1->4->2->3',
    explanation: `Find middle → reverse → merge.`,
    code: {
      java: `class Main{
  static void reorder(Node head){
    if(head==null||head.next==null) return;

    Node slow=head, fast=head;
    while(fast.next!=null && fast.next.next!=null){
      slow=slow.next;
      fast=fast.next.next;
    }

    Node second=reverse(slow.next);
    slow.next=null;

    Node first=head;

    while(second!=null){
      Node t1=first.next;
      Node t2=second.next;

      first.next=second;
      second.next=t1;

      first=t1;
      second=t2;
    }
  }
}`,

      python: `def reorder(head):
    if not head or not head.next:
        return

    slow=fast=head
    while fast.next and fast.next.next:
        slow=slow.next
        fast=fast.next.next

    second=reverse(slow.next)
    slow.next=None

    first=head
    while second:
        t1=first.next
        t2=second.next

        first.next=second
        second.next=t1

        first=t1
        second=t2`,

      c: `// split + reverse`,
      cpp: `void reorder(Node* head){
    if(!head||!head->next) return;

    Node* slow=head;
    Node* fast=head;

    while(fast->next && fast->next->next){
        slow=slow->next;
        fast=fast->next->next;
    }

    Node* second=reverse(slow->next);
    slow->next=NULL;

    Node* first=head;

    while(second){
        Node* t1=first->next;
        Node* t2=second->next;

        first->next=second;
        second->next=t1;

        first=t1;
        second=t2;
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    description: `Merge two sorted linked lists.`,
    inputExample: '1->3 , 2->4',
    outputExample: '1->2->3->4',
    explanation: `Use dummy node.`,
    code: {
      java: `class Main{
  static Node merge(Node l1,Node l2){
    Node dummy=new Node(0);
    Node cur=dummy;

    while(l1!=null && l2!=null){
      if(l1.val<l2.val){
        cur.next=l1;
        l1=l1.next;
      }else{
        cur.next=l2;
        l2=l2.next;
      }
      cur=cur.next;
    }

    cur.next=(l1!=null)?l1:l2;
    return dummy.next;
  }
}`,

      python: `def merge(l1,l2):
    dummy=Node(0)
    cur=dummy

    while l1 and l2:
        if l1.val<l2.val:
            cur.next=l1
            l1=l1.next
        else:
            cur.next=l2
            l2=l2.next
        cur=cur.next

    cur.next=l1 if l1 else l2
    return dummy.next`,

      c: `// merge`,
      cpp: `Node* merge(Node* l1,Node* l2){
    Node* dummy=new Node(0);
    Node* cur=dummy;

    while(l1 && l2){
        if(l1->val<l2->val){
            cur->next=l1;
            l1=l1->next;
        }else{
            cur->next=l2;
            l2=l2->next;
        }
        cur=cur->next;
    }

    cur->next=l1?l1:l2;
    return dummy->next;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Remove Nth Node From End',
    difficulty: 'Medium',
    description: `Remove nth node from end.`,
    inputExample: '1->2->3->4, n=2',
    outputExample: '1->2->4',
    explanation: `Two pointer gap method.`,
    code: {
      java: `class Main{
  static Node remove(Node head,int n){
    Node dummy=new Node(0);
    dummy.next=head;

    Node slow=dummy, fast=dummy;

    for(int i=0;i<=n;i++)
      fast=fast.next;

    while(fast!=null){
      slow=slow.next;
      fast=fast.next;
    }

    slow.next=slow.next.next;
    return dummy.next;
  }
}`,

      python: `def removeNth(head,n):
    dummy=Node(0)
    dummy.next=head

    slow=fast=dummy

    for _ in range(n+1):
        fast=fast.next

    while fast:
        slow=slow.next
        fast=fast.next

    slow.next=slow.next.next
    return dummy.next`,

      c: `// two pointers`,
      cpp: `Node* remove(Node* head,int n){
    Node* dummy=new Node(0);
    dummy->next=head;

    Node* slow=dummy;
    Node* fast=dummy;

    for(int i=0;i<=n;i++)
        fast=fast->next;

    while(fast){
        slow=slow->next;
        fast=fast->next;
    }

    slow->next=slow->next->next;
    return dummy->next;
}`
    }
  },
   {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Copy List with Random Pointer',
    difficulty: 'Hard',
    description: `Deep copy a list with next + random pointers.`,
    inputExample: '1->2->3 with random links',
    outputExample: 'deep copied list',
    explanation: `Interweaving technique (no extra space).`,
    code: {
      java: `class Main{
  static Node copy(Node head){
    if(head==null) return null;

    Node cur=head;

    // step1: clone nodes
    while(cur!=null){
      Node nxt=cur.next;
      cur.next=new Node(cur.val);
      cur.next.next=nxt;
      cur=nxt;
    }

    // step2: random pointers
    cur=head;
    while(cur!=null){
      if(cur.random!=null)
        cur.next.random=cur.random.next;
      cur=cur.next.next;
    }

    // step3: separate
    cur=head;
    Node newHead=head.next;

    while(cur!=null){
      Node copy=cur.next;
      cur.next=copy.next;
      if(copy.next!=null)
        copy.next=copy.next.next;
      cur=cur.next;
    }

    return newHead;
  }
}`,

      python: `def copyRandom(head):
    if not head:
        return None

    cur=head

    # step1
    while cur:
        nxt=cur.next
        cur.next=Node(cur.val)
        cur.next.next=nxt
        cur=nxt

    # step2
    cur=head
    while cur:
        if cur.random:
            cur.next.random=cur.random.next
        cur=cur.next.next

    # step3
    cur=head
    newHead=head.next

    while cur:
        copy=cur.next
        cur.next=copy.next
        if copy.next:
            copy.next=copy.next.next
        cur=cur.next

    return newHead`,

      c: `// interweaving`,
      cpp: `Node* copy(Node* head){
    if(!head) return NULL;

    Node* cur=head;

    while(cur){
        Node* nxt=cur->next;
        cur->next=new Node(cur->val);
        cur->next->next=nxt;
        cur=nxt;
    }

    cur=head;
    while(cur){
        if(cur->random)
            cur->next->random=cur->random->next;
        cur=cur->next->next;
    }

    cur=head;
    Node* newHead=head->next;

    while(cur){
        Node* copy=cur->next;
        cur->next=copy->next;
        if(copy->next)
            copy->next=copy->next->next;
        cur=cur->next;
    }

    return newHead;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    description: `Add numbers represented as linked lists.`,
    inputExample: '2->4->3 + 5->6->4',
    outputExample: '7->0->8',
    explanation: `Simulate addition with carry.`,
    code: {
      java: `class Main{
  static Node add(Node l1,Node l2){
    Node dummy=new Node(0);
    Node cur=dummy;
    int carry=0;

    while(l1!=null || l2!=null || carry!=0){
      int sum=carry;

      if(l1!=null){ sum+=l1.val; l1=l1.next; }
      if(l2!=null){ sum+=l2.val; l2=l2.next; }

      cur.next=new Node(sum%10);
      carry=sum/10;
      cur=cur.next;
    }
    return dummy.next;
  }
}`,

      python: `def add(l1,l2):
    dummy=Node(0)
    cur=dummy
    carry=0

    while l1 or l2 or carry:
        s=carry
        if l1:
            s+=l1.val
            l1=l1.next
        if l2:
            s+=l2.val
            l2=l2.next

        cur.next=Node(s%10)
        carry=s//10
        cur=cur.next

    return dummy.next`,

      c: `// carry`,
      cpp: `Node* add(Node* l1,Node* l2){
    Node* dummy=new Node(0);
    Node* cur=dummy;
    int carry=0;

    while(l1 || l2 || carry){
        int sum=carry;

        if(l1){ sum+=l1->val; l1=l1->next; }
        if(l2){ sum+=l2->val; l2=l2->next; }

        cur->next=new Node(sum%10);
        carry=sum/10;
        cur=cur->next;
    }
    return dummy->next;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Linked List Cycle',
    difficulty: 'Easy',
    description: `Detect cycle in list.`,
    inputExample: 'linked list',
    outputExample: 'true/false',
    explanation: `Floyd’s cycle detection.`,
    code: {
      java: `class Main{
  static boolean hasCycle(Node head){
    Node slow=head, fast=head;

    while(fast!=null && fast.next!=null){
      slow=slow.next;
      fast=fast.next.next;

      if(slow==fast) return true;
    }
    return false;
  }
}`,

      python: `def hasCycle(head):
    slow=fast=head

    while fast and fast.next:
        slow=slow.next
        fast=fast.next.next

        if slow==fast:
            return True
    return False`,

      c: `// fast slow`,
      cpp: `bool hasCycle(Node* head){
    Node* slow=head;
    Node* fast=head;

    while(fast && fast->next){
        slow=slow->next;
        fast=fast->next->next;

        if(slow==fast) return true;
    }
    return false;
}`
    }
  },

    {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Find the Duplicate Number',
    difficulty: 'Medium',
    description: `Find duplicate in array (1…n).`,
    inputExample: '[1,3,4,2,2]',
    outputExample: '2',
    explanation: `Floyd cycle detection (treat array as linked list).`,
    code: {
      java: `class Main{
  static int find(int[] nums){
    int slow=nums[0], fast=nums[0];

    do{
      slow=nums[slow];
      fast=nums[nums[fast]];
    }while(slow!=fast);

    slow=nums[0];

    while(slow!=fast){
      slow=nums[slow];
      fast=nums[fast];
    }
    return slow;
  }
}`,

      python: `def findDuplicate(nums):
    slow=fast=nums[0]

    while True:
        slow=nums[slow]
        fast=nums[nums[fast]]
        if slow==fast:
            break

    slow=nums[0]
    while slow!=fast:
        slow=nums[slow]
        fast=nums[fast]

    return slow`,

      c: `// cycle trick`,
      cpp: `int findDuplicate(vector<int>& nums){
    int slow=nums[0], fast=nums[0];

    do{
        slow=nums[slow];
        fast=nums[nums[fast]];
    }while(slow!=fast);

    slow=nums[0];
    while(slow!=fast){
        slow=nums[slow];
        fast=nums[fast];
    }
    return slow;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Merge K Sorted Lists',
    difficulty: 'Hard',
    description: `Merge k sorted linked lists.`,
    inputExample: '[list1, list2, list3]',
    outputExample: 'merged list',
    explanation: `Use min heap.`,
    code: {
      java: `class Main{
  static Node mergeK(Node[] lists){
    PriorityQueue<Node> pq=new PriorityQueue<>((a,b)->a.val-b.val);

    for(Node n:lists)
      if(n!=null) pq.add(n);

    Node dummy=new Node(0), cur=dummy;

    while(!pq.isEmpty()){
      Node node=pq.poll();
      cur.next=node;
      cur=cur.next;

      if(node.next!=null)
        pq.add(node.next);
    }
    return dummy.next;
  }
}`,

      python: `import heapq

def mergeK(lists):
    heap=[]
    for i,l in enumerate(lists):
        if l:
            heapq.heappush(heap,(l.val,i,l))

    dummy=Node(0)
    cur=dummy

    while heap:
        val,i,node=heapq.heappop(heap)
        cur.next=node
        cur=cur.next

        if node.next:
            heapq.heappush(heap,(node.next.val,i,node.next))

    return dummy.next`,

      c: `// heap`,
      cpp: `struct cmp{
    bool operator()(Node* a,Node* b){
        return a->val>b->val;
    }
};

Node* mergeK(vector<Node*>& lists){
    priority_queue<Node*,vector<Node*>,cmp> pq;

    for(auto l:lists)
        if(l) pq.push(l);

    Node* dummy=new Node(0);
    Node* cur=dummy;

    while(!pq.empty()){
        Node* node=pq.top(); pq.pop();
        cur->next=node;
        cur=cur->next;

        if(node->next)
            pq.push(node->next);
    }
    return dummy->next;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Reverse Nodes in k-Group',
    difficulty: 'Hard',
    description: `Reverse every k nodes.`,
    inputExample: '1->2->3->4->5, k=2',
    outputExample: '2->1->4->3->5',
    explanation: `Reverse k nodes at a time.`,
    code: {
      java: `class Main{
  static Node reverseK(Node head,int k){
    Node cur=head;
    int count=0;

    while(cur!=null && count<k){
      cur=cur.next;
      count++;
    }

    if(count==k){
      Node prev=null, curr=head;

      for(int i=0;i<k;i++){
        Node nxt=curr.next;
        curr.next=prev;
        prev=curr;
        curr=nxt;
      }

      head.next=reverseK(curr,k);
      return prev;
    }
    return head;
  }
}`,

      python: `def reverseK(head,k):
    cur=head
    count=0

    while cur and count<k:
        cur=cur.next
        count+=1

    if count==k:
        prev=None
        curr=head

        for _ in range(k):
            nxt=curr.next
            curr.next=prev
            prev=curr
            curr=nxt

        head.next=reverseK(curr,k)
        return prev

    return head`,

      c: `// k reverse`,
      cpp: `Node* reverseK(Node* head,int k){
    Node* cur=head;
    int count=0;

    while(cur && count<k){
        cur=cur->next;
        count++;
    }

    if(count==k){
        Node* prev=NULL;
        Node* curr=head;

        for(int i=0;i<k;i++){
            Node* nxt=curr->next;
            curr->next=prev;
            prev=curr;
            curr=nxt;
        }

        head->next=reverseK(curr,k);
        return prev;
    }
    return head;
}`
    }
  },
  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Middle of a Linked List (Tortoise-Hare)',
    difficulty: 'Easy',
    description: `Find middle node.`,
    inputExample: '1->2->3->4->5',
    outputExample: '3',
    explanation: `Slow moves 1 step, fast moves 2.`,
    code: {
      java: `class Main{
  static Node middle(Node head){
    Node slow=head, fast=head;

    while(fast!=null && fast.next!=null){
      slow=slow.next;
      fast=fast.next.next;
    }
    return slow;
  }
}`,

      python: `def middle(head):
    slow=fast=head

    while fast and fast.next:
        slow=slow.next
        fast=fast.next.next

    return slow`,

      c: `// slow fast`,
      cpp: `Node* middle(Node* head){
    Node* slow=head;
    Node* fast=head;

    while(fast && fast->next){
        slow=slow->next;
        fast=fast->next->next;
    }
    return slow;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Reverse Linked List (Iterative)',
    difficulty: 'Easy',
    description: `Reverse list iteratively.`,
    inputExample: '1->2->3',
    outputExample: '3->2->1',
    explanation: `Use prev, curr, next pointers.`,
    code: {
      java: `class Main{
  static Node reverse(Node head){
    Node prev=null, curr=head;

    while(curr!=null){
      Node next=curr.next;
      curr.next=prev;
      prev=curr;
      curr=next;
    }
    return prev;
  }
}`,

      python: `def reverse(head):
    prev=None
    curr=head

    while curr:
        nxt=curr.next
        curr.next=prev
        prev=curr
        curr=nxt

    return prev`,

      c: `// iterative reverse`,
      cpp: `Node* reverse(Node* head){
    Node* prev=NULL;
    Node* curr=head;

    while(curr){
        Node* nxt=curr->next;
        curr->next=prev;
        prev=curr;
        curr=nxt;
    }
    return prev;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Reverse Linked List (Recursive)',
    difficulty: 'Medium',
    description: `Reverse using recursion.`,
    inputExample: '1->2->3',
    outputExample: '3->2->1',
    explanation: `Reverse rest and fix current.`,
    code: {
      java: `class Main{
  static Node reverse(Node head){
    if(head==null || head.next==null)
      return head;

    Node newHead=reverse(head.next);

    head.next.next=head;
    head.next=null;

    return newHead;
  }
}`,

      python: `def reverse(head):
    if not head or not head.next:
        return head

    newHead=reverse(head.next)

    head.next.next=head
    head.next=None

    return newHead`,

      c: `// recursion`,
      cpp: `Node* reverse(Node* head){
    if(!head || !head->next)
        return head;

    Node* newHead=reverse(head->next);

    head->next->next=head;
    head->next=NULL;

    return newHead;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Detect Loop in Linked List',
    difficulty: 'Easy',
    description: `Check if cycle exists.`,
    inputExample: 'linked list',
    outputExample: 'true/false',
    explanation: `Floyd’s cycle detection.`,
    code: {
      java: `class Main{
  static boolean hasCycle(Node head){
    Node slow=head, fast=head;

    while(fast!=null && fast.next!=null){
      slow=slow.next;
      fast=fast.next.next;

      if(slow==fast) return true;
    }
    return false;
  }
}`,

      python: `def hasCycle(head):
    slow=fast=head

    while fast and fast.next:
        slow=slow.next
        fast=fast.next.next

        if slow==fast:
            return True
    return False`,

      c: `// cycle`,
      cpp: `bool hasCycle(Node* head){
    Node* slow=head;
    Node* fast=head;

    while(fast && fast->next){
        slow=slow->next;
        fast=fast->next->next;

        if(slow==fast) return true;
    }
    return false;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Find Starting Point of Loop',
    difficulty: 'Medium',
    description: `Return node where cycle begins.`,
    inputExample: 'linked list with loop',
    outputExample: 'start node',
    explanation: `After meeting, reset one pointer to head.`,
    code: {
      java: `class Main{
  static Node start(Node head){
    Node slow=head, fast=head;

    while(fast!=null && fast.next!=null){
      slow=slow.next;
      fast=fast.next.next;

      if(slow==fast){
        slow=head;

        while(slow!=fast){
          slow=slow.next;
          fast=fast.next;
        }
        return slow;
      }
    }
    return null;
  }
}`,

      python: `def cycleStart(head):
    slow=fast=head

    while fast and fast.next:
        slow=slow.next
        fast=fast.next.next

        if slow==fast:
            slow=head
            while slow!=fast:
                slow=slow.next
                fast=fast.next
            return slow
    return None`,

      c: `// cycle start`,
      cpp: `Node* cycleStart(Node* head){
    Node* slow=head;
    Node* fast=head;

    while(fast && fast->next){
        slow=slow->next;
        fast=fast->next->next;

        if(slow==fast){
            slow=head;
            while(slow!=fast){
                slow=slow->next;
                fast=fast->next;
            }
            return slow;
        }
    }
    return NULL;
}`
    }
  },
    {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Length of Loop in Linked List',
    difficulty: 'Medium',
    description: `Return length of cycle if present.`,
    inputExample: 'linked list with loop',
    outputExample: 'cycle length',
    explanation: `After detecting cycle, count nodes.`,
    code: {
      java: `class Main{
  static int loopLength(Node head){
    Node slow=head, fast=head;

    while(fast!=null && fast.next!=null){
      slow=slow.next;
      fast=fast.next.next;

      if(slow==fast){
        int count=1;
        fast=fast.next;

        while(fast!=slow){
          count++;
          fast=fast.next;
        }
        return count;
      }
    }
    return 0;
  }
}`,

      python: `def loopLength(head):
    slow=fast=head

    while fast and fast.next:
        slow=slow.next
        fast=fast.next.next

        if slow==fast:
            count=1
            fast=fast.next
            while fast!=slow:
                count+=1
                fast=fast.next
            return count
    return 0`,

      c: `// count cycle`,
      cpp: `int loopLength(Node* head){
    Node* slow=head;
    Node* fast=head;

    while(fast && fast->next){
        slow=slow->next;
        fast=fast->next->next;

        if(slow==fast){
            int count=1;
            fast=fast->next;

            while(fast!=slow){
                count++;
                fast=fast->next;
            }
            return count;
        }
    }
    return 0;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Check Palindrome Linked List',
    difficulty: 'Easy',
    description: `Check if list is palindrome.`,
    inputExample: '1->2->2->1',
    outputExample: 'true',
    explanation: `Find mid → reverse second half → compare.`,
    code: {
      java: `class Main{
  static boolean isPal(Node head){
    Node slow=head, fast=head;

    while(fast!=null && fast.next!=null){
      slow=slow.next;
      fast=fast.next.next;
    }

    Node second=reverse(slow);

    while(second!=null){
      if(head.val!=second.val) return false;
      head=head.next;
      second=second.next;
    }
    return true;
  }
}`,

      python: `def isPalindrome(head):
    slow=fast=head

    while fast and fast.next:
        slow=slow.next
        fast=fast.next.next

    second=reverse(slow)

    while second:
        if head.val!=second.val:
            return False
        head=head.next
        second=second.next

    return True`,

      c: `// reverse compare`,
      cpp: `bool isPalindrome(Node* head){
    Node* slow=head;
    Node* fast=head;

    while(fast && fast->next){
        slow=slow->next;
        fast=fast->next->next;
    }

    Node* second=reverse(slow);

    while(second){
        if(head->val!=second->val) return false;
        head=head->next;
        second=second->next;
    }
    return true;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Segregate Odd and Even Nodes',
    difficulty: 'Medium',
    description: `Group odd index nodes then even.`,
    inputExample: '1->2->3->4->5',
    outputExample: '1->3->5->2->4',
    explanation: `Maintain two pointers.`,
    code: {
      java: `class Main{
  static Node oddEven(Node head){
    if(head==null) return null;

    Node odd=head, even=head.next, evenHead=even;

    while(even!=null && even.next!=null){
      odd.next=even.next;
      odd=odd.next;

      even.next=odd.next;
      even=even.next;
    }

    odd.next=evenHead;
    return head;
  }
}`,

      python: `def oddEven(head):
    if not head:
        return head

    odd=head
    even=head.next
    evenHead=even

    while even and even.next:
        odd.next=even.next
        odd=odd.next

        even.next=odd.next
        even=even.next

    odd.next=evenHead
    return head`,

      c: `// odd even`,
      cpp: `Node* oddEven(Node* head){
    if(!head) return head;

    Node* odd=head;
    Node* even=head->next;
    Node* evenHead=even;

    while(even && even->next){
        odd->next=even->next;
        odd=odd->next;

        even->next=odd->next;
        even=even->next;
    }

    odd->next=evenHead;
    return head;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Delete Middle Node',
    difficulty: 'Easy',
    description: `Delete middle node.`,
    inputExample: '1->2->3->4->5',
    outputExample: '1->2->4->5',
    explanation: `Find middle using slow-fast.`,
    code: {
      java: `class Main{
  static Node deleteMid(Node head){
    if(head==null || head.next==null) return null;

    Node slow=head, fast=head, prev=null;

    while(fast!=null && fast.next!=null){
      prev=slow;
      slow=slow.next;
      fast=fast.next.next;
    }

    prev.next=slow.next;
    return head;
  }
}`,

      python: `def deleteMiddle(head):
    if not head or not head.next:
        return None

    slow=fast=head
    prev=None

    while fast and fast.next:
        prev=slow
        slow=slow.next
        fast=fast.next.next

    prev.next=slow.next
    return head`,

      c: `// delete mid`,
      cpp: `Node* deleteMid(Node* head){
    if(!head || !head->next) return NULL;

    Node* slow=head;
    Node* fast=head;
    Node* prev=NULL;

    while(fast && fast->next){
        prev=slow;
        slow=slow->next;
        fast=fast->next->next;
    }

    prev->next=slow->next;
    return head;
}`
    }
  },
   {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Sort Linked List (Merge Sort)',
    difficulty: 'Medium',
    description: `Sort linked list in O(n log n).`,
    inputExample: '4->2->1->3',
    outputExample: '1->2->3->4',
    explanation: `Use merge sort (split + merge).`,
    code: {
      java: `class Main{
  static Node sort(Node head){
    if(head==null || head.next==null) return head;

    Node mid=getMid(head);
    Node right=mid.next;
    mid.next=null;

    Node left=sort(head);
    right=sort(right);

    return merge(left,right);
  }

  static Node getMid(Node head){
    Node slow=head, fast=head.next;
    while(fast!=null && fast.next!=null){
      slow=slow.next;
      fast=fast.next.next;
    }
    return slow;
  }
}`,

      python: `def sortList(head):
    if not head or not head.next:
        return head

    slow,fast=head,head.next
    while fast and fast.next:
        slow=slow.next
        fast=fast.next.next

    mid=slow.next
    slow.next=None

    left=sortList(head)
    right=sortList(mid)

    return merge(left,right)`,

      c: `// merge sort`,
      cpp: `Node* sortList(Node* head){
    if(!head || !head->next) return head;

    Node* slow=head;
    Node* fast=head->next;

    while(fast && fast->next){
        slow=slow->next;
        fast=fast->next->next;
    }

    Node* mid=slow->next;
    slow->next=NULL;

    Node* left=sortList(head);
    Node* right=sortList(mid);

    return merge(left,right);
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Sort 0s, 1s and 2s by Changing Links',
    difficulty: 'Medium',
    description: `Sort list of 0,1,2 without counting.`,
    inputExample: '1->0->2->1',
    outputExample: '0->1->1->2',
    explanation: `Use 3 dummy lists.`,
    code: {
      java: `class Main{
  static Node sort012(Node head){
    Node zero=new Node(0), one=new Node(0), two=new Node(0);
    Node z=zero, o=one, t=two;

    Node cur=head;

    while(cur!=null){
      if(cur.val==0){ z.next=cur; z=z.next; }
      else if(cur.val==1){ o.next=cur; o=o.next; }
      else{ t.next=cur; t=t.next; }
      cur=cur.next;
    }

    t.next=null;
    o.next=two.next;
    z.next=one.next;

    return zero.next;
  }
}`,

      python: `def sort012(head):
    zero=Node(0); one=Node(0); two=Node(0)
    z,o,t=zero,one,two

    cur=head
    while cur:
        if cur.val==0:
            z.next=cur; z=z.next
        elif cur.val==1:
            o.next=cur; o=o.next
        else:
            t.next=cur; t=t.next
        cur=cur.next

    t.next=None
    o.next=two.next
    z.next=one.next

    return zero.next`,

      c: `// 3 lists`,
      cpp: `Node* sort012(Node* head){
    Node zero(0), one(0), two(0);
    Node* z=&zero; Node* o=&one; Node* t=&two;

    Node* cur=head;

    while(cur){
        if(cur->val==0){ z->next=cur; z=z->next; }
        else if(cur->val==1){ o->next=cur; o=o->next; }
        else{ t->next=cur; t=t->next; }
        cur=cur->next;
    }

    t->next=NULL;
    o->next=two.next;
    z->next=one.next;

    return zero.next;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Intersection Point of Two Linked Lists',
    difficulty: 'Medium',
    description: `Find node where two lists intersect.`,
    inputExample: 'listA, listB',
    outputExample: 'intersection node',
    explanation: `Two pointer switching trick.`,
    code: {
      java: `class Main{
  static Node intersect(Node a,Node b){
    Node p=a, q=b;

    while(p!=q){
      p=(p==null)?b:p.next;
      q=(q==null)?a:q.next;
    }
    return p;
  }
}`,

      python: `def intersect(a,b):
    p,q=a,b

    while p!=q:
        p = b if not p else p.next
        q = a if not q else q.next

    return p`,

      c: `// switch pointers`,
      cpp: `Node* intersect(Node* a,Node* b){
    Node* p=a;
    Node* q=b;

    while(p!=q){
        p = p ? p->next : b;
        q = q ? q->next : a;
    }
    return p;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Add 1 to Number Represented by Linked List',
    difficulty: 'Medium',
    description: `Add 1 to number stored in LL.`,
    inputExample: '1->9->9',
    outputExample: '2->0->0',
    explanation: `Reverse → add → reverse.`,
    code: {
      java: `class Main{
  static Node addOne(Node head){
    head=reverse(head);

    Node cur=head;
    int carry=1;

    while(cur!=null && carry>0){
      int sum=cur.val+carry;
      cur.val=sum%10;
      carry=sum/10;

      if(cur.next==null && carry>0)
        cur.next=new Node(0);

      cur=cur.next;
    }

    return reverse(head);
  }
}`,

      python: `def addOne(head):
    head=reverse(head)

    cur=head
    carry=1

    while cur and carry:
        s=cur.val+carry
        cur.val=s%10
        carry=s//10

        if not cur.next and carry:
            cur.next=Node(0)

        cur=cur.next

    return reverse(head)`,

      c: `// reverse add`,
      cpp: `Node* addOne(Node* head){
    head=reverse(head);

    Node* cur=head;
    int carry=1;

    while(cur && carry){
        int sum=cur->val+carry;
        cur->val=sum%10;
        carry=sum/10;

        if(!cur->next && carry)
            cur->next=new Node(0);

        cur=cur->next;
    }

    return reverse(head);
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Add Two Numbers in Linked List',
    difficulty: 'Medium',
    description: `Add two numbers represented by LL.`,
    inputExample: '2->4->3 + 5->6->4',
    outputExample: '7->0->8',
    explanation: `Digit addition with carry.`,
    code: {
      java: `class Main{
  static Node add(Node l1,Node l2){
    Node dummy=new Node(0);
    Node cur=dummy;
    int carry=0;

    while(l1!=null || l2!=null || carry!=0){
      int sum=carry;

      if(l1!=null){ sum+=l1.val; l1=l1.next; }
      if(l2!=null){ sum+=l2.val; l2=l2.next; }

      cur.next=new Node(sum%10);
      carry=sum/10;
      cur=cur.next;
    }
    return dummy.next;
  }
}`,

      python: `def add(l1,l2):
    dummy=Node(0)
    cur=dummy
    carry=0

    while l1 or l2 or carry:
        s=carry
        if l1:
            s+=l1.val
            l1=l1.next
        if l2:
            s+=l2.val
            l2=l2.next

        cur.next=Node(s%10)
        carry=s//10
        cur=cur.next

    return dummy.next`,

      c: `// add numbers`,
      cpp: `Node* add(Node* l1,Node* l2){
    Node* dummy=new Node(0);
    Node* cur=dummy;
    int carry=0;

    while(l1 || l2 || carry){
        int sum=carry;

        if(l1){ sum+=l1->val; l1=l1->next; }
        if(l2){ sum+=l2->val; l2=l2->next; }

        cur->next=new Node(sum%10);
        carry=sum/10;
        cur=cur->next;
    }
    return dummy->next;
}`
    }
  },
   {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Reverse Linked List in K Groups',
    difficulty: 'Hard',
    description: `Reverse nodes in groups of size k.`,
    inputExample: '1->2->3->4->5, k=2',
    outputExample: '2->1->4->3->5',
    explanation: `Reverse k nodes, then recurse.`,
    code: {
      java: `class Main{
  static Node reverseK(Node head,int k){
    Node cur=head;
    int count=0;

    while(cur!=null && count<k){
      cur=cur.next;
      count++;
    }

    if(count==k){
      Node prev=null, curr=head;

      for(int i=0;i<k;i++){
        Node nxt=curr.next;
        curr.next=prev;
        prev=curr;
        curr=nxt;
      }

      head.next=reverseK(curr,k);
      return prev;
    }
    return head;
  }
}`,

      python: `def reverseK(head,k):
    cur=head
    count=0

    while cur and count<k:
        cur=cur.next
        count+=1

    if count==k:
        prev=None
        curr=head

        for _ in range(k):
            nxt=curr.next
            curr.next=prev
            prev=curr
            curr=nxt

        head.next=reverseK(curr,k)
        return prev

    return head`,

      c: `// k reverse`,
      cpp: `Node* reverseK(Node* head,int k){
    Node* cur=head;
    int count=0;

    while(cur && count<k){
        cur=cur->next;
        count++;
    }

    if(count==k){
        Node* prev=NULL;
        Node* curr=head;

        for(int i=0;i<k;i++){
            Node* nxt=curr->next;
            curr->next=prev;
            prev=curr;
            curr=nxt;
        }

        head->next=reverseK(curr,k);
        return prev;
    }
    return head;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Rotate Linked List',
    difficulty: 'Medium',
    description: `Rotate list to right by k places.`,
    inputExample: '1->2->3->4->5, k=2',
    outputExample: '4->5->1->2->3',
    explanation: `Make circular → break at right point.`,
    code: {
      java: `class Main{
  static Node rotate(Node head,int k){
    if(head==null || head.next==null) return head;

    Node cur=head;
    int len=1;

    while(cur.next!=null){
      cur=cur.next;
      len++;
    }

    cur.next=head;
    k%=len;

    for(int i=0;i<len-k;i++)
      cur=cur.next;

    Node newHead=cur.next;
    cur.next=null;

    return newHead;
  }
}`,

      python: `def rotate(head,k):
    if not head or not head.next:
        return head

    cur=head
    length=1

    while cur.next:
        cur=cur.next
        length+=1

    cur.next=head
    k%=length

    for _ in range(length-k):
        cur=cur.next

    newHead=cur.next
    cur.next=None

    return newHead`,

      c: `// rotate`,
      cpp: `Node* rotate(Node* head,int k){
    if(!head || !head->next) return head;

    Node* cur=head;
    int len=1;

    while(cur->next){
        cur=cur->next;
        len++;
    }

    cur->next=head;
    k%=len;

    for(int i=0;i<len-k;i++)
        cur=cur->next;

    Node* newHead=cur->next;
    cur->next=NULL;

    return newHead;
}`
    }
  },

  {
    subject: 'Code',
    category: 'LinkedList',
    title: 'Clone Linked List with Random Pointer',
    difficulty: 'Hard',
    description: `Deep copy list with next & random.`,
    inputExample: 'list with random pointers',
    outputExample: 'cloned list',
    explanation: `Interweaving method.`,
    code: {
      java: `class Main{
  static Node clone(Node head){
    if(head==null) return null;

    Node cur=head;

    while(cur!=null){
      Node nxt=cur.next;
      cur.next=new Node(cur.val);
      cur.next.next=nxt;
      cur=nxt;
    }

    cur=head;
    while(cur!=null){
      if(cur.random!=null)
        cur.next.random=cur.random.next;
      cur=cur.next.next;
    }

    cur=head;
    Node newHead=head.next;

    while(cur!=null){
      Node copy=cur.next;
      cur.next=copy.next;
      if(copy.next!=null)
        copy.next=copy.next.next;
      cur=cur.next;
    }

    return newHead;
  }
}`,

      python: `def clone(head):
    if not head:
        return None

    cur=head

    while cur:
        nxt=cur.next
        cur.next=Node(cur.val)
        cur.next.next=nxt
        cur=nxt

    cur=head
    while cur:
        if cur.random:
            cur.next.random=cur.random.next
        cur=cur.next.next

    cur=head
    newHead=head.next

    while cur:
        copy=cur.next
        cur.next=copy.next
        if copy.next:
            copy.next=copy.next.next
        cur=cur.next

    return newHead`,

      c: `// clone`,
      cpp: `Node* clone(Node* head){
    if(!head) return NULL;

    Node* cur=head;

    while(cur){
        Node* nxt=cur->next;
        cur->next=new Node(cur->val);
        cur->next->next=nxt;
        cur=nxt;
    }

    cur=head;
    while(cur){
        if(cur->random)
            cur->next->random=cur->random->next;
        cur=cur->next->next;
    }

    cur=head;
    Node* newHead=head->next;

    while(cur){
        Node* copy=cur->next;
        cur->next=copy->next;
        if(copy->next)
            copy->next=copy->next->next;
        cur=cur->next;
    }

    return newHead;
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
        console.log(`Successfully processed ${problems.length} problems for LinkedList`)
        
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
