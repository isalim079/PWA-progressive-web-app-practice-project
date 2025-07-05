import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
            Learn more about our PWA React application
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
            We are building a modern Progressive Web Application using React and Vite. 
            Our goal is to create fast, reliable, and engaging user experiences that work 
            seamlessly across all devices and network conditions.
          </p>
          
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3 text-blue-800">Frontend</h3>
              <ul className="space-y-1 text-sm sm:text-base text-gray-600">
                <li>• React 19</li>
                <li>• Vite</li>
                <li>• React Router</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3 text-green-800">Features</h3>
              <ul className="space-y-1 text-sm sm:text-base text-gray-600">
                <li>• Progressive Web App</li>
                <li>• Responsive Design</li>
                <li>• Fast Hot Reload</li>
                <li>• Modern ES6+ JavaScript</li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-3xl mb-2">📱</div>
              <h4 className="font-semibold mb-2">Mobile First</h4>
              <p className="text-sm text-gray-600">Optimized for mobile devices</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold mb-2">Fast Loading</h4>
              <p className="text-sm text-gray-600">Quick page loads and navigation</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-3xl mb-2">🎨</div>
              <h4 className="font-semibold mb-2">Modern UI</h4>
              <p className="text-sm text-gray-600">Clean and intuitive design</p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-600">
              <div>
                <p className="mb-2"><strong>Email:</strong> contact@example.com</p>
                <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
              <div>
                <p className="mb-2"><strong>Address:</strong></p>
                <p>123 Tech Street<br />Innovation City, IC 12345</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link 
            to="/" 
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
          >
            Back to Home
          </Link>
          <Link 
            to="/users" 
            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
          >
            View Users
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
