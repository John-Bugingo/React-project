import '../css/learn.css';
const LearnMoreComp = () => {
  return (
    <>
  <div className="three-column">
  <div className="foarma">
      <img src="3-column-preview-card-component-main/images/icon-sedans.svg" alt="" />
      <h1>SEDANS</h1>
      <p>Choose a sedan for its <br/>affodability and excellent <br/>fuel economy. Ideal for 
          <br/>cruising in the city or on<br/>your next road trip.</p>
      <label style={{color: "rgb(237, 170, 34)"}}>Learn More</label>
  </div>
<div className="foarmb">
  <img src="3-column-preview-card-component-main/images/icon-suvs.svg" alt=""/>
  <h1>SUVS</h1>
  <p>Take an SUV for its spacious <br/> interior, power, and <br/>versatility. Perfect for your 
      <br/> next family vacation and <br/>off-road adventures.</p>
      <label href="" style={{color: "rgb(40, 160, 203)"}}>Learn More</label>
</div>
<div className="foarmc">
  <img src="../public/images/icon-luxury.svg" alt=""/>
  <h1>LUXURY</h1>
  <p>Cruise in the best car brands <br/> without the bloated prices. <br/>Enjoy the enhanced comfort 
      <br/> of a luxury rental and arrive <br/> in style.</p>
      <label href="/" style={{color:"rgb(3, 78, 68)"}}>Learn More</label>
</div>
</div>
</>
  );
};
export default LearnMoreComp;
