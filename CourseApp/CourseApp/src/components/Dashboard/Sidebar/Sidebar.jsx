const Sidebar = () => {
  return (
    <aside className="w-64 bg-black text-white shadow-lg fixed h-full">
      <div className="p-5 border-b border-gray-700">
        <h1 className="text-2xl font-bold">CourseArena</h1>
      </div>
      <nav className="mt-5">
        <ul>
          <li className="p-4 hover:bg-gray-700"><a href="#dashboard">Dashboard</a></li>
          <li className="p-4 hover:bg-gray-700"><a href="#profile">Profile</a></li>
          <li className="p-4 hover:bg-gray-700"><a href="#courses">Courses</a></li>
          <li className="p-4 hover:bg-gray-700"><a href="#contact">Contact Admin</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
