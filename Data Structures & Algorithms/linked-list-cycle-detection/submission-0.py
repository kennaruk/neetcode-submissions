# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        visited = set()
        
        tmp = head

        while tmp != None:
            if tmp in visited: 
                return True
            else:
                visited.add(tmp)
                tmp = tmp.next


        return False
