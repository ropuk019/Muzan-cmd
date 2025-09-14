export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Welcome to Muzan CMD</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Premium command store for GoatBot v2 messenger bots
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
