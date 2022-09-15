import {React , useEffect} from "react";
import './Careers.css'
function CareersPage() {
    useEffect(() => {
        document.title = 'Careers - Funnii';
    });

    return (  
        <div className="careersPage block">
            <h1>Careers page here</h1>
            <img src="https://www.onlygfx.com/wp-content/uploads/2018/04/coming-soon-stamp-3-1024x632.png" alt="" />
        </div>
    );
}

export default CareersPage;