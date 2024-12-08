import React from 'react'

const Footer = () => {
  return (
  

<footer className="pt-[180px]">
  <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-[1366px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-12 gap-16"> {/* Increased gap from gap-8 to gap-16 */}
        {/* First Section - Hekto */}
        <div className="col-span-2 md:col-span-3">
          <h5 className="font-semibold text-[38px] mb-6">Hekto</h5>
          <ul className="flex flex-col space-y-4"> {/* Increased space-y-2 to space-y-4 */}
            <form>
              <div className="flex flex-col sm:flex-row gap-2">
                <label htmlFor="newsletter1" className="sr-only">Email address</label>
                <input 
                  id="newsletter1" 
                  type="text" 
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Email address"
                />
                <button 
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
          </ul>
        </div>

        {/* Second Section - Categories */}
        <div className="col-span-2 md:col-span-3">
          <h5 className="font-semibold text-xl mb-6">Catagories</h5>
          <ul className="flex flex-col space-y-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
          </ul>
        </div>

        {/* Third Section - Customer Care */}
        <div className="col-span-2 md:col-span-3">
          <h5 className="font-semibold text-xl mb-6">Customer Care</h5>
          <ul className="flex flex-col space-y-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
          </ul>
        </div>

        {/* Fourth Section - Pages */}
        <div className="col-span-2 md:col-span-3">
          <h5 className="font-semibold text-xl mb-6">Pages</h5>
          <ul className="flex flex-col space-y-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
          </ul>
        </div>
      </div>

      Footer Bottom
      <div className="flex flex-col sm:flex-row justify-between py-8 my-8 border-t border-gray-200"> {/* Increased padding and margin */}
        <p className="text-gray-600">©Webecy - All Rights Reserved.</p>
        <ul className="flex space-x-6"> {/* Increased space-x-3 to space-x-6 */}
          <li><a href="#" className="text-gray-600 hover:text-gray-900"><svg className="w-6 h-6"><use href="#twitter"></use></svg></a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900"><svg className="w-6 h-6"><use href="#instagram"></use></svg></a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900"><svg className="w-6 h-6"><use href="#facebook"></use></svg></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
