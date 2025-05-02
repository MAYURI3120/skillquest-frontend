import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">SkillQuest</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/quests" className="hover:underline">Quests</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
