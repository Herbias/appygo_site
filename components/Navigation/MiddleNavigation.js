function MiddleNavigation({ props }) {
  return (
    <div className="w-full m-6 flex items-center">
      <div className="w-1/4">
        <img className="inline-block h-16 w-16" src="/logo.png" />
        <span className="inline-block font-semibold text-xl tracking-tight">
          J4 Flower Shop
        </span>
      </div>
      <div className="w-2/4">
        <div className="flex w-full border rounded-r-l text-black">
          <input
            className="h-10 w-11/12 indent-4"
            type="search"
            placeholder="Search for flower?"
          />
          <div className="py-2 px-4 text-white">
            <svg
              className="fill-current h-5 w-5 m-auto"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-1/4 px-16 flex justify-around">
        <div className="w-2/4 text-center">
          <div className="h-10 w-10 p-2 inline-block border-white border-2 rounded-full">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"></path>
            </svg>
          </div>
        </div>
        <div className="w-2/4 text-center">
          <div className="h-10 w-10 p-2 inline-block border-white border-2 rounded-full">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M3,5 L4.33333333,9 L4,9 C2.34314575,9 1,10.3431458 1,12 C1,13.6568542 2.34314575,15 4,15 L17,15 L17,13 L4.00684547,13 C3.45078007,13 3,12.5561352 3,12 C3,11.4477153 3.44748943,11 3.99850233,11 L10.5,11 L17,11 L20,2 L4,2 L4,0.997030139 C4,0.453036308 3.54809015,0 2.9906311,0 L0,0 L0,2 L2,2 L3,5 Z M5,20 C6.1045695,20 7,19.1045695 7,18 C7,16.8954305 6.1045695,16 5,16 C3.8954305,16 3,16.8954305 3,18 C3,19.1045695 3.8954305,20 5,20 Z M15,20 C16.1045695,20 17,19.1045695 17,18 C17,16.8954305 16.1045695,16 15,16 C13.8954305,16 13,16.8954305 13,18 C13,19.1045695 13.8954305,20 15,20 Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleNavigation;
