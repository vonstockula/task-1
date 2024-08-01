import "./App.css";
import { Card } from "./components/Card";
import { ProfileCard } from "./components/ProfileCard";
import data from "./data/data.json";
function App() {
  return (
    <>
      <div className="app-container">
        {data.map((item, index) => (
          <Card
            key={index}
            iconClass={item.iconClass}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="task1_2">
        <ProfileCard
          date={`3.3.0 10/10/2000`}
          featureName="New"
          featureColor="green"
          fullName={`Rinor Ajeti`}
        />
        <ProfileCard
          date={`3.3.0 10/10/2000`}
          featureName="Leci"
          featureColor="brown"
          fullName={`Rinor Ajeti`}
        />
        <ProfileCard
          date={`3.3.0 10/10/2000`}
          featureName="Cima"
          featureColor="blue"
          fullName={`Rinor Ajeti`}
        />
        <ProfileCard
          date={`3.3.0 10/10/2000`}
          featureName="Test"
          fullName={`Rinor Ajeti`}
        />
        <ProfileCard
          date={`3.3.0 10/10/2000`}
          featureName="New"
          featureColor="red"
          fullName={`Rinor Ajeti`}
        />
        <ProfileCard
          date={`3.3.0 10/10/2000`}
          featureName="New"
          featureColor="red"
          fullName={`Test`}
        />
      </div>
    </>
  );
}

export default App;
