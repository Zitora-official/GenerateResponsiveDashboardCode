import "./Dashboard.css";

const assetPathPrefix = "/assets";

const imgMic        = `${assetPathPrefix}/8bb49.svg`;
const imgSend       = `${assetPathPrefix}/01273.svg`;
const imgDoctor     = `${assetPathPrefix}/5be37.svg`;
const imgWeather    = `${assetPathPrefix}/1d0b1.svg`;
const imgSearchIcon = `${assetPathPrefix}/9b062.svg`;
const imgStatusDot  = `${assetPathPrefix}/1c17f.svg`;

export default function App() {
  return (
    <div className="dashboard">

      {/* ── Header ── */}
      <header className="dashboard__header">
        <div className="header__brand">
          <span className="header__title">ZITORA // DEV_CONSOLE</span>
          <span className="header__version">v1.0</span>
        </div>

        <div className="header__search">
          <span className="header__search-placeholder">{`>_ search_db`}</span>
          <img src={imgSearchIcon} alt="" className="header__search-icon" />
        </div>

        <div className="header__actions">
          <img src={imgStatusDot} alt="online" className="status-dot" />
          <span className="header__time">00:05 IST</span>
          <img src={imgWeather} alt="weather" className="weather-icon" />
          <span className="header__temp">24°C</span>
          <img src={imgDoctor} alt="user" className="doctor-icon" />
        </div>
      </header>

      {/* ── Main body ── */}
      <main className="dashboard__body">

        {/* Left sidebar */}
        <aside className="col-left">
          <p className="greeting">SHIVANSH | MBBS Y.3</p>
        </aside>

        {/* Center — avatar + bot + input */}
        <section className="col-center">
          {/* Lottie player mounts here */}
          <div id="avatar-container" />

          <div className="bot-port">
            <div className="bot-face" />
            <div className="txt-out-port" />
          </div>

          <div className="input-panel">
            <div className="txt-input">
              <span className="txt-input__placeholder">{`>enter_cmd...`}</span>
            </div>
            <button className="icon-btn" aria-label="Send">
              <img src={imgSend} alt="" className="send-icon" />
            </button>
            <button className="icon-btn" aria-label="Microphone">
              <img src={imgMic} alt="" className="mic-icon" />
            </button>
          </div>
        </section>

        {/* Right sidebar */}
        <aside className="col-right" />

      </main>
    </div>
  );
}
