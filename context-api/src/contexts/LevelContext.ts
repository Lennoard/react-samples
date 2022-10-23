import { createContext } from "react";
import { HeadingLevel } from "../components/Heading/HeadingLevel";

export const LevelContext = createContext(HeadingLevel.H1);
