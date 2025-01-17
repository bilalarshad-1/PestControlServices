import React from 'react';
import { NavLink } from 'react-router-dom';
function Steps() {
  return (
    <>
      <div className="flex justify-center items-center w-[70%] mx-auto my-8">
        <h1 className="text-3xl md:text-[3rem] font-extrabold text-center">
          Our Bed Bug Extermination Process
        </h1>
      </div>

      <section className="flex w-[90%] md:w-[70%] mx-auto mt-[10vh] p-0 h-[80vh] md:h-[40vh]">
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold">Step 1: Heat Treatment.</h2>
          <p className="text-lg">
            After a bed bug inspection, heat is an essential part of bed bug remediation for bed bug exterminators because it kills bed bug eggs. Powders and sprays do not kill bed bug eggs. Even the products that claim to kill eggs are not consistently effective.
          </p>
        </div>
        <div className="flex-none w-[45%] h-[30vh] md:w-[45%] md:h-[30vh]">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543634469358-FDU71R4ZPHB788QFFSFC/bedroom_heat.png?format=1500w"
            alt="Heat Treatment" 
            className="w-full h-full object-cover" 
          />
        </div>
      </section>

      <section className="flex w-[90%] md:w-[70%] mx-auto my-0 p-0 h-[80vh] md:h-[40vh]">
        <div className="flex-none w-[45%] h-[30vh] md:w-[45%] md:h-[30vh]">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543634491604-K3G8BMMWUNLOQKC9F9PF/powder.png?format=1500w"
            alt="Powder Treatment" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold">Step 2: Bed Bug Powder Treatment.</h2>
          <p className="text-lg">
            This powder bed bug treatment we employ utilizes a special power duster device which injects powder into the walls through the electrical outlets and other cracks and holes. This will kill any bugs hiding within the walls and also creates a protective barrier between one room and the next. 
          </p>
        </div>
      </section>

      <section className="flex w-[90%] md:w-[70%] mx-auto my-0 p-0 h-[80vh] md:h-[40vh]">
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold">Step 3: Bed Bug Spray Treatment.</h2>
          <p className="text-lg">
            Our bed bug spray kills bed bugs on contact but also lasts as a protective surface treatment to keep your home and furniture protected for up to 6 months. This is the #1 key reason why most discount bed bug exterminators fail. Cheap exterminators use cheap sprays that only last 1 – 2 weeks.
          </p>
        </div>
        <div className="flex-none w-[45%] h-[30vh] md:w-[45%] md:h-[30vh]">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543634469358-FDU71R4ZPHB788QFFSFC/bedroom_heat.png?format=1500w"
            alt="Spray Treatment" 
            className="w-full h-full object-cover" 
          />
        </div>
      </section>
      <NavLink
            to="/services"
            className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
               <div className="flex justify-center mt-8">
  <button className="bg-green-800 text-white w-[50%] h-[8vh] text-lg font-bold rounded">
    LEARN MORE ABOUT OUR BED BUG TREATMENTS
  </button>
</div>
            
          </NavLink>
   
    </>
  );
}

export default Steps;