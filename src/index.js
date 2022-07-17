import ReactDom from 'react-dom'


function BookList() {
    return (
        <section>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </section>
    )
}


const Book = () => {
    return <article><Image/></article>;
}


const Image = () => <img
    src="https://images-na.ssl-images-amazon.com/images/I/51WS36aA2BL._SX387_BO1,204,203,200_.jpg"/>

ReactDom.render(<BookList/>, document.getElementById('root'));