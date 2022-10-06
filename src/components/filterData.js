import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';

function FilterData({ handleFilter }) {
  const filter = [10, 20, 50, 100];
  return (
    <Dropdown onSelect={handleFilter}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {filter.map((item) => (
          <Dropdown.Item key={item}>{item}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

FilterData.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterData;
