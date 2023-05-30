import React, { useEffect } from "react";

const AvatarCreator = () => {
  useEffect(() => {
    const subdomain = "https://mpowa.readyplayer.me?frameApi"; // Replace with your custom subdomain
    const frame = document.getElementById("frame");

    frame.src = `${subdomain}`;

    const subscribe = (event) => {
      const json = parse(event);

      if (json?.source !== "readyplayerme") {
        return;
      }

      // Subscribe to all events sent from Ready Player Me once frame is ready
      if (json.eventName === "v1.frame.ready") {
        frame.contentWindow.postMessage(
          JSON.stringify({
            target: "readyplayerme",
            type: "subscribe",
            eventName: "v1.**",
          }),
          "*"
        );
      }

      // Get avatar GLB URL
      if (json.eventName === "v1.avatar.exported") {
        console.log(`Avatar URL: ${json.data.url}`);
        document.getElementById(
          "avatarUrl"
        ).innerHTML = `Avatar URL: ${json.data.url}`;
        document.getElementById("frame").hidden = true;
      }

      // Get user id
      if (json.eventName === "v1.user.set") {
        console.log(
          `User with id ${json.data.id} set: ${JSON.stringify(json)}`
        );
      }
    };

    const parse = (event) => {
      try {
        return JSON.parse(event.data);
      } catch (error) {
        return null;
      }
    };

    window.addEventListener("message", subscribe);

    return () => {
      window.removeEventListener("message", subscribe);
    };
  }, []);

  const displayIframe = () => {
    document.getElementById("frame").hidden = false;
  };

  return (
    <div className="bg-[#071506] h-full flex justify-center flex-col ">
      <button onClick={displayIframe} className=" mb-3 w-40 ml-3 px-8 border ">
        Choose Avatar
      </button>
      {/* <p id="avatarUrl">Avatar URL:</p> */}

      <iframe
        id="frame"
        className="frame w-full h-full"
        allow="camera *; microphone *; clipboard-write"
        hidden
      ></iframe>
    </div>
  );
};

export default AvatarCreator;
