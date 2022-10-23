import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading/Heading";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Section>
        <Heading text="Title"></Heading>
        <Section>
          <Heading text="Heading"></Heading>
          <Heading text="Heading"></Heading>
          <Heading text="Heading"></Heading>
          <Section>
            <Heading text="Sub-heading"></Heading>
            <Heading text="Sub-heading"></Heading>
            <Heading text="Sub-heading"></Heading>
            <Section>
              <Heading text="Sub-sub-heading"></Heading>
              <Heading text="Sub-sub-heading"></Heading>
              <Heading text="Sub-sub-heading"></Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}

export default App;
