import ReactDom from 'react-dom'

// css
import "./index_styles.css";


const BookList = () => {

    // vars
    const title = "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability (3rd Edition) (Voices That Matter) 3rd Edition"
    const author = "Steven Turd";
    const image = "https://images-na.ssl-images-amazon.com/images/I/51WS36aA2BL._SX387_BO1,204,203,200_.jpg";


    // the following variables are on uppercase to highlight the importance of the prop transition property in React

    return (
        <section>
            {/*# props in action!*/}
            <Book TITLEPROP={title} AUTHOR_PROP={author} IMAGE_PROP={image}/>
            {/*<Book/>*/}
        </section>
    )
}

const Book = (props) => {
    console.log(props)

    return (
        <article className="book">
            <img src={props.image_prop} alt={"book_image"}/>
            <h1>{props.title_prop}</h1>;
            <h4>{props.author_prop.toUpperCase()}</h4>
        </article>
    );
};

ReactDom.render(<BookList/>, document.getElementById('root'));