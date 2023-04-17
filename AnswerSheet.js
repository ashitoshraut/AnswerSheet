//que - 1
function findNewIndex(taskQueue, currentIndex, currentIndexMember) {
    // remove inactive members from the task queue
    let activeMembers = taskQueue.filter(member => member !== currentIndexMember);
  
    // find the index of the next available member to the Current Index Member
    let nextIndex = activeMembers.indexOf(currentIndexMember, currentIndex);
  
    // if the Current Index Member is not found at or after currentIndex,
    // wrap around to the beginning of the queue
    if (nextIndex === -1) {
      nextIndex = activeMembers.indexOf(currentIndexMember);
    }
  
    return nextIndex;
  }
  
  // que - 2
  public class DailyLeadProcessor implements Schedulable {

    Public void execute(SchedulableContext sc){
       
    List<Lead> Leadobj=[SELECT Id from Lead where LeadSource-null limit 200]; 
    
    List<lead> updateLead = new List<Lead>();
    
    for (Lead l:Leadobj) {
     
    1.LeadSource= 'Dreamforce'; updateLead.add(1); 
    }
    
    update updateLead;
    
    }
  }
    //Test class
    @isTest

private class DailyteadProcessorTest {
static testMethod void testDailyLeadProcessor() {

string CRON EXP = '0' 0  1 * * ?';

List<Lead> lList = new List<lead>(); 
for (Integer i = 0; i < 200; i++){

lList.add(new Lead (LastName="Dreamforce +i, Company-'Test1 Inc., Status='Open Not contacted'));
}
insert lList;

Test.startTest();
String jobld = System.schedule('DailyLeadProcessor', CRON EXP, new DailyleadProcessor());
}
}

// que- 3 

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function getMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data
}