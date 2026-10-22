import Link from "next/link";

const navLinks = [
  { title: "Projects", href: "/#projects" },
  { title: "Experience", href: "/#experience" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/#contact" },
];

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className='sticky top-0 z-50 border-b border-zinc-200 bg-paper/90 backdrop-blur'>
      <div className='view-container flex h-14 items-center justify-between'>
        <Link
          href='/'
          className='font-display text-sm font-bold tracking-tight'
        >
          PS<span className='text-accent'>.</span>
        </Link>
        <ul className='flex items-center gap-5 max-sm:gap-4'>
          {navLinks.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className='font-display text-xs font-semibold uppercase tracking-wide text-zinc-600 transition-colors hover:text-accent'
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
