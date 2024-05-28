import "./about-card.scss";

interface AboutCardProps {
  title: string;
  imageIcon: string;
  description: string;
}

function AboutCard({ title, imageIcon, description }: AboutCardProps) {
  return (
    <>
      <div className="aboutCard">
        <h4>{title}</h4>
        <img src={imageIcon} alt={description} />
        <p>{description}</p>
      </div>
    </>
  );
}

export default AboutCard;
