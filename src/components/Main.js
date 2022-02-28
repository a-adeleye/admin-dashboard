import Johnny from "../images/Johnny.jpg";
import Angela from "../images/Angela.jpg";
import Mickey from "../images/Mickey.jpg";
import Eve from "../images/Eve.jpg";
import Adam from "../images/Adam.jpg";
import David from "../images/David.jpg";
import Julia from "../images/Julia.jpg";
import Stefan from "../images/Stefan.jpg";
import Rose from "../images/Rose.jpg";
import lineChart from "../images/line-chart.jpg";
import cloud from "../images/cloud.jpg";

function Main() {
  return (
    <main>
      <div className="members">
        <div className="member">
          <div className="member-image">
            <img src={Johnny} alt="Johnny" />
          </div>
          <p>Johnny</p>
        </div>
        <div className="member">
          <div className="member-image">
            <img src={Angela} alt="Angela" />
          </div>
          <p>Angela</p>
        </div>
        <div className="member">
          <div className="member-image">
            <img src={Mickey} alt="Mickey" />
          </div>
          <p>Mikey</p>
        </div>
        <div className="member">
          <div className="member-image">
            <img src={Eve} alt="Eve" />
          </div>
          <p>Eve</p>
        </div>
        <div className="member">
          <div className="member-image">
            <img src={Adam} alt="Adam" />
          </div>
          <p>Adam</p>
        </div>
        <div className="member">
          <div className="member-image">
            <img src={David} alt="David" />
          </div>
          <p>David</p>
        </div>
        <div className="member">
          <div className="member-image">
            <img src={Julia} alt="Julia" />
          </div>
          <p>Julia</p>
        </div>
        <div className="member">
          <div className="member-image">
            <img src={Stefan} alt="Stefan" />
          </div>
          <p>Stefan</p>
        </div>
        <div className="member">
          <div className="member-image">
            <img src={Rose} alt="Rose" />
          </div>
          <p>Rose</p>
        </div>
      </div>
      <div className="performance">
        <h5>30 Days Performance</h5>
        <div className="cards">
          <div className="views-card">
            <p className="grey">VIEWS</p>
            <p className="white">7,482,120</p>
          </div>
          <div className="follows-card">
            <p className="grey">FOLLOWS</p>
            <p className="white">54,364</p>
          </div>
          <div className="likes-card">
            <p className="grey">LIKES</p>
            <p className="white">126,685</p>
          </div>
        </div>
      </div>
      <div className="analytics">
        <div className="analytics-left">
          <h5>Analytics</h5>
          <div className="line-chart">
            <img src={lineChart} alt="line chart" />
          </div>
          <div className="formation">
            <div className="strange-clouds">
              <div className="formation-top">
                <img src={cloud} alt="cloud" />
                <div className="formation-pause">
                  <i className="fa-solid fa-pause"></i>
                </div>
              </div>
              <div>
                <p>
                  <strong>Strange Clouds Formation</strong>
                </p>
                <p className="grey">By Mike Taylor</p>
              </div>
            </div>
            <div className="white-card">
              <div className="white-card-button">
                <i className="fa-solid fa-calendar-days"></i>
              </div>
              <p>Scheduled Posts</p>
            </div>
            <div className="white-card">
              <div className="white-card-button">
                <i className="fa-solid fa-plus"></i>
              </div>
              <p>Add new post</p>
            </div>
          </div>
        </div>
        <div className="analytics-right">
          <h5>Events Distribution</h5>
          <div className="last-thirty-days">
            <h6>Last 30 Days Performance</h6>
            <div className="chart">
              <div className="pie-chart">
                <h4>300k</h4>
                <p>total events</p>
              </div>
            </div>
            <h6>Events DISTRIBUTION</h6>
            <div className="tiles">
              <div className="tile">
                <div className="like"></div>
                <p>Likes</p>
              </div>
              <div className="tile">
                <div className="views"></div>
                <p>Views</p>
              </div>
              <div className="tile">
                <div className="follows"></div>
                <p>Follows</p>
              </div>
              <div className="tile">
                <div className="shares"></div>
                <p>Shares</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="statistics"></div>
    </main>
  );
}

export default Main;
