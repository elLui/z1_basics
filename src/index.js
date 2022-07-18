import ReactDom from 'react-dom'

// THOUGHT OF THE DAY
// if we could parse all the user configurations and see exactly how many of them are the 'exactly the same'
// - then we could construct a list ranking people in their positions use vision of that list
// - it may influence them to possibly discover a better alternative to their work flow on their off time training days!
// - what will eventually happen is the more people will gravitate to the 'popular' ui
// - this will have a standardization effect that will allow us to create a repository for older unused guis
// - thus eliminating clutter - everyone can still build and are encouraged to
// - so possible continually make tweaks or 'branches' of the most used and loved configurations


// css
import "./index_styles.css";
// vars

const books = [{
    book_book_id: 'book_one',
    book_resource_title: 'iop links',
    book_resource_resources: "01.01.01",
    book_resource_date: new Date(2020, 7, 14),
    book_resource_counter: 0,
    book_resource_reference_number: 123451,
    book_title: "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability (3rd Edition) (Voices That Matter) 3rd Edition",
    book_author: "Steven Turd".toUpperCase(),
    book_image: "https://images-na.ssl-images-amazon.com/images/I/51WS36aA2BL._SX387_BO1,204,203,200_.jpg",
    book_alt_message: "amazon_book_list_image"
}, {
    book_id: 'book_two',
    book_resource_title: 'maintenance links',
    book_resource_resources: "02.02.02",
    book_resource_date: new Date(2021, 2, 12),
    book_resource_counter: 0,
    book_resource_reference_number: 123452,
    book_title: "Shadow Hunter",
    book_author: "Iris Kain".toUpperCase(),
    book_image: "https://m.media-amazon.com/images/I/41EJCFN+C+L._SY346_.jpg",
    book_alt_message: "amazon_book_list_image"
},];

const BookList = (props) => {
    return (
        <section className={"book_list"}>
            {books.map((book) => {
                const {book_image, book_alt_image, book_title, book_author} = book;
                console.log(book)
                return (

                    <Book book={book}></Book>

                )
            })
            }

        </section>
    )
}


const Book = (props) => {


    const {book_image, book_alt_message, book_title, book_author, children} = props;


    return (<article className="book">


        <img src={book_image} alt={book_alt_message}/>
        <h1>{book_title}</h1>
        <h4>{book_author}</h4>

    </article>)
}


ReactDom.render(<BookList/>, document.getElementById('root'));