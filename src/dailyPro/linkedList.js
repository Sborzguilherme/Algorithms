class Node {
  constructor(value, next = null, previous = null){
    this.value = value
    this.next = next
    this.previous = previous
  } 
}

class LinkedList {
  constructor(){
    this.head = null
    this.tail = null
  }

  empty(){
    return !(this.head && this.tail)
  }

  unshift(value){
    const newNode = new Node(value, this.head)
    if(this.head) this.head.previous = newNode
    this.head = newNode
    if(!this.tail) this.tail = newNode
    return this
  }

  push(value){
    const newNode = new Node(value, null, this.tail)
    if(this.tail) this.tail.next = newNode
    this.tail = newNode
    if(!this.head) this.head = newNode
    return this
  }

  shift(){
    if(this.head){
      const removedNode = this.head
      this.head = removedNode.next
      if(this.head) this.head.previous = null
      return removedNode.value 
    }
  }

  pop(){
    if(this.head){
      const removedNode = this.tail
      this.tail = removedNode.previous
      if(this.tail) this.tail.next = null
      return removedNode
    }
  }

  find(value){
    let pointer = this.head
    let index = 0
    while(pointer.value !== value && pointer !== null){
      pointer = pointer.next
      index++
    }
    return pointer.value ? index : null
  }

  print(){
    let pointer = this.head
    let cont = 0
    let print = ''
    while(pointer){
      print+=(`${pointer.value} --> `)
      pointer = pointer.next
      cont++
    }
    if(!cont) console.log('Empty List')
    console.log(print.slice(0,-4))
  }
}

module.exports = {
  LinkedList
}




