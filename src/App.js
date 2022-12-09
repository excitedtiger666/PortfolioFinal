
import './App.css';
import { motion, useScroll, useSpring } from 'framer-motion'
import Card from "./components/Card"
import cardData from './data/card-data.json'
import academicImage from './Images/academic.png'
import sportsImage from './Images/sports.png'
import nimbleImage from './Images/nimble.png'

function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="App">

      {/* <!-----------------------LANDING PAGE-------------------------> */}
      <motion.div className="progress-bar" style={{ scaleX }} />
      <motion.div className="header" >
        <h1>
          Hello World! My name is X. <br />
          <code>Artist. Academic. Sports-Fanatic. Aspiring Physician.</code>
        </h1>
      </motion.div>
      <div className="divider"></div>

      {/* <!-----------------------CARD PAGE-------------------------> */}
      <h1> Diverse Interests. Deeply Intentional.</h1>
      <div className="card-section">
        {cardData.map((card, i) => (
          <motion.div className='card-container' initial={{ x: -(i * 200), opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.6
            }} whileHover={{ scale: 1.1 }}>
            <Card link={card.link} header={card.header} image={card.image} caption={card.caption} />

          </motion.div>)
        )
        }
      </div>
      <div className="divider"></div>
      {/* <!-----------------------ARTIST PAGE-------------------------> */}
      <div id='Artist' className="acacdemic-container">
        <h1 className="academic-title"> Artist </h1>
        <div className="academic-description">
          <div className="article">
            <p>I grew up during the rise of the internet. I believe this is where the main source of my diverse interests may stem from. For the first time in human history, we humans had access to a wide array of information- and I wanted to explore it all.
            </p>
            <p> A specific aspect of the internet that I quickly grew to love was YouTube. I still can recall
              vivid memories of coming back home from school, opening a box of pop tarts, and watching my favorite YouTubers.
              Not only was YouTube a source of escape from a pretty tough home life growing up, but it was also an outlet to learn
              about the world. Growing up poor, I didn't have access to resources that most kids have. I quickly used the
              free information given on YouTube to learn, grow, and find my interest in dancing and filmmaking.
            </p>
            <p>
              Casey Neistat was a specific YouTuber that inspired me to start making videos. When I was growing up,
              he would put out daily vlogs that were edited like no other. That was when I decided to grab my dinky home camera,
              download Premier Pro, and start editing whatever footage I had. My love for creation hasn't died here at Brown. In my senior year,
              I decided to take a film-making course where we learn how to make films with only our phones. It has been a wild ride
              and I look to further dive deeper into this interest of mine. Here is a taste of my filmmaking style.
            </p>
            <p>"Nicely done, X. over 16 semesters, this is the best z-axis anyone in our seminar has created." - Theodore Bogosian, Emmy Winning filmmaker <br /> <br /> Shot on iPhone. </p>
          </div>
          <motion.div className='article-image-container' transition={{
            duration: 0.6
          }} whileHover={{ scale: 1.1 }}>
            <iframe src="https://drive.google.com/file/d/15uIZqwnMh461dhBs2v1tXl0oipIn1jD6/preview" width="640" height="380" allow="autoplay"></iframe>
          </motion.div>
        </div>
        {/* <div className="button-container"><button>Back to the four things that make me, me.</button></div> */}
      </div>
      <div className="divider"></div>

      {/* <!-----------------------ACADEMIC PAGE-------------------------> */}
      <div id='Academic' className="acacdemic-container">
        <h1 className="academic-title"> Academic </h1>
        <div className="academic-description">
          <div className="article">
            <p>As a student in Biology and Computer Science - two fields where the growth of knowledge seemingly expands at the rate of Moore's Law- I have quickly grown into an individual who actively seeks out knowledge. Whether it be a Tuesday morning or a Saturday evening, chances are you can catch me listening to an <a href='https://www.youtube.com/@hubermanlab'> <u> Andrew Huberman podcast</u></a> or
              trying to disprove my friend’s takes on scientific discussions.
            </p>
            <p>This has naturally led me to want to partake in the academic process more than just the
              average student would. Specifically, the intersection of academia and community engagement is
              where I have found myself gravitating towards during my time at Brown. Through participating in the Bonner Fellowship, Royce Fellowship, and much more I have been intimate with the world of Fellowships.
            </p>
            <p>To seek out more opportunities, I routinely engaged with the Brown Fellowships Page.
              This website was downright unusable with many usability and design issues that I was
              swayed from using the website. This was when I realized I could utilize my
              skills in UIUX to help redesign this page with good design principles at the heart of the project.
            </p>
            <p>Feel free to check out my thought process and ultimate redesigned linked here: <a href="https://excitedtiger666.github.io/Responsive-Redesign-Submission/" target="_blank"> <u>A Responsive-Redesign of the Brown Fellowships web page.</u></a></p>
          </div>
          <motion.div className='article-image-container' transition={{
            duration: 0.6
          }} whileHover={{ scale: 1.1 }}>
            <a href="https://excitedtiger666.github.io/Responsive-Redesign-Submission/" target="_blank">
              <img src={academicImage} alt="" /></a></motion.div>
        </div>
      </div>
      <div className="divider"></div>

      {/* <!-----------------------SPORTS FANATIC PAGE-------------------------> */}
      <div id='Sports Fanatic' className="acacdemic-container">
        <h1 className="academic-title"> Sports Fanatic </h1>
        <div className="academic-description">
          <div className="article">
            <p> When I immigrated to the US (2006), Kobe Bryant was a cultural icon. The Boston Celtics had just
              formulated their Big 3 (consisting of Paul Pierce, Ray Allen, and Kevin Garnett). The Celtics v Lakers
              rivalry was omnipresent.
            </p>
            <p>
              During this time I found myself gravitating towards Basketball and then started loving the sport of
              Football. Due to my interest in basketball, I wanted to create an app that could let users formulate
              the best NBA fantasy team.
            </p>
            <p> To create this app, I used React.JS. I learned how to use components, props, and hooks to create a dynamic
              and clean web app. I also learned many things about JavaScript. Mainly, that it is my least favorite programming
              language with its wonky syntax and obscure under-the-hood behavior. Due to this, for the first time in my
              computer science life, stack overflow became my best friend, and asking questions revolving around "how do I make
              the computer do this" became comfortable asking.
            </p>
            <p>Feel free to check out the web app: <a href="https://excitedtiger666.github.io/Development-Project/" target="_blank"> <u>NBA Fantasy Team Dash</u></a></p>
          </div>
          <motion.div className='article-image-container' transition={{
            duration: 0.6
          }} whileHover={{ scale: 1.1 }}>
            <a href="https://excitedtiger666.github.io/Development-Project/" target="_blank">
              <img src={sportsImage} alt="" /></a></motion.div>
        </div>
      </div>
      <div className="divider"></div>
      {/* <!-----------------------ASPIRING PHYSICIAN PAGE-------------------------> */}
      <div id='Aspiring Physician' className="acacdemic-container">
        <h1 className="academic-title"> Aspiring Physician </h1>
        <div className="academic-description">
          <div className="article">
            <p> When I was in my senior year of high school, I was fortunate enough to partake in a program
              that allowed me to substitute my senior-year science courses with courses at the University of Nebraska
              Medical Center. This program instilled a love for medicine within me and a deep passion to become a physician.
            </p>
            <p>
              Throughout my time at Brown, my desire to become a physician has only deepened. With my interest in computer science, I have,
              specifically, started to become fascinated by the ways that technologies are being used to help improve the healthcare system.
              As I was searching for companies that were doing this, I came across NimbleRx. Nimble is a prescription delivery service that can allow
              patients to receive their medications all just by tapping some buttons on their phones.
            </p>
            <p> I began to get interested in Nimble and specifically how, if I was their user designer, I would design their web app.
              For this project, I had to understand the wants and needs of the patient in terms of an interface and help create a user-friendly
              app. I grouped up with three other friends of mine at Brown to make a prototype of how we would design this website. We also sent this prototype
              to different users to trial the prototype who all gave overwhelmingly positive feedback.
            </p>
            <p>Feel free to check out the prototype and our thought process in designing it at: <a href="https://excitedtiger666.github.io/Development-Project/" target="_blank"> <u>NimbleRx Prototype</u></a></p>
          </div>
          <motion.div className='article-image-container' transition={{
            duration: 0.6
          }} whileHover={{ scale: 1.1 }}>
            <a href="https://excitedelk111.github.io/iterative-design/" target="_blank">
              <img src={nimbleImage} alt="" /></a></motion.div>
        </div>
      </div>
    </div >
  );
}

export default App;
