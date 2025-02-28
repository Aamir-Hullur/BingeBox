import './App.css'

function App() {
  return (
    <>
      <Text string="Hello, World!" />
      <Text string="This is a React app." />
    </>
  )
}

function Text({string}) {
  return (
    <div>
      <p>{string}</p>
    </div>
  )
}

export default App
