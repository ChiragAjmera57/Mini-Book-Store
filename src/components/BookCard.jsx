export default function BookCard({ele}) {
  const{img,title,year,author,price} = ele

  return (
   
    <div data-testid='book-card'>
        <img src={img} alt={""} />
        <b><div data-testid='book-card-title'>{title}<span>({year})</span></div></b>
        <div data-testid='book-card-author'>{author}</div>
        <div data-testid='book-card-price'>{price}</div>
    </div>
  )
}

