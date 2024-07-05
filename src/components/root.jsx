import { Link, Outlet } from 'react-router-dom';

export default function Root() {
  const handleLogout = () => {
    const token = localStorage.getItem('token');
    if (token === null) return;
    localStorage.clear();
    window.alert('Sie wurden abgemeldet !');
    // Optional: Weitere Logout-Logik hinzufügen
  };

  return (
    <>
      <nav className="bg-blue-800 p-4 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-white text-lg font-bold"
          >
            Event Scheduler
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/create-event"
              className="text-gray-300 hover:text-white"
            >
              Create Event
            </Link>
            <Link
              to="/event-details"
              className="text-gray-300 hover:text-white"
            >
              Event Details
            </Link>
            <Link
              to="/sign-in"
              className="text-gray-300 hover:text-white"
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="text-gray-300 hover:text-white"
            >
              Sign Up
            </Link>
            <Link
              to="/"
              className="text-gray-300 hover:text-white"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
