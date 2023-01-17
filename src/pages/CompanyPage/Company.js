import { React, useEffect } from "react";
import "./Company.css";
function CompanyPage() {
  useEffect(() => {
    document.title = "Company - Softfun";
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div className="CompanyPage block">
      <h1 className="title-our">OUR WORK CULTURE</h1>
      <p style={{ textAlign: "center" }} className="subtitle-company">
        Our culture is our most important investment in the company's future.
        It's what helps us remain successful in an ever-changing world.
      </p>
      <p style={{ textAlign: "center" }} className="subtitle-company">
        Together we seek out new ways of working more effectively together,
        using the knowledge we gain as we grow, we’ll continue updating our
        Culture Code.
      </p>
      <h2>Core Values</h2>
      <p>
        Our culture is our most important investment in the company's future.
        It's what helps us remain successful in an ever-changing world. Together
        we seek out new ways of working more effectively together, using the
        knowledge we gain as we grow, we’ll continue updating our Culture Code.
      </p>
      <br></br>
      <div className="wrapper-ul">
        <h3>Quality</h3>
        <ul>
          <li>Aim to do the best performance</li>
          <li>Bring in new ideas and suggest innovative solutions</li>
          <li>Analyze the results to become better at work</li>
        </ul>
      </div>
      <br></br>
      <div className="wrapper-ul">
        <h3>Results</h3>
        <ul>
          <li>Focus on the results, not the process</li>
          <li>Know how to prioritize the tasks</li>
          <li>Find the most effective solutions to complete tasks</li>
        </ul>
      </div>
      <br></br>
      <div className="wrapper-ul">
        <h3>Interaction</h3>
        <ul>
          <li>
            To be honest, speak their mind even if it might cause disagreement
          </li>
          <li>
            Strive for mutual understanding, and seek consensus when solving
            problems
          </li>
          <li>Respect each other.</li>
        </ul>
      </div>
      <p style={{ margin: "40px 0" }}>
        Coming up with overarching values is easy — it's much more difficult to
        follow them every day. We want all of our employees to help each other
        follow these values and embody the qualities described in them.
      </p>
      <h2>Quality and Innovations</h2>
      <p>
        We believe that the company grows when its employees do. That's why we
        create an environment that fosters employee development.
        <br></br>
        <br></br>
        We see feedback as an essential part of our communication and how we
        work together. We give feedback as soon as there's a need for it, and we
        are honest with that feedback regardless of roles and positions. We
        support openness and honesty — everyone should feel comfortable speaking
        their mind.
      </p>
      <h2>People are more important than processes</h2>
      <p>
        We believe that people are more important than processes. Our goal is to
        inspire people, not to manage them. We want our employees to be
        independent, to be able to make their own mistakes and fix them.
      </p>
      <h2>Distributed Leadership</h2>
      <p>
        The company is growing, and as the number of tasks increases,
        bottlenecks appear at the points where individuals need to approve every
        decision. We view this as an ineffective approach and believe that our
        company should have many leaders, which is why we distribute leadership
        and supervision among all of the company's employees. It's more
        important to create a system in which people can make sound decisions
        independently, without involving their managers.
      </p>
    </div>
  );
}

export default CompanyPage;
