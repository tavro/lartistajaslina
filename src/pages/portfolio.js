import preview1 from '../images/preview_1_square.jpg'
import preview2 from '../images/preview_2_square.jpg'
import preview3 from '../images/preview_3_square.jpg'
import preview4 from '../images/preview_4_square.jpg'
import preview5 from '../images/preview_5_square.jpg'
import preview6 from '../images/preview_6_square.jpg'
import preview7 from '../images/preview_7_square.jpg'
import preview8 from '../images/preview_8_square.jpg'
import preview9 from '../images/preview_9_square.jpg'
import preview10 from '../images/preview_10_square.jpg'
import preview11 from '../images/preview_11_square.jpg'
import preview12 from '../images/preview_12_square.jpg'
import preview13 from '../images/preview_13_square.jpg'
import preview14 from '../images/preview_14_square.jpg'
import preview15 from '../images/preview_15_square.jpg'
import preview16 from '../images/preview_16_square.jpg'

function Portfolio() {
  return (
    <div className="Portfolio" id="portfolio">
        <h2>Portfolio</h2>
        <div className="Images">
          <div className="Image"><img src={preview1}/></div>
          <div className="Image"><img src={preview2}/></div>
          <div className="Image"><img src={preview3}/></div>
          <div className="Image"><img src={preview4}/></div>
          <div className="Image"><img src={preview5}/></div>
          <div className="Image"><img src={preview6}/></div>
          <div className="Image"><img src={preview7}/></div>
          <div className="Image"><img src={preview8}/></div>
          <div className="Image"><img src={preview9}/></div>
          <div className="Image"><img src={preview10}/></div>
          <div className="Image"><img src={preview11}/></div>
          <div className="Image"><img src={preview12}/></div>
          <div className="Image"><img src={preview13}/></div>
          <div className="Image"><img src={preview14}/></div>
          <div className="Image"><img src={preview15}/></div>
          <div className="Image"><img src={preview16}/></div>
        </div>
    </div>
  );
}

export default Portfolio;
