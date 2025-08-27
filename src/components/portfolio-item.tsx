function PortfolioItem({ title, link, body }: PortfolioItemProps) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-0">{title}</h3>
        <div className="subheading mb-3">
          <a href={link} target="_blank">
            {link}
          </a>
        </div>
        <p>{body}</p>
      </div>
    </div>
  );
}

interface PortfolioItemProps {
  title: string;
  link: string;
  body: string;
}

export default PortfolioItem;
