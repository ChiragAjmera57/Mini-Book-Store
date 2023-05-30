import fiction from '../fiction.json'
import BookCard from './BookCard';
var ficdata = fiction;
var c = 1;
export default function Fiction() {
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional Books</h1>

      <div className="books-container">
      {
        ficdata.map((ele,i)=>{
          c++;
         return<BookCard  key={c} ele={ele} />
        })
       }
      </div>
    </div>
  );
}
