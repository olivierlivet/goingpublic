import Form from './Form'
import Welcome from './Welcome'
import Helmet from 'react-helmet'
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Going Public</title>
        <meta name="description" content="Agence conseil en relations publiques" />
        <link rel="shortcut icon" href='./favicon.png' />
      </Helmet>
      <Welcome />
      <Form />
    </div>
  );
}

export default App