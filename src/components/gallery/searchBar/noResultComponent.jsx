import React, { Component } from "react";
import { Button } from "react-bootstrap";

class NoResultComponent extends Component {
  render() {
    return (
      <div
        style={{
          padding: "16px",
          border: "2px dashed red",
          borderRadius: "0.25rem",
          margin: "16px"
        }}
      >
        <div class="srp-no-result-left-column">
          <h2>We didn't find matching results</h2>
          <p>There are no homes that match your search.</p>
          <Button variant="secondary" onClick={this.props.reset}>
            Remove All Filters
          </Button>
          {/* <div id="srp-noresult-clear-filters">
            <a
              href="#"
              id="clear-filters-pills"
              class="btn btn-primary round-cta"
              data-omtag="for_sale:srp_list:top:filters_clear_all"
            >
              {" "}
              Remove All Filters{" "}
            </a>
          </div> */}
        </div>
      </div>
    );
  }
}

export default NoResultComponent;
