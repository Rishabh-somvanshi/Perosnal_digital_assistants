import ProfileCard from "./ProfileCard";
import "bulma/css/bulma.css";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <div></div>

      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@Alexa99"
                image={AlexaImage}
                description="asdasdasdas asdasdasd asda as as asda qwdqdasdasd"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@Cortana32"
                image={CortanaImage}
                description="asdasdasdas asdasdasd asda as as asda qwdqdasdasd"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@Siri69"
                image={SiriImage}
                description="asdasdasdas asdasdasd asda as as asda qwdqdasdasd"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
