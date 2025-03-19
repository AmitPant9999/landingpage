import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import debounce from "lodash.debounce"; // Import debounce for search optimization

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch user data or load from localStorage
  const fetchUserData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      localStorage.setItem("users", JSON.stringify(data)); // Store data in localStorage
      setUsers(data);
      setFilteredUsers(data);
    } catch (error) {
      setError("Failed to fetch user data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
      setFilteredUsers(JSON.parse(storedUsers));
    } else {
      fetchUserData();
    }
  }, [fetchUserData]);

  // Debounced search to filter users
  const debouncedSearch = debounce((query) => {
    if (query) {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, 300);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="user-list mt-24 bg-gray-50 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Users</h2>

        {/* Search Bar */}
        <input
          type="text"
          className="border p-2 rounded mb-4"
          placeholder="Search by user name"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {/* Display users or message if no users are found */}
        {filteredUsers.length === 0 ? (
          <p>No users found.</p>
        ) : (
          // React Swiper
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            loop={true}
            grabCursor={true}
            navigation={true}
            breakpoints={{
              500: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1, // 1 slide per view on small screens
              },
              768: {
                slidesPerView: 2, // 2 slides per view on medium screens
              },
              1024: {
                slidesPerView: 3, // 3 slides per view on large screens
              },
              1280: {
                slidesPerView: 4, // 4 slides per view on extra large screens
              },
            }}
          >
            {filteredUsers.map((user) => (
              <SwiperSlide key={user.id}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-800">
                    {user.name}
                  </h3>
                  <p className="text-gray-600">Username: {user.username}</p>
                  <p className="text-gray-600">Email: {user.email}</p>
                  <p className="text-gray-600">
                    Address: {user.address.street}, {user.address.suite},{" "}
                    {user.address.city}, {user.address.zipcode}
                  </p>
                  <p className="text-gray-600">Phone: {user.phone}</p>
                  <p className="text-gray-600">Website: {user.website}</p>
                  <p className="text-gray-600">Company: {user.company.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default UserList;
