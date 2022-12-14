export const Header = ({ title }: HeaderProps) => (
  <header>
    <h1>{title}</h1>
  </header>
);

export interface HeaderProps {
  title: string;
}
