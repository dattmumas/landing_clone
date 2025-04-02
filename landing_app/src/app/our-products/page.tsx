"use client";

export default function OurProducts() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen" 
         style={{ background: "var(--muted-background)" }}>
      <div style={{ 
        background: "var(--card-background)",
        color: "var(--card-foreground)"
      }} className="shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Our Products</h1>
        <p className="mb-4" style={{ opacity: 0.7 }}>
          Explore our range of innovative products designed to enhance your
          experience.
        </p>
        <button className="py-2 px-4 rounded" style={{ 
          backgroundColor: "var(--card-foreground)", 
          color: "var(--card-background)", 
          opacity: 0.9,
          transition: "opacity 0.3s ease"
        }}
        onMouseOver={(e) => e.currentTarget.style.opacity = "1"}
        onMouseOut={(e) => e.currentTarget.style.opacity = "0.9"}>
          Learn More
        </button>
      </div>
    </div>
  );
}
