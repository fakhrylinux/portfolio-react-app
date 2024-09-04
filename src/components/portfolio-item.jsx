import PropTypes from "prop-types";

function PortfolioItem({ title, link, body }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-0">{title}</h3>
        <div className="subheading mb-3">
          <a href={link}>{link}</a>
        </div>
        <p>{body}</p>
      </div>
    </div>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PortfolioItem;
