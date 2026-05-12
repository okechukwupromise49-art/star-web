export function Footer() {
  return (
    <div className="mt-10">
      <hr />

      <h2 className="text-center text-gray-500 my-5 font-bold text-4xl">
        Star Tech
      </h2>

      <p className="text-center text-gray-400">
        © YourCompany 2025. All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 my-4 text-xl">
        <i className="fa-brands fa-facebook-f cursor-pointer"></i>
        <i className="fa-brands fa-x-twitter cursor-pointer"></i>
        <i className="fa-brands fa-linkedin-in cursor-pointer"></i>
        <i className="fa-brands fa-instagram cursor-pointer"></i>
      </div>

      {/* Language */}
      <div className="flex justify-center items-center gap-2 text-gray-500">
        <i className="fa-solid fa-globe"></i>
        <p>English</p>
        <i className="fa-solid fa-dollar-sign ml-10"></i>
        <p>USD</p>
        <i className="fa-solid fa-star ml-5"></i>

      </div>
    </div>
  );
}
