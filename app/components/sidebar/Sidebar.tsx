"use client";

interface SidebarProps {
  onFilterChange: (filterId: number) => void;
}

const Sidebar = ({ onFilterChange }: SidebarProps) => {
  const categories = [
    { id: 0, label: "Mostrar todo", color: "bg-gray-400" },
    { id: 1, label: "Ideas", color: "bg-green_category" },
    { id: 2, label: "Por hacer", color: "bg-orange_category" },
    { id: 3, label: "Terminado", color: "bg-blue_category" },
  ];

  return (
    <div className="flex flex-col space-y-2 p-4 text-lg text-gray-600">
      <p className="text-center font-Anaheim text-gray_primary">Categorías</p>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className="text-left font-medium hover:bg-gray_secondary flex flex-row items-center space-x-2"
        >
          <div className={`${category.color} rounded-full p-1 animate-pulse ms-10`}></div>
          <span>{category.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
