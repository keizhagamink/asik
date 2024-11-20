const Services = () => {
    return (
      <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
        <div className="container xl:max-w-6xl mx-auto px-4">
          {/* Heading start */}
          <header className="text-center mx-auto mb-12 lg:px-20">
            <h2 className="text-2xl leading-normal mb-2 font-bold text-black">What We Do</h2>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 60"
              style={{ margin: "0 auto", height: "35px" }}
              xmlSpace="preserve"
            >
              <circle
                cx="50.1"
                cy="30.4"
                r="5"
                className="stroke-primary"
                style={{ fill: "transparent", strokeWidth: "2", strokeMiterlimit: "10" }}
              />
              <line
                x1="55.1"
                y1="30.4"
                x2="100"
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
              />
              <line
                x1="45.1"
                y1="30.4"
                x2="0"
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
              />
            </svg>
            <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Save time understanding and conserving mangrove ecosystems with ROVEBOND's innovative tools.
            </p>
          </header>
          {/* End heading */}
  
          {/* row */}
          <div className="flex flex-wrap flex-row -mx-4 text-center">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                ),
                title: "Maps Stock Carbon",
                description: "Discover the power of data through interactive maps that reveal blue carbon stocks and mangrove health in Pulau Tunda.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-chat-square-dots" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                ),
                title: "Blogs",
                description: "Explore insightful articles about mangrove conservation, the impact of blue carbon, and sustainable practices for ecosystem management.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-badge-ad" viewBox="0 0 16 16">
                    <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z" />
                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                  </svg>
                ),
                title: "About Us",
                description: "ROVEBOND is dedicated to bridging technology and conservation, offering an engaging platform for researchers, policymakers, and the community to preserve mangroves and their vital role in combating climate change.",
              },
              // Add more service blocks as needed
            ].map((service, index) => (
              <div key={index} className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">{service.icon}</div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{service.title}</h3>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* end row */}
        </div>
      </div>
    );
  };
  
  export default Services;
  