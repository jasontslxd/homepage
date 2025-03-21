import { Container } from "react-bootstrap";

export const Research = () => {
  return (
    <Container>
      <h1>Research</h1>
      <p>
        During my final year of my masters degree, I was studying quantum machine learning under the supervision of Dr. Muhammad Usman. I was fortunate enough
        to successfully publish two peer-reviewed papers on quantum generative adversarial networks and adversarial attacks in quantum machine learning.
      </p>

      <h3>PQWGAN</h3>
          <p>
            Patch quantum Wasserstein generative adversarial networks. It is a quantum generative adversarial network (QGAN) framework developed
            for my thesis that achieved state of the art performance in image generation with QGANs in 2022. The code to run the simulations are written in 
            python, and are ran on HPC services provided by the University of Melbourne and also Pawsey Supercomputing Centre. 
            The paper is published in IEEE Transactions on Quantum Engineering and can be found <a className="link" href="https://ieeexplore.ieee.org/abstract/document/10264175" target="blank">here</a>,
            while the source code can be found <a className="link" href="https://github.com/jasontslxd/PQWGAN" target="blank">here</a>.
          </p>
          <figure className="d-flex align-items-center justify-content-center">
            <div className="text-center">
              <img className="image" style={{width: '80%', height: 'auto', aspectRatio: '16/8'}} src={process.env.PUBLIC_URL + '/images/pqwgan.png'} alt="pqwgan circuit"/>
              <figcaption className="caption"><small className="text-muted">Quantum circuit diagram for the quantum generator.</small></figcaption>
            </div>
          </figure>

          <figure className="d-flex align-items-center justify-content-center">
            <div className="text-center">
              <a href="https://github.com/jasontslxd/PQWGAN" target="blank">
                <img className="image" style={{width: '80%', height: 'auto', aspectRatio: '16/8'}} src={process.env.PUBLIC_URL + '/images/pqwgan_samples.png'} alt="pqwgan samples"/>
              </a>
              <figcaption className="caption"><small className="text-muted">Sample outputs from the PQWGAN framework compared to WGAN-GP (classical machine learning) and real images.</small></figcaption>
            </div>
          </figure>
    </Container>
  );
};