export default function Hamburger() {
  const menu = document.getElementById("sideBar");
  const hideMenu = () => {
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-10 p-2 rounded-md border border-light-border bg-light-card dark:border-dark-border dark:bg-dark-card md:hidden cursor-pointer"
      onClick={() => hideMenu()}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}
