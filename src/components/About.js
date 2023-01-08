import { Link } from "react-router-dom";
const About = () => {
    return (
        <div className="About">
           <h3>Task Tracker by <i>IBN</i></h3>
           <p>Version 1.0.0</p>
           <Link to="/">Go Back</Link> 
        </div>
    );
}

export default About;
