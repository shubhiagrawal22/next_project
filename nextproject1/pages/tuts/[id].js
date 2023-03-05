export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(next => {
        return {
            params: { id: next.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { next: data }
    }
}

const Details = ({ next }) => {
    return (
        <div>
            <h1>Details of {next.name}</h1>
            <p> email : {next.email}</p>
            <p> Phone no.: {next.phone}</p>
            <p>Address: {next.address.city}</p>
            <p>Company: {next.company.name}</p>
        </div>
    );
}
 
export default Details;