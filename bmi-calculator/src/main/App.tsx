import { useState } from "react";
import { BmiForm } from "../components/BmiForm";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./main.css";

interface AppState {
  value: number;
  calculated: boolean;
}

function App() {
  const [appState, setAppState] = useState<AppState>({
    value: 0.0,
    calculated: false,
  });

  const showValue = (value: number) => {
    setAppState({ ...appState, calculated: true, value: value });
  };

  return (
    <div id="container">
      <Header title="BMI Calculator" />

      <main>
        <h2>Type your data</h2>
        <BmiForm onCalculate={(value) => showValue(value)} />

        {
          appState.calculated ?
          (
            <div>
              <p>BMI:</p>
              <p>{appState.value.toFixed(2)}</p>
            </div>
          ) : <br/>
        }
      </main>

      <Footer title="R1 Software @ 2023" />
    </div>
  );
}

export default App;
