import seekButtonsHtml from "./index.html";
import "./index.scss";
import { parseDom } from "utils";

class SeekButtonsComponent {
  constructor(options = {}) {
    this.html = parseDom(seekButtonsHtml);
    this.options = options;
  }

  createEl(el) {
    let eleControlbar = el.querySelector(".prism-controlbar");
    eleControlbar.appendChild(this.html);
  }

  ready(player, e) {
    let rewindBtn = this.html.querySelector(".rewind");
    let forwardBtn = this.html.querySelector(".forward");

    let seekStep = this.options.step || 10;

    rewindBtn.onclick = () => {
      let currentTime = player.getCurrentTime();
      let newTime = Math.max(0, currentTime - seekStep);
      player.seek(newTime);
    };

    forwardBtn.onclick = () => {
      let currentTime = player.getCurrentTime();
      let duration = player.getDuration();
      let newTime = Math.min(duration, currentTime + seekStep);
      player.seek(newTime);
    };
  }
}

export default SeekButtonsComponent;
