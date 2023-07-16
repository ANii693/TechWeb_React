import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
      <>
      <div className = "home" >
        <main>
            <h1>Tech</h1>
            <p>innovation in world</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            para explain urself
            Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eum totam molestiae. Laudantium, repellat architecto aliquid necessitatibus eum magnam nam? Molestiae odio 
          </p>
        </div>
      </div>
      <div className="home3"  id="about">
        <div>
          <h1>Who am I?</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur earum ad expedita libero repudiandae aliquam impedit recusandae animi quisquam! Placeat voluptatum distinctio magnam, id ratione, minus error natus fugit ducimus aut odio sed corporis ab earum numquam provident. Eligendi repudiandae blanditiis cum vero rerum. Laborum sint incidunt dignissimos soluta, dolorum animi mollitia repudiandae repellendus, ab reprehenderit quam numquam possimus odio veniam. Corrupti maxime aliquid voluptatum natus libero, consequatur molestiae ipsum temporibus iusto! Temporibus, sit totam! Qui nulla officia fugiat velit voluptate debitis dolorum a dolore repellendus quibusdam illo sed. Amet, consectetur error.</p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay:"0.3s",}}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{animationDelay:"0.5s",}}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.7s",}}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>
            <div style={{animationDelay:"1s",}}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
      </>
  );
};

export default Home;
