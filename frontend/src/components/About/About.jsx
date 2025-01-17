import React from 'react'
import './About.css'
import { NavLink } from 'react-router-dom';
import MetaTags from '../../MetaTags/MetaTags';
function About() {
  return (
 <>
 <MetaTags  
  title = "Toronto Pest Control Services"
  description = "Get reliable pest control services in Toronto! Our experts provide eco-friendly solutions to eliminate pests from your home or business. We specialize in safe and effective removal of rodents, insects, bed bugs, and more. Serving residential and commercial properties across Toronto with guaranteed satisfaction. Call now for a free consultation!"
  keywords = "Toronto pest control, pest removal Toronto, eco-friendly pest control, residential pest control, commercial pest control"
 
 />
 <section
    className="relative bg-cover bg-center bg-no-repeat h-[60vh] flex items-center"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kD5LHQeDanpFvM4nmOJmrFEhIiqZtuH_xA&s')`
      }}
    >
     
      <div className="bg-green-800/70 w-full h-full absolute top-0 left-0"></div>
      <div className="relative z-10 max-w-xl pl-8 md:pl-16 lg:pl-20 text-white">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          Good Night, <br /> Sleep Tight, <br />
          Leave the rest to Us.
        </h1>
        <p className="text-sm md:text-base font-light mb-6">
          Safe, affordable, award-winning Pest Control for your Home or Business
          in the Greater Toronto Area of Ontario.
        </p>
        <NavLink
        
        to="/"
        
        
      >
         <button className="px-6 py-3 bg-white text-green-800 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all">
          About → Home
        </button>
      </NavLink>
       
      </div>
      
    </section>




    <section id="pest-control-section">
    <div id="pest-control-left">
        <div>
            <p className="text-3xl mb-4">All Pest Control Services in the Greater Toronto Area and Southern Ontario</p>
            <p className="mb-4">Addison is best known for our bed bug extermination work. But we do ALL types of pest control.</p>
            <p className="mb-4">Here’s what to expect:</p>
            <p className="mb-4">1. We will answer all of your questions — and tell you the important facts you may not have thought to ask about.</p>
            <p className="mb-4">2. We will give you a quote over the phone — no waiting.</p>
            <p className="mb-4">3. Our flat-rate pricing includes various warranty options for any location in the Greater Toronto Area and Southern Ontario.</p>
            <p className="mb-4">The vast majority of Toronto and Southern Ontario area bed bug problems that we treat are completely eradicated in just one visit. Our unique bed bug treatment process is much more thorough than the average service. We do three different treatments all on the same day (heat + powder + spray). For rare cases at risk of re-infestation from outside factors, we offer follow-up inspections and our custom protection plans.</p>
            <p className="mb-4">4. We will schedule an appointment time that is best for you – morning, daytime or evening. Same-day service is available.</p>
            <p>We have a 100% success rate with all of our Pest Control Services, guaranteed.</p>
            <NavLink
          to="/contact"
           className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          ><button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-200 mt-12">
           Free Quote
          </button>
          </NavLink>
        </div>
    </div>
    <div id="pest-control-right">
        <img src="https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543532696747-WSAXX75DRHWSCB6AK5VX/addison_workers.jpeg?format=750w"
         alt="Pest Control" />
    </div>
</section>

     

 
 </>
  )
}

export default About;