import image from "../assets/blackhole.png";
import "./ProfileCard.css";

export const ProfileCard = ({ date, featureName, featureColor, fullName }) => {
  return (
    <article className="card2">
      <h1>{date}</h1>
      <div className="details2">
        <p
          className="feature"
          style={{ backgroundColor: `${featureColor}`, color: `white` }}
        >
          {featureName}
        </p>
        <img src={image} alt="" width={50} height={50} />
        <h2 className="name">{fullName}</h2>
      </div>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ex
        dolor corrupti voluptatibus, architecto quos exercitationem iure
        dignissimos sunt ipsam ea sint qui odio ipsa molestiae perferendis
        veniam ipsum sequi.
      </p>
      <button className="button">Download</button>
    </article>
  );
};
