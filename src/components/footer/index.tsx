"use client";
export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto flex justify-center items-center py-4 text-black">
        <p>&copy; {new Date().getFullYear()} strapi-nextjs </p>
      </div>
    </footer>
  );
}
