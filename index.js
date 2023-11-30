

function Book(tittle,author,genre,price){
    this.tittle=tittle
    this.author=author.name
    this.genre=genre
    this.price=price
}


function Author(name,birthYear,nationality){
      this.birthYear=birthYear
      this.nationality=nationality
      this.name=name
}

let author=new Author('Khwaja Ahmad Abbas',1914,'Indian')
let author1=new Author('Khwaja Ahmad ',1913,'Indian')
let author2=new Author('Khwaja ',1912,'US')
let author3=new Author('Khwaja ',1911,'Indian')



Book.prototype.getBookInfo=function(){
    console.log(this.tittle,this.author,this.genre,this.price);
}

let bookstore = new Book('King James Bible ',author,'Poetry',100)
let bookstore1 = new Book('King James  ',author1,'Poetry',100)
let bookstore2= new Book('King  ',author2,'Poetry',100)
let bookstore3 = new Book('Bible ',author3,'Poetry',100)


bookstore.getBookInfo()
bookstore1.getBookInfo()
bookstore2.getBookInfo()
bookstore3.getBookInfo()


