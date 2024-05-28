import "./footer-button.scss";

interface FooterButtonProps {
  icon: string;
  link: string;
  alt: string;
}

function FooterButton({ icon, link, alt }: FooterButtonProps) {
  return (
    <div className="footerButton">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={alt} />
      </a>
    </div>
  );
}

export default FooterButton;
