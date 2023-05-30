
import nonfictions from "../nonfiction.json";
import BookCard from "./BookCard";
var nondata = nonfictions;
export default function NonFiction() {
  
 var count = 1;
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div className="books-container">
       {
        
        nondata.map((ele,i)=>{
          count++;
         return<BookCard  key={count} ele={ele} />
        })
       }
        
      </div>
    </div>
  );
}
