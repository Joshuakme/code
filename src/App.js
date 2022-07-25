// Import Components
import BarChart from "./components/bar-chart/bar-chart";
import ChartHeader from "./components/bar-chart/chart-header";
// Import Styles
import "./styles/app.css";
// Import Data
import dataList from "./data.json";

function App() {
  return (
    <main>
      <section className="card">
        <ChartHeader />
        <div className="card-content">
          <BarChart dataList={dataList} />

          <div className="summary">
            <div className="summary-left">
              <h3>Total this month</h3>
              <p>$478.33</p>
            </div>
            <div className="summary-right">
              <p>+2.4%</p>
              <h3>from last month</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
