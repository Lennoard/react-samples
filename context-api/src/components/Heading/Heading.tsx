import { HeadingLevel } from "./HeadingLevel";
import { useContext } from 'react';
import { LevelContext } from "../../contexts/LevelContext";

interface HeadingProps {
  text: string;
}

export default function Heading({ text }: HeadingProps) {
  const level = useContext(LevelContext);

  switch (level) {
    case HeadingLevel.H1:
      return <h1>{text}</h1>;
    case HeadingLevel.H2:
      return <h2>{text}</h2>;
    case HeadingLevel.H3:
      return <h3>{text}</h3>;
    case HeadingLevel.H4:
      return <h4>{text}</h4>;
    case HeadingLevel.H5:
      return <h5>{text}</h5>;
    case HeadingLevel.H6:
      return <h6>{text}</h6>;
    default:
      throw Error("Unknown level: " + level);
  }
}
