import useLocalStorage from "./UseLocalStorage"
import './Theme.css'

function ThemeChange () {
    const[Theme, setTheme] = useLocalStorage('Theme', 'dark')

    const ToggleTheme = () => {
        setTheme(Theme === 'light' ? 'dark' : 'light')
    }
    console.log(Theme)

    return(
        <div className="light-dark-mode" data-theme={Theme}>
            <div className="container">
                <p>Hello theme changer(girghit)</p>
                <button onClick={ToggleTheme}>Change Theme</button>
            </div>
            
        </div>
    )
}

export default ThemeChange