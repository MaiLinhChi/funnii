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
      <h1 className="title-our">Our culture</h1>
      <p style={{ textAlign: "center" }} className="subtitle-company">
        Our culture is our most important investment in the company's future.
        It's what helps us remain successful in an ever-changing world.
      </p>
      <p>
        A company's culture should change along with the company, so this is our
        vision of how we should be working today. Our goal isn't to make sure
        our culture stays exactly as it is now — on the contrary, we want it to
        evolve. There are more and more people who are truly passionate about
        their work in the company, and together we seek out new ways of working
        more effectively together. As part of this process, using the knowledge
        we gain as we grow, we’ll update our Culture Code.
      </p>
      <h2>Core Values</h2>
      <p>
        Our values are our guiding principles. They reflect our beliefs about
        how we can achieve the results that will allow us to excel. These values
        are the foundation upon which our company's culture is built. They guide
        our day-to-day work and help us make decisions. We want to work with
        people who share the following values:
      </p>
      <h3>Quality</h3>
      <ul>
        <li>They always aim to do their best work</li>
        <li>They bring in new ideas and suggest innovative solutions</li>
        <li>They analyze their results to become better at their job</li>
      </ul>
      <h3>Results</h3>
      <ul>
        <li>They focus on the results, not the process</li>
        <li>They know which tasks to prioritize</li>
        <li>They find the most effective solutions to complete tasks</li>
      </ul>
      <h3>Interaction</h3>
      <ul>
        <li>
          They are honest. They speak their mind even if it might cause
          disagreement
        </li>
        <li>
          They strive for mutual understanding. They seek consensus when solving
          problems
        </li>
        <li>
          They treat other people with respect regardless of their position.
          They don't say anything about another person that they wouldn't say to
          their face
        </li>
      </ul>
      <p style={{ margin: "40px 0px 40px 20px" }}>
        Coming up with overarching values is easy — it's much more difficult to
        follow them every day. We want all of our employees to help each other
        follow these values and embody the qualities described in them.
      </p>
      <h2>Distributed Team</h2>
      <p>
        We believe that people are more important than ideas. An awesome team
        can take a bad idea and turn it into a hit. A mediocre team can take a
        great idea and turn it into a lukewarm product. We've been building a
        unique team since day one.<br></br>
        <br></br>
        Talented people can be anywhere: in small towns and big cities, but not
        everyone is ready to relocate. We took an innovative approach of working
        in a distributed team and have become the world's largest. We don't
        limit ourselves to specific locations when looking for talent. People at
        Playrix can work from wherever they want: from home, a coffee shop, or
        one of our 17+ offices. Thanks to our distributed structure, our teams
        are unique. They consist of people who would never have been able to
        work together otherwise.<br></br>
        <br></br>
        We don't think it's necessary to be near your colleagues to be an
        effective team. Many issues can be resolved independently and at
        different times. When we do need to discuss something in real time, we
        use video calls and our corporate messenger.<br></br>
        <br></br>
        Direct personal communication is essential in a distributed team. We
        hold our own PlayrixCON each year to give the whole company the chance
        to get together. Teams also have regular mini events where they come
        together to problem solve in person. Our employees often arrange
        meetings themselves in our offices. All of this allows us to get to know
        each other better and interact more efficiently. <br></br>
        <br></br>
        Our priority is to treat all employees equally whether they work
        remotely or from an office. Everyone at Playrix has equal opportunities
        for development regardless of their location.
      </p>
      <h2>Quality and Innovations</h2>
      <p>
        We believe that the company grows when its employees do. That's why we
        create an environment that fosters employee development.<br></br>
        <br></br>
        We don't view formal education (conferences, seminars, etc.) as the best
        way to develop professionally. Although we don't deny its value, we
        believe that people learn more effectively when they work on
        challenging, hands-on tasks alongside their talented colleagues.{" "}
        <br></br>
        <br></br>
        We believe that we learn faster when we receive continuous feedback. We
        don't have formal meetings to evaluate results. We see feedback as an
        essential part of our communication and how we work together. We give
        feedback as soon as there's a need for it, and we are honest with that
        feedback regardless of roles and positions. Giving feedback isn't always
        easy, especially when it concerns people in senior positions. But we
        support openness and honesty — everyone should feel comfortable speaking
        their mind. <br></br>
        <br></br>
        While receiving honest, direct feedback can be difficult, we believe
        it's necessary. That's why we train our employees to give each other
        constructive, professional feedback on a regular basis.<br></br>
        <br></br>
        We aren't afraid of making mistakes, because we think they lead to
        discoveries and learning opportunities. Mistakes aren't a bad thing.
        They're inevitable when you create something new. It’s okay to make
        mistakes from time to time, but what isn't acceptable is not learning
        from mistakes. <br></br>
        <br></br>
        Although our team is very talented, we know there's always room for
        improvement. We're not perfect, and we understand the importance of
        continuous self-development.
      </p>
      <h2>People are more important than processes</h2>
      <p>
        We believe that people are more important than processes. We avoid
        unnecessary rules — they aren't needed when a team of responsible people
        is working in the company's best interests. Our goal is to inspire
        people, not to manage them.<br></br>
        <br></br>
        For example, we have a flexible work schedule at our company. There are
        no fixed work hours, and no one is counting. Each employee is
        responsible for or their results and for communicating with their team,
        and on the work schedule that will be most effective. <br></br>
        <br></br>
        We believe freedom improves results. There's no point in hiring
        professionals only to tell them how to do their job. We assume that in
        almost all situations people have good intentions and want to solve real
        issues. That's why we want our employees to be independent, to be able
        to make their own mistakes and fix them.<br></br>
        <br></br>
        We want every employee to feel involved in everything that's going on in
        the company. If someone notices a problem, whether it's big or small,
        they don’t turn a blind eye. Instead, they do everything in their power
        to find a solution. No one should have to ask for permission to take
        responsibility.
      </p>
      <h2>Distributed Leadership</h2>
      <p>
        The company is growing, and its processes and systems are becoming more
        complicated. As the number of tasks increases, bottlenecks appear at the
        points where individuals need to approve every decision. We view this as
        an ineffective approach and believe that our company should have many
        leaders, which is why we distribute leadership and supervision among all
        of the company's employees. <br></br>
        <br></br>
        We create teams that are independent in their decision-making and give
        individuals more freedom. We want our employees to make their own
        decisions and to consult with their managers only when they aren't sure
        about their choices. <br></br>
        <br></br>
        That being said, managers should always be kept in the loop. Every
        leader's goal is to stay on top of what’s going on while creating an
        environment that is conducive for making decisions. Sometimes this
        requires getting into the nitty-gritty details of specific tasks, but
        the goal isn't to make every little decision or to micromanage. It's
        more important to create a system in which people can make sound
        decisions independently, without involving their managers. <br></br>
        <br></br>
        Distributed leadership has many advantages. Good decisions are made by
        the most competent people and work isn’t held back by waiting on
        unnecessary approvals.
      </p>
    </div>
  );
}

export default CompanyPage;
