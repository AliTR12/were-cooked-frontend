import { Link } from "react-router-dom";

export default function HomeView({ presenter }) {
  const { ingredients, setIngredients, filteredRecipes, handleSearch, page, handlePageChange, recipesPerPage } = presenter;

  const paginated = filteredRecipes.slice((page - 1) * recipesPerPage, page * recipesPerPage);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-2 transition-colors duration-300">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl transition-colors duration-300">
        <h1 className="text-2xl font-bold mb-4">Cari Resep Berdasarkan Bahan</h1>
        <textarea
          className="w-full p-3 border rounded-xl mb-4 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-500"
          rows="2"
          placeholder="Contoh: ayam, kecap, cabai"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700" onClick={handleSearch}>
          Cari Resep
        </button>
        <button className="ml-4 bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600" onClick={presenter.handleRandom}>
          🎲 Acak Lagi
        </button>
        <p className="mt-4">
          <small>
            <i>
              Klik Acak Lagi untuk mendapatkan rekomendasi resep secara acak,
              <br />
              atau masukkan bahan yang ingin dicari, pisahkan dengan koma (,) dan klik Cari Resep.
            </i>
          </small>
        </p>

        <div className="mt-6 overflow-x-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            {paginated.length > 0 ? (
              paginated.map((recipe) => (
                <div 
                  key={recipe.id} 
                  className="p-4 rounded-xl shadow bg-white dark:bg-gray-700 dark:text-white dark:border-gray-500 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer"
                >
                  <img src={recipe.Image} alt={recipe.Title} className="w-full h-40 object-cover rounded-lg mb-2" />
                  <h2 className="text-lg font-semibold text-blue-700 dark:text-white hover:underline">
                    <Link to={`/resep/${recipe.id}`}>{recipe.Title}</Link>
                  </h2>
                  <p className="text-sm text-gray-600 truncate dark:text-white">{recipe["Ingredients Cleaned"]}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full">Masukkan bahan dan klik cari untuk melihat rekomendasi resep.</p>
            )}
          </div>
        </div>

        {/* Pagination */}
        {filteredRecipes.length > recipesPerPage && (
          <div className="mt-4 flex justify-center gap-4">
            <button onClick={() => handlePageChange(-1)} disabled={page === 1} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50">
              Prev
            </button>
            <span className="py-2 px-4">{page}</span>
            <button onClick={() => handlePageChange(1)} disabled={page * recipesPerPage >= filteredRecipes.length} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50">
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
