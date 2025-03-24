import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import { Theme } from 'common/enums'
import { Spacer } from 'components'

export const Navigation = () => {
  const onThemeSelection = (theme: Theme) => {
    if (theme === Theme.AUTO) {
      document.documentElement.setAttribute(
        'data-bs-theme',
        window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.DARK : Theme.LIGHT
      )
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  return (
    <>
      <Navbar collapseOnSelect expand="md" className="bg-body-tertiary px-5">
        <Navbar.Brand>Jason's Homepage</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/experience">
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to="/research">
              Research
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/jasontslxd">
              <span className="d-md-none me-2">GitHub</span>
              <i className="bi bi-github" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/jason-tsang-b775b51a9/">
              <span className="d-md-none me-2">LinkedIn</span>
              <i className="bi bi-linkedin" />
            </Nav.Link>
            <NavDropdown className="ms-5" title="Theme">
              <NavDropdown.Item onClick={() => onThemeSelection(Theme.LIGHT)}>
                Light <i className="bi bi-brightness-high-fill" />
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => onThemeSelection(Theme.DARK)}>
                Dark <i className="bi bi-moon-fill" />
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => onThemeSelection(Theme.AUTO)}>
                Auto <i className="bi bi-laptop" />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Spacer size="xxlg" />
    </>
  )
}
