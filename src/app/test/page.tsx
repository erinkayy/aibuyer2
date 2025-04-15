export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600">Test Page</h1>
        <p className="mt-4 text-gray-700">
          This is a test page to verify that Next.js routing and Tailwind CSS are working correctly.
        </p>
        <div className="mt-6">
          <a 
            href="/" 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Go to Home Page
          </a>
        </div>
        <div className="mt-4">
          <a 
            href="/test.html" 
            className="text-blue-600 hover:underline"
          >
            View Static Test Page
          </a>
        </div>
      </div>
    </div>
  );
} 