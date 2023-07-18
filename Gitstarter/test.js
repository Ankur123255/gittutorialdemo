arr = [1, 2 ,3, 6, 5]
class Node{
    constructor (val, node=null){
        this.val=val;
        this.next=node

    }
}

class linkedlist{
    head=null;
    tail=null;
    size=0;

    addtohead(addnumber){
        let node = {
            val: addnumber,
            next:null
        }
this.size ++
if(this.head==null){
    this.head=node;
    this.tail=node
}
else{
node.next = this.head;
this.head=node;
}

}
gethead(){
    return this.head;
    }
gettail(){
    return this.tail
}
        
    }

    const list =new linkedlist();
    list.addtohead(123);
    list.addtohead(72787)
    console.log(list.gethead())
    console.log(list.gettail())
   
    
