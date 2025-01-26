import React from "react";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div>
      <h1>À propos</h1>
      <p>
        Voici la page à propos, où nous partageons des informations sur notre
        site. Mais je ne sais pas quoi mettre ici. 
        Voci la page d'accueil : <Link to="/">Accueil</Link>
        
      </p>
    </div>
  );
};

export default About;
