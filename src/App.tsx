import "./App.css"
import ComponentA from "./components/ComponentA"
import ComponentB from "./components/ComponentB"
import DividerComponent from "./components/DividerComponent"

function App() {
  return (
    <main className="h-screen px-5 py-10">
      <div className="flex h-full flex-1 overflow-y-hidden">
        <div className="h-full flex-1">
          <ComponentA />
        </div>
        <div className="h-full flex-shrink-0">
          <DividerComponent />
        </div>
        <div className="h-full flex-1">
          <ComponentB />
        </div>
      </div>
    </main>
  )
}

export default App
