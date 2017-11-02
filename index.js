class Message {
  constructor(text ='' , created= Date.now() ) {
    this.text ='';
    this.created=created;
  }

  get created(){
    return this._created;
  }

  set created(created){
    if(!created || isNaN(created)){
      throw new Error('invalid created');
    }
    this._created = created;
  }

  toString(){
    return `Message created at: ${this.created} - text ${this.text}`;
  }
}

class ImageMessage extends Message{
  constructor(text ='', created = Date.now(), 
              url='', thumbnail=''){
    super(text,created);
    this.url=url;
    this.thumbnail=thumbnail;
  }

  toString(){
    return `Photo${super.toString()}`+
    ` - url ${this.url}`+
    ` - thumbnail ${this.thumbnail}`;
  }
}



var emptymessage = new Message();
//var excep = new Message(null,null);
var textMessage = new Message('yesterday message', Date.now() - 86400);
var photoMessage = new ImageMessage();


console.log(String(emptymessage));
console.log(textMessage);
console.log(String(photoMessage));

console.log(emptymessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);
console.log(emptymessage instanceof ImageMessage);