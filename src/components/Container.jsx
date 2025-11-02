import journalData from "./Data";
import Entry from "./JornalCard";

export const Container = () => {
  const jornals = journalData.map((item, _) => (
    <Entry
      key={item.id}
      img={item.img}
      title={item.title}
      country={item.country}
      googleMapsLink={item.googleMapsLink}
      dates={item.dates}
      text={item.text}
    />
  ));

  return <div className="jornal-items">
    {jornals}
  </div>;
};
