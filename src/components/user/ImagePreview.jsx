import React, { Component } from "react";
import { Row, Col, Popover, Button, OverlayTrigger } from "react-bootstrap";
import "./imagePreview.css";
import { deleteImage } from "../../app_data/servelCall";

class ImagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      fileToUplaod: [],
      filesFromServer: []
    };
  }

  fileSelectedHandler = e => {
    console.log(e.target.files);
    this.setState(
      {
        fileToUplaod: this.state.fileToUplaod.concat(e.target.files[0]),
        images: this.state.images.concat(URL.createObjectURL(e.target.files[0]))
      },
      () => {
        this.props.setFiles(this.state.fileToUplaod);
        console.log(this.state);
      }
    );
  };

  removeImage = i => {
    console.log(i);
    const { images, fileToUplaod } = this.state;
    this.setState({
      images: images.slice(0, i).concat(images.slice(i + 1, images.length)),
      fileToUplaod: fileToUplaod
        .slice(0, i)
        .concat(fileToUplaod.slice(i + 1, fileToUplaod.length))
    });
  };

  removeImageFromServer = (i, image_id) => {
    const { filesFromServer } = this.state;
    deleteImage(image_id);
    this.setState({
      filesFromServer: filesFromServer
        .slice(0, i)
        .concat(filesFromServer.slice(i + 1, filesFromServer.length))
    });
  };

  componentDidMount() {
    const filesFromServer = this.props.imageList;
    if (filesFromServer) {
      this.setState({ filesFromServer });
    }
  }

  render() {
    return (
      <Row>
        {this.state.images.map((image, i) => (
          <Col key={i} sm={3}>
            <div
              className="imageBox"
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => this.removeImage(i)}
            >
              <div className="imageBoxHover">
                <i className="far fa-trash-alt"></i>
              </div>
            </div>
          </Col>
        ))}
        <Col sm={3}>
          <input
            type="file"
            name="file"
            id="file"
            className="inputfile"
            onChange={this.fileSelectedHandler}
          />
          <label htmlFor="file" className="imageBox">
            +<i className="far fa-images"></i>
          </label>
        </Col>
        {this.state.filesFromServer.map((image, i) => (
          <Col key={i} sm={3}>
            <OverlayTrigger placement="auto" overlay={popover}>
              <div
                id={image[0]}
                className="imageBox"
                style={{
                  backgroundImage: `url(http://localhost:3000/${image[1]})`
                }}
                //   onClick={() => this.removeImageFromServer(i, image[0])}
              >
                <div className="imageBoxHover">
                  <i className="far fa-trash-alt"></i>
                </div>
              </div>
            </OverlayTrigger>
          </Col>
        ))}
      </Row>
    );
  }
}
const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Wait!</Popover.Title>
    <Popover.Content>
      Are you sure you want to <strong>delete</strong> the image? <br />
    </Popover.Content>
  </Popover>
);
export default ImagePreview;
