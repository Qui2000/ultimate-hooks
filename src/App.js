import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import ToggleTheme from "./components/ToggleTheme";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        </AuthContextProvider>
        <ToggleTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
