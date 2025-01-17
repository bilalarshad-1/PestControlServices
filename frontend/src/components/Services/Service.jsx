import React from "react";
import Steps from "../Home/steps";
import MetaTags from "../../MetaTags/MetaTags";
const services = [
  { id: 1, name: "Bed Bug Extermination", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1540472615839-GV727NRT748BPLB0FNR9/bed_bug_silhouette_optimized.png?format=500w" },
  { id: 2, name: "Cockroach Extermination", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543434233059-WNVNQOICRTDFECBKF9HR/cockroach_optimize.png?format=500w" },
  { id: 3, name: "Rat Extermination", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543437389460-WTBY9I38M3FXCD7923VO/rat_optimized.png?format=500w" },
  { id: 4, name: "Mouse Extermination", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543434328566-L9WPCDC20YCU0GHXC20Y/Mice_optimized.jpg?format=500w" },
  { id: 5, name: "House Fly Extermination", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543437289719-BGN7MHIQ69TVPA25V4MW/flies.png?format=500w" },
  { id: 6, name: "Carpet Beetle Extermination", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543434965128-WNG8HX63M2TH1GGMPBP1/black_carpet_beetle_optimized.png?format=500w" },
  { id: 7, name: "Raccoon Relocation", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543437372497-01NVIW4LQ3M2MGAITH1H/raccoon_optimized.png?format=500w" },
  { id: 8, name: "Bee, Wasp and Hornet Extermination", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543434479567-6PW1C9S3LSFI7AV00MYI/bees-wasps-hornets_new.png?format=500w" },
  { id: 9, name: "Centipede Extermination", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543437237894-AMQAHZH7MG4UJ9ES0QXI/centipede-optimized.png?format=500w" },
  { id: 10, name: "Earwig Extermination", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543437264133-TN7K6A7MLBVCSGQ6RO8B/earwig.png?format=500w" },
  { id: 11, name: "Pantry Moth Extermination", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543438807429-ZYDQERRQ43KWVYZWOGW4/pantry_moths.png?format=500w" },
  { id: 12, name: "Clothing Moth Extermination", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543437302674-CD9IU4JBWU6EJXYBD7M0/moth.png?format=500w" },
  { id: 13, name: "Pillbug Extermination", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543437312566-PIVVEEKB83WR398TKHZP/pillbug.png?format=500w" },
  { id: 14, name: "Spider Extermination", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543437404342-W36FUWTMGC2ELZ4NE9UY/spiders.png?format=500w" },
  { id: 15, name: "Flea Extermination", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543437276403-Y9MHIMN7EO4M0MV9TNER/fleas.png?format=500w" },
  { id: 16, name: "Tick Extermination", image: "https://images.squarespace-cdn.com/content/v1/5b59f394f2e6b1558722427c/1543437302674-CD9IU4JBWU6EJXYBD7M0/moth.png?format=500w" },
];

const ServicesPage = () => {
  return (
   <>
   <MetaTags
    title = "Toronto Pest Control Services"
    description = "Get reliable pest control services in Toronto! Our experts provide eco-friendly solutions to eliminate pests from your home or business. We specialize in safe and effective removal of rodents, insects, bed bugs, and more. Serving residential and commercial properties across Toronto with guaranteed satisfaction. Call now for a free consultation!"
    keywords = "Toronto pest control, pest removal Toronto, eco-friendly pest control, residential pest control, commercial pest control"
   
   />
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-2"> Services</h2>
        <h2 className="text-1l font-semibold text-center mb-8"> Get reliable pest control services in Toronto! Our experts provide eco-friendly solutions to eliminate pests from your home or business. We specialize in safe and effective removal of rodents, insects, bed bugs, and more. Serving residential and commercial properties across Toronto with guaranteed satisfaction. Call now for a free consultation!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h5 >{service.name}</h5>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Steps />
   </>
  );
};

export default ServicesPage;
