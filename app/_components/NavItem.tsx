export default function NavItem({
  itemName,
  href,
}: {
  itemName: string;
  href: string;
}) {
  return (
    <li className="hover:brightness-200">
      <a href={href}>{itemName}</a>
    </li>
  );
}
