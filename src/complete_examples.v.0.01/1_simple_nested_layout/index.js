import ReactDom from 'react-dom'
import "./index_styles.css";


function BookList() {
    return (
        <section className="book_list">
            <Book/>

        </section>
    )
}

const Book = () => {
    return (
        <article className="book">
            <Image/>
            <Title/>

        </article>
    );
};

// ** just an example of further outside functions nested functions
const Image = () => <img
    src="https://images-na.ssl-images-amazon.com/images/I/51WS36aA2BL._SX387_BO1,204,203,200_.jpg" alt="book_image"/>

const Title = () =>
    <h1>
        Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability (3rd Edition) (Voices That Matter) 3rd
        Edition
    </h1>;


ReactDom.render(<BookList/>, document.getElementById('root'));