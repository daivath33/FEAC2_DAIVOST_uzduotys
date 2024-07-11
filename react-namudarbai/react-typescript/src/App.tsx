import Hello from "./components/Hello";
import ItemsList from "./components/ItemsList";
import UserProfile from "./components/UserProfile";
import { sum, greet, getFirstElement, getColorName, Color } from "./homework";

const languages = ["JavaSript", "TypeScrpt", "Java", "Phyton"];
const user = { name: "Justas", age: 35 };

function App() {
  console.log("SUM: ", sum(10, 20));
  console.log("GREETING: ", greet({ name: "Justas", age: 35 }));
  console.log("GET FIRST ELEMENT: ", getFirstElement([20, 30, 50]));
  console.log("GET COLOR NAME: ", getColorName(Color.Green));

  return (
    <div className="container">
    <h1>React - Typescript Homework</h1>
    <Hello name="petras" />
    <ItemsList items={languages} />
    <UserProfile user={user} />
  </div>
  )
}

export default App;
