import React from "react";

function Sidebar({ items, active }){
    return (
        <div className="sidebar">
            {items.map((item) => (
                <div key={item} className={item ===active ? "active" : ""}>
                    {item}
                </div>
            ))}
        </div>
    );
}

export default Sidebar;