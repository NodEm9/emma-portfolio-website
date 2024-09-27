import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Markdown from 'markdown-to-jsx'
import Code from '../code/Code'
import ImageComponent from '../img/Image'


function PostsView() {
  const [blogPost, setBlogPost] = useState("");

  // Fetch markdown file and set it to state on component mount
  useEffect(() => {
    import('../markdown/article.md')
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setBlogPost(res))
          .catch(err => { throw new Error(err) })
      })
  }, []);

  return (
    <Row md={12} className='mx-auto mt-5 pt-5 justify-content-center'>
      <Col lg={6} md={10} xs={4} sm={3} className='mt-3 pt-3 justify-content-center fs-5 lh-base'>
        <Markdown
          options={{
            overrides: {
              code: {
                component: Code,
              },
              img: {
                component: ImageComponent,
              },
              h1: {
                props: {
                  className: 'text-center fs-2 fw-bold',
                },
              },
            },
          }}
        >
          {blogPost}
        </Markdown>
      </Col>
    </Row>
  )
}

export default PostsView
