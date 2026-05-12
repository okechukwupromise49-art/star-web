    export function Service(){
        return(
        
            <div className="py-10">
  {/* SECTION HEADING */}
  <h1 className="text-2xl mt-10 font-semibold text-center mb-8">
    Services offered by the company
  </h1>

  {/* CARDS GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

    {/* SERVICE CARD 1 */}
    <div className="border rounded-lg p-5 shadow hover:shadow-lg transition">
      <img
        src="/images/service1.png" 
        alt="Service 1"
        className="h-16 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center mb-2">
        Web Development
      </h2>
      <p className="text-center text-gray-600 mb-4">
        Build responsive and modern websites for your business.
      </p>
      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Learn More/Book service
      </button>
    </div>

    {/* SERVICE CARD 2 */}
    <div className="border rounded-lg p-5 shadow hover:shadow-lg transition">
      <img
        src="/images/service2.png" 
        alt="Service 2"
        className="h-16 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center mb-2">
        Mobile App Development
      </h2>
      <p className="text-center text-gray-600 mb-4">
        Create native and cross-platform apps for Android and iOS.
      </p>
      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Learn More/Book service
      </button>
    </div>

    {/* SERVICE CARD 3 */}
    <div className="border rounded-lg p-5 shadow hover:shadow-lg transition">
      <img
        src="/images/service3.png" 
        alt="Service 3"
        className="h-16 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center mb-2">
        UI/UX Design
      </h2>
      <p className="text-center text-gray-600 mb-4">
        Design user-friendly interfaces and experiences for your products.
      </p>
      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Learn More/Book service
      </button>
    </div>

  </div>
                <br />
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

    {/* SERVICE CARD 1 */}
    <div className="border rounded-lg p-5 shadow hover:shadow-lg transition">
      <img
        src="/images/service1.png" 
        alt="Service 1"
        className="h-16 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center mb-2">
        Solar installation
      </h2>
      <p className="text-center text-gray-600 mb-4">
        Reliable solar installation for clean energy
      </p>
      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Learn More/Book service
      </button>
    </div>

    {/* SERVICE CARD 2 */}
    <div className="border rounded-lg p-5 shadow hover:shadow-lg transition">
      <img
        src="/images/service2.png" 
        alt="Service 2"
        className="h-16 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center mb-2">
        Photocopier Repair/Mainteinance
      </h2>
      <p className="text-center text-gray-600 mb-4">
        Expert photocopier repair & maintenance
      </p>
      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Learn More/Book service
      </button>
    </div>

    {/* SERVICE CARD 3 */}
    <div className="border rounded-lg p-5 shadow hover:shadow-lg transition">
      <img
        src="https://www.ricoh.co.uk/products/office-printers-fax/all-in-one-printers/" 
        

        className="h-16 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center mb-2">
        CCTV installation
      </h2>
      <p className="text-center text-gray-600 mb-4">
        Professional CCTV installation for reliable security and 
        24/7 surveillance.
      </p>
      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Learn More/Book service
      </button>
    </div>

  </div>
</div>


            
        )
    }