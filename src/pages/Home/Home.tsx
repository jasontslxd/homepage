import { Spacer, ImageWithCaption } from 'components'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router'

export const Home = () => {
  return (
    <Container>
      <Row className="d-flex align-items-center">
        <Col xs={6} className="d-flex justify-content-end">
          <img
            style={{
              width: '80%',
              height: '80%',
              aspectRatio: '1/1',
              maxWidth: 200,
              maxHeight: 200,
            }}
            className="rounded-circle object-fit-cover"
            src="https://contact.vsceptre.com/ecard/static/media/icon.9fc3c170cf038fef64a2.jpg"
            alt="Jason icon"
          />
        </Col>
        <Col xs={6}>
          <h1>Jason Tsang (曾書洛)</h1>
          <p>Solution Consultant at Vsceptre</p>
        </Col>
      </Row>

      <Spacer size="xxlg" />

      <Row>
        <h2>About me</h2>
        <ul className="mx-3 text-align-left">
          <li>
            I am a Solution Consultant at{' '}
            <a href="https://vsceptre.com" target="blank">
              Vsceptre
            </a>
            , mainly working on delivering observability, DevOps and AI related projects. I am also responsible for the
            development of internal IT resources using React.js and Python, such as our online name card solution and a
            chatbot for internal and demo use cases. More on that can be found <Link to="/projects">here</Link>.
          </li>
          <li>
            Previously, I was an Analyst Engineer at National Australia Bank, focusing on frontend development using
            React.js, Typescript and GraphQL for various inhouse projects, such as{' '}
            <a href="https://www.nab.com.au/business/portal-pay" target="blank">
              NAB Portal Pay
            </a>
            , a real estate payment platform for NAB's business customers, and term deposit related applications, such
            as an{' '}
            <a
              href="https://www.nab.com.au/common/forms/new-nab-term-deposit#?products=nab-term-deposit"
              target="blank"
            >
              online application
            </a>{' '}
            for NAB Term Deposits.
          </li>
          <li>
            I graduated from the University of Melbourne with a Masters in Computer Science (Distinction) and Bachelor
            of Science in Mathematical Physics. During my final year, I was a part of the I was part of the{' '}
            <a href="https://www.quantumelectronics.org/home" target="blank">
              QL2Q Lab
            </a>{' '}
            (previously Quanics Lab) team, working on quantum generative adversarial networks. More information about my
            research can be found <Link to="/research">here</Link>.
          </li>
          <li>
            After living in Melbourne for nearly 11 years, I have decided to quit my job in Melbourne return to Hong
            Kong in September 2024. Though I enjoyed my time in Melbourne a lot, Hong Kong still feels like home to me
            with most of my family and a lot of friends still here. After a brief stint as a solution consultant, I
            realised that I really enjoy being an inhouse software developer. Hence, I hope I am able to continue my
            career as a software developer in Hong Kong.
          </li>
        </ul>
      </Row>

      <Spacer size="xxlg" />

      <Row>
        <h2>Publications and Projects</h2>
        <p>
          A list of my publications can be found <Link to="/research">here</Link>, and projects can be found{' '}
          <Link to="/projects">here</Link>.
        </p>
      </Row>

      <Spacer size="xxlg" />

      <Row>
        <h2>Hobbies</h2>
        <p>
          My hobbies include football, rock climbing, skiing and playing video games. Here are two photos of me that I
          thought were pretty cool.
        </p>
        <Row>
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-center my-3">
            <ImageWithCaption
              imageSrc="images/climbing.jpg"
              caption="Conquering a route called Boogie til you puke on top rope in Mt. Macedon, Victoria, Australia"
              alt="Jason climbing"
              aspectRatio="3/4"
            />
          </Col>

          <Col xs={12} md={6} className="d-flex align-items-center justify-content-center my-3">
            <ImageWithCaption
              imageSrc="images/skiing.jpg"
              caption="Skiing at Zao Onsen, Yamagata, Japan"
              alt="Jason skiing"
              aspectRatio="3/4"
            />
          </Col>
        </Row>
      </Row>
    </Container>
  )
}
