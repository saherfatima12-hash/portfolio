const Hero = () => {
  return (
    <div id = "hero">
      <div className="hero">

      <div className="overlay">
        Hello! I AM <span>Saher Fatima</span>
      </div>
      
      <div className="hero-image">
        <img src="/girly.png" alt="profile" />
          
          

        {/* OVERLAY TEXT */}
        
      </div>
        

       
        

      {/* TEXT SIDE */}
      <div className="hero-text">
        <p className="small">
          A Designer who 
        </p>

        {/* BIG TEXT */}
        <h1 className="big">
           judge a book <br/>by its <span>cover</span>
        </h1>

        {/* SMALL DESCRIPTION */}
        <p className="desc">
          Because if cover doesn’t impress you, what else can?
        </p>
      </div>

    </div>
    </div>
  );
};

export default Hero;