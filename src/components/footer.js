/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        Направљено са љубављу{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        од оних који воле <Link to="/">Шебет</Link>
      </p>
    </div>
  </footer>
)

export default Footer
