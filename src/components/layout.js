import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"


import background from "../../content/assets/background.jpg"


class Layout extends React.Component {
  render() {

    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    
    const styles = {
      paperContainer: {
          backgroundImage: `url(${background})`
      }

    };
    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return ( 
      <div
      
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,          
        }
      }           
      >
        <header>{header}</header>
        <main>{children}</main>
        
        <footer>
          © {new Date().getFullYear()}, Power by
          {` `}
          <a href="mailto:amoritasaito@gmail.com?subject=Blog Feedback">AM</a>
        </footer>
      </div>


    )

  }
}

export default Layout

