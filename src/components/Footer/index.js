import siteMetadata from "../../helpers/siteMetaData";
import GitHubIcon from "../social-icons/github";
import LinkedInIcon from "../social-icons/linkedin";


const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16 w-full inset-x-0 bottom-0">
        <div className="flex mb-8 space-x-4 text-gray-500">
          <div className="text-gray-500 w-6 h-6 mr-8">
            <a
              href={ siteMetadata.linkedin }
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="text-gray-500 w-6 h-6">
            <a
              href={ siteMetadata.siteRepo }
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500">
          <div>{ ` • ` }</div>
          <div>{ siteMetadata.author }</div>
          <div>{ ` • ` }</div>
          <div>{ `© ${new Date().getFullYear()}` }</div>
          <div>{ ` • ` }</div>
        </div>
        <div className="mb-8 text-sm text-gray-500">
          Minha Loja
        </div>
      </div>
    </footer>
  );
};

export default Footer;
