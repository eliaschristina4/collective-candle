export default function Products() {

    const grabProducts = () => {
        // maybe extract this into its own component that you import and use here
        // either fetch or axios get request
        fetch('/db')
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch(err => console.log(err));
            // WORRKSSSS YEEHAW. returns an array of 12 objects, one for each product from the db
    };

    grabProducts();

    return (
        <div>
            <h1>Products Page</h1>
            
        </div>
    )
}
