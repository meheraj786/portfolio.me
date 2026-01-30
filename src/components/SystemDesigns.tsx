"use client";
import React, { useState } from "react";
import SystemDesignCard from "./SystemDesignCard";

// Static data — তোমার কোর্সের projects দিয়ে fill করো
// পরে dynamic fetch যোগ করতে পারো (e.g. GitHub API দিয়ে)
const caseStudies = [
  {
    title: "Scalable Ride-Sharing Platform (like Pathao/Uber)",
    description: "Designed and implemented a high-level architecture for a ride-sharing service handling 1M+ daily rides with low latency. Covered microservices, real-time matching, payment integration, fault tolerance, and scaling strategies.",
    keyFeatures: [
      "Microservices (User, Ride, Driver, Payment)",
      "Kafka for event-driven communication",
      "Redis caching + PostgreSQL + MongoDB",
      "Load balancing, Circuit breakers, Rate limiting",
      "Real-time updates via WebSockets",
    ],
    diagramUrl: "/images/system-design/ride-sharing-diagram.png", // Excalidraw/Draw.io থেকে PNG export করে রাখো
    github: "https://github.com/meheraj786/ride-sharing-system-design", // যদি prototype repo থাকে
    learnings: "Learned trade-offs between monolith vs microservices, eventual consistency in distributed systems.",
  },
  {
    title: "AI-Powered Recommendation System",
    description: "Built a scalable recommendation engine similar to Netflix/YouTube suggestions. Focused on collaborative filtering, content-based filtering, hybrid approach, and handling cold-start problems.",
    keyFeatures: [
      "User-Item matrix with collaborative filtering",
      "TensorFlow/PyTorch for ML models",
      "Cassandra/Redis for fast retrieval",
      "A/B testing framework",
      "Offline batch processing + real-time updates",
    ],
    diagramUrl: "/images/system-design/recommendation-system-diagram.png",
    github: "https://github.com/meheraj786/ai-recommendation-system",
    learnings: "Understood data pipelines, model serving, personalization at scale.",
  },
  {
    title: "YouTube-like Video Streaming Platform",
    description: "High-level design for a video upload, processing, storage, and streaming service. Handled transcoding, CDN distribution, adaptive bitrate, search, and recommendations.",
    keyFeatures: [
      "Video upload + transcoding pipeline (FFmpeg/Lambda)",
      "S3 + CloudFront CDN",
      "Elasticsearch for search",
      "Microservices for metadata, comments, likes",
      "DASH/HLS streaming protocols",
    ],
    diagramUrl: "/images/system-design/youtube-clone-diagram.png",
    github: null,
    learnings: "Mastered content delivery networks, eventual consistency, and high-throughput systems.",
  },
];

const SystemDesignCaseStudies = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedStudies = showAll ? caseStudies : caseStudies.slice(0, 3);

  return (
    <div className="py-5">
      <h2
        className="relative text-3xl font-primary text-left font-bold text-black
          after:content-[''] after:absolute after:left-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-60 after:transition-all after:duration-300"
      >
        /System Design & Case Studies/
      </h2>

      <div className="flex flex-col gap-y-6 mt-6">
        {displayedStudies.map((study, idx) => (
          <SystemDesignCard key={idx} {...study} />
        ))}
      </div>

      {caseStudies.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-white font-body mx-auto cursor-pointer bg-background px-6 py-2 mt-10 rounded-sm transition-colors duration-200 border border-white hover:border-black hover:bg-white hover:text-black"
        >
          {showAll ? "Show Less" : "View More"}
        </button>
      )}
      
    </div>
  );
};

export default SystemDesignCaseStudies;