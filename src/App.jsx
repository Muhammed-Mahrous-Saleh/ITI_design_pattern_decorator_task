import "./App.css";

import useAnalytics from "./hooks/analytics";

function App() {
    useAnalytics("pageview");
    return (
        <>
            <h1 className="text-7xl font-bold text-center">Hello, World</h1>
            <div>Welcome to My Page</div>
        </>
    );
}

export default App;
