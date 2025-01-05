import backgroundImage from '../../images/chef-pic.avif'
const Banner = () => {
    return (
        <div>
            <div
  className="hero h-[600px]"
  style={{
    backgroundImage: `url(${backgroundImage})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="md:w-9/12 w-full mx-auto">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">
      Our talented chefs craft each dish with precision, using the finest seasonal ingredients sourced locally and globally to create a menu that evolves with the seasons. Whether you're savoring our tender seared scallops, indulging in the richness of our handcrafted pasta, or enjoying the vibrant flavors of our signature dishes, every plate tells a story.
      </p>
    
      <button className="btn bg-[#0BE58A] rounded-2xl border-0">Explore Now</button>
      <button className="btn mx-3 bg-transparent text-white rounded-2xl">Our Feedback</button>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;