
import './ob.css';

const Ob = () => {
  return (
    <div className="objectives-container">
              <video src="/video/v2.mp4" autoPlay loop muted />
      <h1 className="objectives-title">Objectives</h1>
      <div className="card-container">
        <div className="card">
          <div className="card-contenttt">
            <h2>Flexible Solution for Solar PV</h2>
            <p>This energy tracker  is designed to be a comprehensive solution for measuring Solar PV Applications, providing flexibility for both DC and AC power flow.
</p>
          </div>
        </div>
        <div className="card">
          <div className="card-contenttt">
            <h2>Online Remote Monitoring</h2>
            <p>Through the Blynk app, we can monitor these parameters in real-time from anywhere, making it convenient for online remote monitoring.
</p>
          </div>
        </div>
        <div className="card">
          <div className="card-contenttt">
            <h2>Test System Performance</h2>
            <p>Conduct comprehensive testing and validation of the Two-Way Meter system and the mobile app to ensure accuracy, reliability, and seamless functionality under various operational scenarios.
</p>
          </div>
        </div>
        <div className="card">
          <div className="card-contenttt">
            <h2>Seek User Feedback</h2>
            <p>Encourage user feedback through pilot implementations, and utilize this feedback to make continuous improvements to both the hardware and software components, enhancing the overall user experience and system performance.
</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ob;