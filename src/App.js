



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbars from './compound/Navbars'
import Logo from './compound/Logo'
import './compound/logo.css'
import Cardes from './compound/Cardes';
import Footer from './compound/Footer';


function App() {
  return (
    <div className="App">
      
      <Navbars></Navbars>
      <div class='tous'>
        <div>
      <img className='images ' src='khaled.jpg ' ></img>
      <p class="paragraphe">Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
      </div>
      </div>

      <Cardes></Cardes>
      <h1 class='contact'>Contact me</h1>
      <Logo></Logo>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
