import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="sticky top-full ">
      <footer className="footer footer-center p-4 bg-slate-900 text-base-content">
        <aside className="flex gap-3">
          <Link to="https://github.com/siamshahriar">
            <FaGithub></FaGithub>
          </Link>
          <p>Md Shahriar Rahman</p>
          <Link to="https://www.linkedin.com/in/siam-shahriar/">
            <FaLinkedin />
          </Link>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
