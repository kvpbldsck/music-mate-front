import { useAppContext } from "../../store/appContext";
import "./ThemeSwitcher.css"

function ThemeSwitcher() {
  const { state, dispatch } = useAppContext();

  return (
    <button onClick={() => dispatch({ type: "TOGGLE_THEME"})} className="btn-toggle">
      Switch to {state.theme === "light" ? "dark" : "light"} theme
    </button>
  )
}

export default ThemeSwitcher; 