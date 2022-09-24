export const Footer = ({ title }: FooterProps) => (
  <footer>
    <p>{title}</p>
  </footer>
);

export interface FooterProps {
  title: string;
}
