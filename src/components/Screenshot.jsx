import React, { createRef } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
import Time from "./Time";
import Sun from "./Sun";

export default function Screenshot() {
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot();

  const getImage = () => takeScreenShot(ref.current);

  const download = (image, { name = "my-chosen-date-an-time-saved-screnshot-for-somethimg-awesome", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <div>
      <div
      className="time-container-for-ss"
        ref={ref}
      >
        <Time />
      </div>
      <section className="save-container">
          <p className="ss-instruct">
          When your are done and have picked that seclected time an date, click <button className="ss-btn" onClick={getImage}> here
        </button> to capture it ={'>'}
        </p>
        
        <div className="ss-img">
          {image ? <img
            className="screenshot-img"
            height="100"
            src={image}
            alt={"ScreenShot"}
            />
            :
            <Sun />
}
        </div>
        & now you can
        <button className="save-btn" onClick={downloadScreenshot}>SAVE IT</button>
        for shareing w/ friends + corwokers :)
      </section>
    </div>
  );
}
