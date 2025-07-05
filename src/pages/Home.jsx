import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Home Page
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
            This is the home page of your PWA React application
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link 
              to="/about" 
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
            >
              Go to About
            </Link>
            <Link 
              to="/users" 
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
            >
              View Users
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Features</h2>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li>• React Router Navigation</li>
              <li>• Responsive Design</li>
              <li>• Tailwind CSS Styling</li>
              <li>• PWA Ready</li>
              <li>• API Integration</li>
              <li>• Mobile Optimized</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Quick Links</h2>
            <div className="space-y-2">
              <Link to="/about" className="block text-blue-600 hover:text-blue-800 text-sm sm:text-base">
                → About Page
              </Link>
              <Link to="/users" className="block text-blue-600 hover:text-blue-800 text-sm sm:text-base">
                → Users Page
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 sm:p-6 rounded-lg text-white text-center">
            <div className="text-2xl sm:text-3xl font-bold">10+</div>
            <div className="text-xs sm:text-sm opacity-90">Users</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 sm:p-6 rounded-lg text-white text-center">
            <div className="text-2xl sm:text-3xl font-bold">3</div>
            <div className="text-xs sm:text-sm opacity-90">Pages</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 sm:p-6 rounded-lg text-white text-center">
            <div className="text-2xl sm:text-3xl font-bold">100%</div>
            <div className="text-xs sm:text-sm opacity-90">Responsive</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 sm:p-6 rounded-lg text-white text-center">
            <div className="text-2xl sm:text-3xl font-bold">PWA</div>
            <div className="text-xs sm:text-sm opacity-90">Ready</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Explore our features and see what this PWA has to offer
          </p>
          <Link 
            to="/users" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Explore Users
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
