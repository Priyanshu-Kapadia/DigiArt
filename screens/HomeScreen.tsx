// import { RootTabScreenProps } from "../types";
import MasonryList from "../components/MasonryList";
import pins from "../assets/data/pins";

export default function HomeScreen() {
  return (
    <MasonryList pins={pins} />
  );
}