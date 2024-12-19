import React, { useEffect, useState } from "react";
import { baseApi } from "../api/axiosInstance"; // Import the axios instance
import JobsCard from "../components/Jobs/JobsCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllJobs = async () => {
    try {
      const response = await baseApi.get("/v2/list", {
        params: {
          query: "ReactJs", // Example query
          location: "India", // Example location
        },
      });
      console.log("API Response:", response.data); // Log response for debugging
      setJobs(response.data.jobs); // Assuming 'jobs' is the key in the response
      setLoading(false);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to fetch job posts");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <div className="jobs-container w-[80%] m-auto">
      <h2 className="text-2xl font-semibold mb-6">Job Listings</h2>
      {loading && <p>Loading jobs...</p>}
      {error && <p>{error}</p>}
      <div className="flex flex-col gap-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <JobsCard
  key={job.id}
  title={job.title}
  companyName={job.company}
  salary={job.salaryRange || "Not disclosed"} // Pass salary
  location={job.location || "N/A"}
  description={job.description || "No description available"} // Full job description
  datePosted={job.datePosted || "Unknown"} // Pass date posted
/>

          ))
        ) : (
          <p>No jobs available</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
