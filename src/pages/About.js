import skip from './../images/about images/skip.jpg';
import breathe from './../images/about images/breathe.jpg';
import loops from './../images/about images/loops.jpg';
import agontfHi from './../images/about images/agontfHi.jpg';

import Header from './../components/Header';

export default function About() {
    return (
        <body class="about-body">
                <Header
                    link="./../"
                    text="About"
                />
                <div class="description">
                    <p>
                        American-born Chinese raised in the quiet town of Sharon. Attended Sharon High School and dual enrolled in Massassoit Community College for online college credits my senior year.
                        <u><a href="https://www.masslive.com/boston/2019/03/theyve-allowed-students-to-feel-unsafe-former-sharon-high-school-teacher-bradley-lengas-accused-of-repeatedly-rubbing-up-against-female-students.html">Nothing of significance</a></u> happened at the high school.
                        Spent a little time gaming, went to the <u><a href="https://youtu.be/ULjbIMvP6A0?t=55">gym</a></u> at 5:30 in the morning, and <u><a href="http://www.sharonsailing.org/2018_School_Movie.html">sailed for varsity</a></u>.
                        During my summers I taught sailing at the Sharon Recreation Department.
                    </p>
                    <p>
                        Currently at the University of Massachusetts Amherst studying for a B.S. in Computer Science.
                    </p>
                    <p>
                        By the way, my name at the top redirects back to the home page.
                    </p>
                </div>
                <div class="gallery">
                    <div class="about-image"><img src={skip} height="250" length="250" /></div>
                    <div class="about-image"><img src={breathe} height="250" length="250" /></div>
                    <div class="about-image"><img src={loops} height="250" length="250" /></div>
                    <div class="about-image"><img src={agontfHi} height="250" length="250" /></div>
                </div>
        </body>
    )
}