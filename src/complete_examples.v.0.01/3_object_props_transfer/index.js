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

const bookOne = {
    title: "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability (3rd Edition) " +
        "(Voices That Matter) 3rd Edition",
    author: "Steven Turd".toUpperCase(),
    image: "https://images-na.ssl-images-amazon.com/images/I/51WS36aA2BL._SX387_BO1,204,203,200_.jpg",
    alt_message: "amazon_book_list_image"
};


const BookList = () => {
    // the following variables are on uppercase to highlight the importance of the prop transition property in React
    return (
        <section className={"book_list"}>


            {/*book object vars can be passed individually or grouped as a single object*
             /*vars being sent separately is commented out - switch if needed*

            {/*will also need to change in the corresponding prop destination*
            */}

            <Book
                // img={bookOne.image}
                // alt_message={bookOne.alt_message}
                // title={bookOne.title}
                // author={bookOne.author}


                book_one={bookOne} // <- passed as an object


            />

        </section>)
}


const Book = (props) => {
    console.log(props)


    /**
     book object vars can be passed individually or grouped as a single object
     vars being sent separately is commented out - switch if needed

     will also need to change in the corresponding prop destination
     **/

    return (
        <article className="book">
            {/*<img src={props.image_prop} alt={props.alt_message_prop}/>*/}
            {/*<h1>{props.title_prop}</h1>*/}
            {/*<h4>{props.author_prop}</h4>*/}
            {/*<p>{props.number}</p>*/}

            <img src={props.book_one.image} alt={props.book_one.alt_message}/>
            <h1>{props.book_one.title}</h1>
            <h4>{props.book_one.author}</h4>


        </article>
    )
}


ReactDom.render(<BookList/>, document.getElementById('root'));