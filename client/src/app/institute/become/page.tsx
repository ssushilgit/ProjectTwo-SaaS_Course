function becomeInstitute(){
    return(
        <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            {/* Logo and Heading */}
            <div className="text-center">
            <h1 className="text-2xl font-semibold text-green-600 flex items-center justify-center">
                <span className="mr-1 text-3xl font-bold">Create</span>
                Institute
            </h1>
            <p className="text-gray-500 text-sm mt-1">
                Do you want to become an institute? let's do it!
            </p>
            </div>
            {/* Divider */}
            <div className="my-6 border-t border-gray-300 relative">
            <span className="absolute top-[-10px] bg-white left-1/2 transform -translate-x-1/2 px-3 text-gray-500">
                CREATE
            </span>
            </div>
            {/* Form */}
            <form className="space-y-4">
            <div>
                <input type="text" placeholder="Institute Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
            </div>
            <div>
                <input type="text" placeholder="Phone Number" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
            </div>
            <div>
                <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
            </div>
            <div>
                <input type="text" placeholder="Address" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
            </div>
            <div>
                <input type="text" placeholder="Pan No / Vat No" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
            </div>
            
            
            {/* Submit Button */}
            <button type="submit" className="w-full bg-gradient-to-br from-green-600 to-emerald-400 text-white py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition">
                Create
            </button>
            </form>
           
        
        </div>
        </div>

    )
}

export default becomeInstitute