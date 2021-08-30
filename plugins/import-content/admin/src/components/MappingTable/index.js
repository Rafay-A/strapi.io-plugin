import React, { Component } from "react";
import PropTypes from "prop-types";
class MappingTable extends Component {
  state = { mapping: {} };
}
MappingTable.propTypes = {
  analysis: PropTypes.object.isRequired,
  targetModel: PropTypes.object,
  onChange: PropTypes.func
};
export default MappingTable;