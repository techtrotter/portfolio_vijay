import { Container, Row, Col, Spinner } from "react-bootstrap";
import PostsCard from "./PostsCards";
import Particle from "../Particle";
import React, { useState, useEffect } from "react";

function Posts() {
  const [hashnodePosts, setHashnodePosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHashnodePosts();
  }, []);

  const fetchHashnodePosts = async () => {
    try {
      const response = await fetch("https://api.hashnode.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
          {
            user(username: "bijoytrektech") {
              publication {
                posts(page: 0) {
                  _id
                  title
                  brief
                  coverImage
                  slug
                }
              }
            }
          }
        `,
        }),
      });
      const { data } = await response.json();
      setHashnodePosts(data.user.publication.posts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Hashnode posts:", error);
      setLoading(false);
    }
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Posts </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few posts I've published recently.
        </p>

        {loading ? (
          <Spinner animation="border" variant="primary" role="status">
            <span className="sr-only"></span>
          </Spinner>
        ) : (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {hashnodePosts.map((post) => (
              <Col md={4} className="project-card" key={post._id}>
                <PostsCard
                  imgPath={post.coverImage}
                  title={post.title}
                  poLink={`https://bijoytrektech.hashnode.dev/${post.slug}`}
                />
              </Col>
            ))}
          </Row>
        )}

        {/* Tagline Section */}
        <Row className="tagline-section" style={{ paddingTop: "50px", textAlign: "center" }}>
          <Col>
            <h2 style={{ color: "#c084f5" }}>
              Striving to build tech that matters, while crushing trails, exploring the world, and hitting the gym!
            </h2>
          </Col>
        </Row>

        {/* LinkedIn Profile Link */}
        <Row style={{ paddingTop: "20px", textAlign: "center" }}>
          <Col>
            <a
              href="https://www.linkedin.com/in/bijoy-laxmi-biswas-cse07/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-link"
              style={{ color: "#0e76a8", fontSize: "20px" }}
            >
          
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Posts;
