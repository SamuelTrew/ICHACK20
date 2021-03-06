import React from "react";
import Layout from "../components/layout";
import Slider from "../components/Slider";
import ImageUpload from "../components/ImageUpload";

class ComparisonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter_type: 'protanopia'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleOptionChange = changeEvent => {
    this.setState({
      filter_type: changeEvent.currentTarget.firstElementChild.firstElementChild.value
    });
  }

  componentDidMount() {
    function initComparisons() {
      console.log("TEST")
      let overlay = document.getElementsByClassName("overlay");
      for (let i = 0; i < overlay.length; i++) {
        compareImages(overlay[i]);
      }
      function compareImages(img) {
        let clicked = 0;
        let width = img.offsetWidth;
        let slider = img.previousElementSibling;
        img.style.width = width / 2 + "px";
        slider.addEventListener("mousedown", slideReady);
        window.addEventListener("mouseup", slideFinish);
        slider.addEventListener("touchstart", slideReady);
        window.addEventListener("touchstop", slideFinish);
        function slideReady(event) {
          event.preventDefault();
          clicked = 1;
          window.addEventListener("mousemove", slideMove);
          window.addEventListener("touchmove", slideMove);
        }
        function slideFinish() {
          clicked = 0;
        }
        function slideMove(event) {
          let pos;
          if (clicked === 0) return false;
          pos = getCursorPos(event)
          if (pos < 0) pos = 0;
          if (pos > width) pos = width;
          slide(pos);
        }
        function getCursorPos(event) {
          let rect, x = 0;
          event = event || window.event;
          rect = img.getBoundingClientRect();
          x = event.pageX - rect.left;
          x = x - window.pageXOffset;
          return x;
        }
        function slide(x) {
          img.style.width = x + "px";
          slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
      }
    }
    initComparisons()
  }

  render() {
    return (
      <>
        <Layout>
          <div className="container comparisons-container">
            <div className="container__row container-comparisons-row">
              <div className="container__col-sm-3">
                <h3>Test</h3>
                <p>Upload your own image and see how it appears through a color impairment filter.</p>
                <div className="form-check" onClick={this.handleOptionChange}>
                  <label>
                    Protanopia
                    <input
                      type="radio"
                      name="simulation"
                      value="protanopia"
                      checked={this.state.filter_type === "protanopia"}
                      readOnly
                    />
                    <span className="form-check-mark"></span>
                  </label>
                </div>

                <div className="form-check" onClick={this.handleOptionChange}>
                  <label>
                    Protanomaly
                    <input
                      type="radio"
                      name="simulation"
                      value="protanomaly"
                      checked={this.state.filter_type === "protanomaly"}
                      readOnly
                    />
                    <span className="form-check-mark"></span>
                  </label>
                </div>

                <div className="form-check" onClick={this.handleOptionChange}>
                  <label>
                    Deuteranopia
                    <input
                      type="radio"
                      name="simulation"
                      value="deuteranopia"
                      checked={this.state.filter_type === "deuteranopia"}
                      readOnly
                    />
                    <span className="form-check-mark"></span>
                  </label>
                </div>

                <div className="form-check" onClick={this.handleOptionChange}>
                  <label>
                    Deuteranomaly
                    <input
                      type="radio"
                      name="simulation"
                      value="deuteranomaly"
                      checked={this.state.filter_type === "deuteranomaly"}
                      readOnly
                    />
                    <span className="form-check-mark"></span>
                  </label>
                </div>

                <div className="form-check" onClick={this.handleOptionChange}>
                  <label>
                    Tritanopia
                    <input
                      type="radio"
                      name="simulation"
                      value="tritanopia"
                      checked={this.state.filter_type === "tritanopia"}
                      readOnly
                    />
                    <span className="form-check-mark"></span>
                  </label>
                </div>

                <div className="form-check" onClick={this.handleOptionChange}>
                  <label>
                    Tritanomaly
                    <input
                      type="radio"
                      name="simulation"
                      value="tritanomaly"
                      checked={this.state.filter_type === "tritanomaly"}
                      readOnly
                    />
                    <span className="form-check-mark"></span>
                  </label>
                </div>

                <div className="form-check" onClick={this.handleOptionChange}>
                  <label>
                    Achromatopsia
                    <input
                      type="radio"
                      name="simulation"
                      value="achromatopsia"
                      checked={this.state.filter_type === "achromatopsia"}
                      readOnly
                    />
                    <span className="form-check-mark"></span>
                  </label>
                </div>

                <div className="form-check" onClick={this.handleOptionChange}>
                  <label>
                    Achromatomaly
                    <input
                      type="radio"
                      name="simulation"
                      value="achromatomaly"
                      checked={this.state.filter_type === "achromatomaly"}
                      readOnly
                    />
                    <span className="form-check-mark"></span>
                  </label>
                </div>
              </div>

              <div className="container__col-sm-1"></div>

              <div className="container__col-sm-8 container-comparisons-images">
                <ImageUpload filter_type={this.state.filter_type} />
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default ComparisonPage;
