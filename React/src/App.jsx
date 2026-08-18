import './App.css'
import Card from './components/Card.jsx'

function App() {
  return (
    <>      
        <Card
          //props
          title="Materi 1"
        >
          {/* disini tempat didefinisikan parameter children */}
          <p>Isi konten.....</p>
        </Card>
      </>
    )
}

export default App
