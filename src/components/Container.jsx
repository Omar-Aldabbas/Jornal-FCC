import { journalData } from "./Data";
import { JornalCard } from "./JornalCard";

export const Container = () => {
  return (
    <div className="jornal-items">
      {journalData.map((item, _) => (
        <JornalCard
            key={item.id}
          img={item.img}
          name={item.name}
          location={item.location}
          link={item.link}
          date={item.date}
          text={item.text}
        />
      ))}
    </div>
  );
};
