import { ImageWithCaption, Spacer } from 'components'
import { Container } from 'react-bootstrap'

export const Projects = () => {
  return (
    <Container>
      <h1>Projects</h1>
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
