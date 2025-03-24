import { Accordion, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { ImageWithCaption, Spacer } from "components";
import { PQWGAN_CITATION, QAML_CITATION } from "common";

export const Research = () => {
  return (
    <Container>
      <h1>Research</h1>
      <p>
        During my final year of my masters degree at University of Melbourne, I was studying quantum machine learning under the supervision of A/ Prof. Muhammad Usman. 
        I was fortunate enough to publish two peer-reviewed papers, one on quantum generative adversarial networks and one on adversarial robustness in quantum machine learning.
        After my masters degree, I was offered to continue studying a PhD under A/ Prof. Usman in quantum machine learning. However I decided that academia was not for me 
        and I wanted to pursue a career in software engineering.
      </p>

      <h2>Patch Quantum Wasserstein Generative Adversarial Network</h2>
      <p>
        Patch quantum Wasserstein generative adversarial networks. It is a quantum generative adversarial network (QGAN) framework I developed
        during my thesis that achieved state of the art performance in image generation in 2022. In a nutshell, we use mutliple quantum circuits to generate
        one row of the pixels of the image, and then we stack these pixels on top of each other to form the final image. The code to run the simulations are written in 
        python, and are ran on HPC services provided by the University of Melbourne and also Pawsey Supercomputing Centre. 
        The paper is published in IEEE Transactions on Quantum Engineering and can be found <a className="link" href="https://ieeexplore.ieee.org/abstract/document/10264175" target="blank">here</a>,
        while the source code can be found <a className="link" href="https://github.com/jasontslxd/PQWGAN" target="blank">here</a>.
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Show additional information for PQWGAN</Accordion.Header>
          <Accordion.Body>

            <ImageWithCaption imageSrc="images/pqwgan.png" caption="Quantum circuit diagram for the quantum generator." alt="pqwgan circuit" aspectRatio="7/3" />
            <ImageWithCaption imageSrc="images/pqwgan_samples.png" caption="Sample outputs from the PQWGAN framework compared to WGAN-GP (classical machine learning) and real images." alt="pqwgan samples" aspectRatio="7/3" />

            <h3>Citing PQWGAN</h3>
            <div className="p-3 rounded bg-secondary-subtle">
              <ReactMarkdown>{PQWGAN_CITATION}</ReactMarkdown>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Spacer size="sm"/>

      <h2>Adversarial Robustness in Quantum Machine Learning</h2>
      <p>
        This is a literature review paper that I co-authored with Max (a PhD student I was working together with under A/ Prof. Usman at the time) when we were researching 
        quantum adversarial machine learning. It is published in Nature Machine Intelligence and can be 
        found <a className="link" href="https://www.nature.com/articles/s42256-023-00661-1" target="blank">here</a>.
      </p>
      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Show additional information for QAML</Accordion.Header>
          <Accordion.Body>

            <h3>Citing QAML</h3>
            <div className="p-3 rounded bg-secondary-subtle">
              <ReactMarkdown>{QAML_CITATION}</ReactMarkdown>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};