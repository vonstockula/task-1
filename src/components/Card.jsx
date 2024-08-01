import "./Card.css";
export const Card = ({ iconClass, title, description }) => {
  return (
    <article className="cart">
      <span className="icon">
        <i className={iconClass}></i>
      </span>
      <div className="details">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
    </article>
  );
};
