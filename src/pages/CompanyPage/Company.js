import { React, useEffect } from "react";
import './Company.css'
function CompanyPage() {
    useEffect(() => {
        document.title = 'Company - Funnii';
    });

    return (
        <div className="CompanyPage block">
            <h2>Overview</h2>
            <p>Funnii is a young company that specializes in creating mobile games. We are committed to providing high-quality products to the global market and hope to become one of the top studios. Since 2019, Funnii has released more than 80 mobile games with more than 200 million downloads worldwide. In 2020, we were proud our products are one of the US and China Top Mobile Games with puzzle and action games. At Funnii Studio, you could work in a scrum organization, active and professional working environment with a highly experienced. It's to bring more interest to each of the core teams. Let's take a look at our work! Explore our products on Google Play and iOS App Store such as Draw Story: Love the Girl, Erase Story, Robot Super,...  Our fundamental goal has remained the same: to make people around the world happier, by delivering games that entertain connected audiences who love games.</p>
            <br />
            <h2>Core Values</h2>
            <p>At Funnii Studio, we exist to inspire the Play for Fun. We create extraordinary new game experiences for our millions of players everywhere by bringing together talented people that combine creativity, innovation, and passion. Funnii Studio develops and delivers games online for mobile devices. We know that our strength lies in the diversity of our people. We immerse our employees into an inclusive culture and provide opportunities for learning and leading that allow them to do the most impactful and rewarding work of their careers. </p>
            <br />
            <h2>People</h2>
            <p>We strive to create a workplace that is diverse, equitable, and inclusive, where people have the opportunity to fulfill their potential. Funnii believe we’re at our best when we listen, learn, and empower each other. We celebrate openness and curiosity and are committed to making a positive impact in the world.
            <br />
            Funnii – a place where everyone can thrive, fulfill their potential and make the best games. Find out what makes us different.</p>
            <br />
            <h2>Passion</h2>
            <p>We believe in the power of positive and that being part of a gaming community should be a fun, fair, and safe experience for all. We are equally committed to building a workplace that spurs creativity and innovation and is as diverse as the communities we serve.
            <br />
            As a young company, Funnii want to inspire through our actions and create a positive impact in the world. This isn’t a destination but an ongoing journey of transparency and continual progress.
            </p>
            <br />
            <h2>Culture</h2>
            <p>Our culture is built by all of us at Funnii, so we offer inclusion training and resources for all levels of the organization. We strive to lead the way for our industry to transform and for Funnii Studio to be viewed as a destination for great talent. From our respectful workplace policies to equality as it applies to pay, we continue to invest in internal and external initiatives that empower our people, celebrate diversity and actively foster inclusion within Funnii and our communities. </p>

        </div>
    );
}

export default CompanyPage;