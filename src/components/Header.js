import Button from "./Button";

const Header = ({ title }) => {
    return (
        <header  className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add'/>  
        </header>
    );
}

// CSS in JS    
// const headingStyle = {
//     color: 'blue',
//     backgroundColor: 'grey',
//     fontSize: '70px',
//     fontStyle: 'italic'
// }

export default Header;
