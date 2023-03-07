import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import projectsData from "./projects.json";

export const Projects = () => {
  console.log("======================> ", projectsData["Django"]);
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Django</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Django+React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">JavaScript</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Bootstrap</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth">Java</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    {/* ********************  */}
                    <Nav variant="pills" className="mb-5">
                      <Nav.Item className="col">
                        <Nav.Link eventKey="first">Django</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="col">
                        <Nav.Link eventKey="full-stack">Django+React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="col">
                        <Nav.Link eventKey="js">JavaScript</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="col">
                        <Nav.Link eventKey="bootstrap">Bootstrap</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="col">
                        <Nav.Link eventKey="java">Java</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                       {/* first event key ====> Django  */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsData["Django"].map((project, index) => {
                            return <ProjectCard key={index} {...project} /> ;
                          })}
                          
                        </Row>
                      </Tab.Pane>
                      {/* second event key ==== full-stack */}
                      <Tab.Pane eventKey="full-stack">
                        <Row>
                          {projectsData["Full-Stack"].map((project, index) => {
                            return <ProjectCard key={index} {...project} /> ;
                          })}
                          
                        </Row>
                      </Tab.Pane>
                      {/* Third event key ==== javaScript */}
                      <Tab.Pane eventKey="js">
                        <Row>
                          {projectsData["Full-Stack"].map((project, index) => {
                            return <ProjectCard key={index} {...project} /> ;
                          })}
                          
                        </Row>
                      </Tab.Pane>
                      {/* Fourth event key ==== bootstrap */}
                      <Tab.Pane eventKey="bootstrap">
                        <Row>
                          {projectsData["Full-Stack"].map((project, index) => {
                            return <ProjectCard key={index} {...project} /> ;
                          })}
                          
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="java">
                        <Row>
                          {projectsData["Full-Stack"].map((project, index) => {
                            return <ProjectCard key={index} {...project} /> ;
                          })}
                          
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
