import React from "react";
import { MdSearch } from '@/assets/icons';


function Searchbar() {
    return (
        <>
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    name="text"
                    className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
                <button type='submit' className='!p-2 text-2xl'><MdSearch /></button>

            </div>
        </>
    )
}
export default Searchbar;