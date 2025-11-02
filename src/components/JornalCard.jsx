import { MapPin } from "lucide-react";

export const JornalCard = ({ img, name, location, link, date, text }) => {
  return (
    <article className="journal-entry">
      {/* Image */}
      <div className="main-image-container">
        <img src={img} alt={location} className="main-img" />
      </div>

      {/* Info */}
      <div className="info-container">
        <div className="upper-info">
          <span className="country">
            <MapPin color="red" />
            {name.toUpperCase()}
          </span>
          <a href={link} title={`See the beauty of ${name}`} target="_blank" rel="noopener noreferrer">
            View in Google Maps
          </a>
        </div>

        {/* Title */}
        <h2 className="entry-title">{location}</h2>

        <div className="trip-info">
          <p className="trip-dates">{date}</p>
          <p className="entry-text">{text}</p>
        </div>
      </div>
    </article>
  );
};
