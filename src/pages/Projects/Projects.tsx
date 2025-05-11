import { ImageWithCaption, Spacer } from 'components'
import { Col, Container, Row } from 'react-bootstrap'

export const Projects = () => {
  return (
    <Container>
      <h1>Projects</h1>
      <h2>StockWatch</h2>
      <p>
        I developed a web and mobile app to track the performance of stocks using data from Alpha Vantage and Finnhub
        which can be found{' '}
        <a href="https://stockwatch-5077f.web.app/" target="blank">
          here
        </a>
        . The source code can be found{' '}
        <a href="https://github.com/jasontslxd/StockWatch/tree/master" target="blank">
          here
        </a>
        .
      </p>
      <p>The app has a few main features:</p>
      <ul>
        <li>
          A dashboard to view the performance of the top gainers and losers in the stock market in the past day, and
          to also view the performance of their watchlist of stocks.
        </li>
        <li>
          A search bar to search for a stock by name or ticker.
        </li>
        <li>
          A page for the stock's profile, which includes a chart of the stock's price over time, and a list of news
          articles about the stock.
        </li>
        <li>
          A page to view the user's portfolio, which tracks the user's stocks and their performance.
        </li>
      </ul>
      <p>
        The app is built using React.js for the web, and mobile builds are available for Android using Capacitor.
        It is integrated with Firebase for authentication, as a database, and for hosting. A demo of the app is shown below.
      </p>
      <Row className="justify-content-center">
        <Col>
          <h4>Web demo with real endpoints</h4>
          <video controls width="100%" height="400px">
            <source src="https://github.com/user-attachments/assets/b6923683-7159-440e-bc4b-e4367fb782a6" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
        <Col>
          <h4>Android demo with demo Alpha Vantage API</h4>
          <video controls width="100%" height="400px">
            <source src="https://github.com/user-attachments/assets/b3e30c57-c227-45b2-a755-40b8de650fb0" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
      <h2>Demo RAG chatbot</h2>
      <p>
        I developed a RAG chatbot during my time Vsceptre which can be found{' '}
        <a href="https://demo.vsceptre.com" target="blank">
          here
        </a>
        . The chatbot serves two purposes:
        <ul>
          <li>
            It serves as a demo for our clients to showcase the products that the company partners with, including
            Elasticsearch, Datadog, Kong API gateway and LaunchDarkly.
          </li>
          <li>
            It is used as an internal tool to help our sales team easily search through the sales materials from partner
            companies.
          </li>
        </ul>
        The chatbot is built using React.js connected to a Python Flask backend, which in turn proxies request to
        multiple LLM providers using Kong Gateway to enable rate limiting and LLM guardrails. The sales materials are
        indexed into Elasticsearch for vector search, and the prompts and models are managed using LaunchDarkly.
        Finally, the end-to-end application flow is monitored using Datadog to provide application performance
        monitoring and LLM observability. The application is packaged into a docker container and deployed onto our
        company domain. To protect the server, the application is locked behind authentication, so instead I have
        attached a screenshot of it below.
      </p>
      <ImageWithCaption
        imageSrc="images/ai-search.png"
        caption="Screenshot of chatbot in action."
        alt="AI search"
        aspectRatio="4/3"
      />

      <Spacer size="md" />

      <h2>Online Name Card</h2>
      <p>
        I developed an online name card for Vsceptre employees to share their contact details with clients using
        React.js. My name card can be found{' '}
        <a href="https://contact.vsceptre.com/ecard/jason-tsang" target="blank">
          here
        </a>
        .
      </p>
    </Container>
  )
}
