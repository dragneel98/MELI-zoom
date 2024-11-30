import './App.css'
import Header from './header/header'
import ProductPage from './product/productView'
// import ZoomImage from './zoomImg'

function App() {

  return (
    <main>
      <Header></Header>
      {/* <ZoomImage src="/src/assets/img.png" zoomSrc="/src/assets/img.png" /> */}
      <ProductPage
      imageUrl="http://http2.mlstatic.com/D_978173-MLA32582347639_102019-O.jpg"
      thumbnails={[
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
      ]}
      title="Peluche de Stich"
      price={104757.6}
      description="Un peluche para que recuerdes que ohana significa familia."
      stockAvailable={true}
    />
    </main>
  )
}

export default App