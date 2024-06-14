import React, { useEffect, useState } from "react";
import "./CSS/Members.css";
import Flatcard from "../components/Flatcard/Flatcard";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/getAllUsers", {
          credentials: "include",
        });
        const data = await response.json();
        setMembers(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function
  }, []);

  // Filter members based on search term and selected domain filter
  const filteredMembers = members.filter((member) => {
    // Filter by search term
    if (searchTerm && !member.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Filter by selected domain
    if (selectedFilter && member.domain.toLowerCase().trim('') !== selectedFilter.toLowerCase()) {
      return false;
    }

    return true;
  });

  return (
    <div className="members">
      <div className="members-header">
        <div className="heading">
          <h2>OUR MEMBERS</h2>
          <p>MEET OUR MEMBERS !</p>
        </div>

        {/* SEARCH BAR */}
        <div className="members-search-bar">
          <input
            type="text"
            placeholder="SEARCH MEMBERS BY NAME..."
            className="member-input-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* FILTERS */}
        <select
          name="Select Category"
          id=""
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="FrontEnd">FRONTEND</option>
          <option value="BackEnd">BACKEND</option>
          <option value="FullStack">FULLSTACK</option>
          <option value="DataAnalysis">DATA ANALYSIS</option>
          <option value="UI/UX">UI/UX</option>
          <option value="AI & ML">AI & ML</option>
        </select>
      </div>

      {/* All members */}
      <div className="flatcard-containers">
        {filteredMembers.map((student) => (
          <Flatcard
            key={student._id} // Assuming _id is unique
            name={student.name}
            role={student.domain}
            description={student.domain} // Consider changing this to a project description or bio
            profileImg={student.profile_image}
            phone={`https://wa.me/91${student.phone}?text=Hello!`}
            linkedin={student.LinkedIn_link}
            github={student.github_link}
            insta={student.Instagram_link}
            skills={student.skills}
            projects={student.projects}
          />
        ))}
      </div>
    </div>
  );
};

export default Members;
