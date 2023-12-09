const HomePage = () => {
  return(
    <>
     <div className="container">
    <div className="two-column">
      <div className="div1">
        <h1 className="heading">Get <label style={{color: "rgb(181, 34, 189)"}}>insights </label>that help your business grow.
        </h1>
        <p className="paragraph"> Discover the benefits of data analytics and make better decisions regarding revenue,
          customer
          experience, and overall efficiency.</p>
        <div className="nav">
  
          <div className="mn">
            <h2 className="heading">10k+</h2>
            <p className="paragraph">companies </p>
          </div>
          <div className="mn">
            <h2 className="heading">314 </h2>
            <p className="paragraph">templates</p>
          </div>
          <div className="mn">
            <h2 className="heading">12m+</h2>
            <p className="paragraph">queries </p>
          </div>
        </div>
      </div>
  
      <div className="div2">
        <div className="stylish"></div>
        <img src="./images/image-header-desktop.jpg" alt="" style={{height: "565px"}}/>
      </div>
    </div>
  </div>
    </>
  );
};
export default HomePage;
