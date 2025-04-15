export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Welcome to Next.js!</h1>
      <p className="text-xl mb-4">
        Get started by editing <code className="bg-gray-100 p-1 rounded">src/app/page.tsx</code>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <a
          href="https://nextjs.org/docs"
          className="p-6 border rounded-lg hover:text-blue-600 hover:border-blue-600 transition-colors"
        >
          <h2 className="text-2xl font-bold mb-2">Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
        <a
          href="https://nextjs.org/learn"
          className="p-6 border rounded-lg hover:text-blue-600 hover:border-blue-600 transition-colors"
        >
          <h2 className="text-2xl font-bold mb-2">Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
      </div>
    </div>
  )
} 