import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LifeSideNavbar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('../../../public/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className="text-4xl">All Category</h2>
            <div className=" mt-4 ml-5">
                {
                    categories.map(category => <Link 
                        className="block text-2xl 
                         font-semibold py-2" 
                        key={category.id}
                    >{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LifeSideNavbar;