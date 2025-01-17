import React from 'react';
import { Link } from 'react-router-dom';
import facebook from "../../pictures/facebook.png";
import instagram from "../../pictures/instagram.png";
import x from "../../pictures/x.png";
import email from "../../pictures/email.png";
import deliver from "../../pictures/delivercar.png";
import mobile from "../../pictures/mobile.png";
import call from "../../pictures/call.png";




function Footer() {
  return (
    <footer className="flex flex-col justify-around w-full bg-blue-800/80 text-white">
      <section
        id="upper-footer"
        className="flex flex-col md:flex-row justify-around mt-10 w-11/12 mx-auto gap-6"
      >
        {/* About Us */}
        <div className="w-full md:w-1/4">
          <h1 className="font-extrabold text-xl">About Us</h1>
          <div className="w-1/3 h-1 bg-white mt-2 mb-3"></div>
          <p className="font-light leading-7">
            We are an award-winning pest control company with over 20 years of experience in the business. We provide a wide range of services for residential, commercial, and industrial-level clients.
          </p>
          <div className="flex gap-2 mt-5">
            <a href="#!" className="inline-block relative">
              <img
                src={facebook}
                alt="Facebook"
                className="w-6 h-6 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]"
              />
            </a>
            <a href="#!" className="inline-block relative">
              <img
                src={instagram}
                alt="Instagram"
                className="w-6 h-6 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]"
              />
            </a>
            <a href="#!" className="inline-block relative">
              <img
                src={x}
                alt="X"
                className="w-6 h-6 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]"
              />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div className="w-full md:w-1/4">
          <h1 className="font-extrabold text-xl">Contact Us</h1>
          <div className="w-1/3 h-1 bg-white mt-2 mb-3"></div>
          {[
            { image: deliver, title: 'Address', text: '75 Canal street, Toronto' },
            { image: call, title: 'Emergency Contact', text: '+112558525' },
            { image: mobile, title: 'Mobile', text: '+02258555' },
            { image: email, title: 'Email', text: 'support@toronto.com' },
          ].map((item, index) => (
            <div key={index} className="flex items-center mt-5">
              <div className="mr-4">
                <img src={item.image} alt={item.title} className="h-7 w-7" />
              </div>
              <div className="flex flex-col">
                <div className="font-bold">{item.title}</div>
                <div className="mt-2 font-light">{item.text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4">
          <h1 className="font-extrabold text-xl">Quick Links</h1>
          <div className="w-1/3 h-1 bg-white mt-2 mb-3"></div>
          <ul className="mt-3 space-y-3">
            {[
              { to: '/contact', label: 'Quote' },
              { to: '/about', label: 'About Us' },
              { to: '/contact', label: 'Contact Us' },
              { to: '/faq', label: 'FAQ' },
              { to: '/services', label: 'Services' },
            ].map((link, index) => (
              <li key={index} className="flex items-center">
                <span className="font-extrabold text-lg mr-4">&rarr;</span>
                <Link to={link.to} className="text-lg font-bold hover:text-purple-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="w-full md:w-1/4">
          <h1 className="font-extrabold text-xl">Services</h1>
          <div className="w-1/3 h-1 bg-white mt-2 mb-3"></div>
          <ul className="mt-3 space-y-3">
            {[
              { to: '/component1', label: 'Ant Control' },
              { to: '/component2', label: 'Bed Bug Control' },
              { to: '/component3', label: 'Cockroach Control' },
              { to: '/component4', label: 'Mosquito Control' },
              { to: '/component5', label: 'Rodent Control' },
            ].map((service, index) => (
              <li key={index} className="flex items-center">
                <span className="font-extrabold text-lg mr-4">&rarr;</span>
                <Link to={service.to} className="text-lg font-bold hover:text-purple-500">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="w-11/12 h-[2px] bg-white mx-auto my-3"></div>

      {/* Footer Copyright */}
      <section className="w-full flex justify-center text-center py-3">
        <div>Copyright &copy; Toronto. All Rights Reserved</div>
      </section>
    </footer>
  );
}

export default Footer;
