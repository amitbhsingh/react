//pop
pop() {
    if(!this.head) return undefined

    let temp=this.head
    let pre=this.head

    while(temp.next){
        pre=temp
        temp=temp.next
    }
    this.tail=pre
    this.tail.next=null
    this.length--
    if(this.length===0) {
        this.head=null
        this.tail=null
    }
    return temp
}
let num=[1,2,3,4,5,6,6]
pop(num)