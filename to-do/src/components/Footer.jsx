import { FaRocket } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Developer</p>
      <div className="contato">
        <a
          href="https://www.linkedin.com/in/joao-da-silva-barbosa/"
          target="_blank"
          title="Linkedin"
        >
          <i class="devicon-linkedin-plain"></i>
        </a>
        <a
          href="https://github.com/JoaoSBarbosa"
          target="_blank"
          title="Github"
        >
          <i class="devicon-github-original"></i>
        </a>
        <a
          href="https://joaosbarbosa.com.br/"
          target="_blank"
          title="Portfólio"
        >
          <i class="devicon-devicon-plain"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
